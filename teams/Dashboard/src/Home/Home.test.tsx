import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import Translationary from "translationary";

import Home, { parseMonthAndDay } from "./Home";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(() => [null, jest.fn()]),
  useEffect: jest.fn()
}));

const mockedUseState = jest.mocked(useState);
const mockedUseEffect = jest.mocked(useEffect);

// this can be unified into a distributable testing util for all shards
const mockSDK = {
  t: new Translationary({
    appName: "sdk",
    fetchTranslations: () => "test",
    lang: "en",
    onLanguageChange: () => {},
    formatter: () => {}
  }),
  components: {
    ErrorBoundary: () => <div>ErrorBoundry</div>,
    Loader: () => <div>Loader</div>,
    RemoteWrapper: () => <div>RemoteWrapper</div>
  }
};

describe("Home", () => {
  it("should display the loader before data is ready", () => {
    const { queryByText } = render(<Home {...mockSDK} />);

    expect(queryByText("Loader")).not.toBe(null);
  });

  it("should display the data when ready", () => {
    mockedUseEffect.mockImplementationOnce(() => {});
    mockedUseState.mockReturnValueOnce([[], () => {}]);

    const { queryByText } = render(<Home {...mockSDK} />);

    expect(queryByText("DATA_LOADED")).not.toBe(null);
    expect(queryByText("Loader")).toBe(null);
  });
});

describe("parseMonthAndDay", () => {
  it("should parse a date in the right format", () => {
    const date = parseMonthAndDay("2024-09-01T01:00Z");

    expect(date).toBe("01.09., 3:00");
  });
});
