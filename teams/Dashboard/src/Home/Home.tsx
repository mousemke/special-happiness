import React, { useEffect, useState } from "react";

import styles from "./Home.styles";

import type { Translator } from "translationary";
import type { DataItem } from "./Home.types";

// this import should instead be supplied by the SDK
/* eslint-disable import/no-relative-packages */
import type { SDKObject } from "../../../../src/useSDK";
/* eslint-enable */

const API_URL = "https://api.carbonintensity.org.uk/intensity";

// these would likely be supplied variables in the app,
// but for now we just use constants
const FROM = "2024-09-01T01:00Z";
const TO = "2024-10-01T01:00Z";

export const parseMonthAndDay = (isoString: string) => {
  const date = new Date(isoString);

  return date.toLocaleString("default", {
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit"
  });
};

export const parseData = (t: Translator, data: Array<DataItem>) =>
  data.map((d, i) => {
    const { intensity } = d;
    const { forecast, actual } = intensity;
    return (
      <div key={i}>
        <span>
          {parseMonthAndDay(d.from)} - {parseMonthAndDay(d.to)} {t("FORECAST")}{" "}
          {forecast} : {t("ACTUAL")}
        </span>
        <span className={styles.result(forecast - actual)}> {actual}</span>
      </div>
    );
  });

/**
 *
 * @param param0
 * @returns
 */
const Home = ({ t, components }: SDKObject) => {
  // this should be a strictly typed data object imported from somewhere - likely supplied by the SDk
  const [data, setData] = useState<Array<DataItem> | null>(null);
  const { Loader } = components;

  useEffect(() => {
    fetch(`${API_URL}/${FROM}/${TO}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return data === null ? (
    <>
      <div>{t("LOADING_TEXT")}</div>
      <Loader />
    </>
  ) : (
    <div>
      <h1 className={styles.header}>
        {t("DATA_LOADED", { from: FROM, to: TO })}
      </h1>
      <div>{parseData(t, data)}</div>
    </div>
  );
};

export default Home;
