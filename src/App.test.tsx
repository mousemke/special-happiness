import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const MockTranslationToggle = () => <div>translation</div>;
const MockDashboard = () => <div>dashboard</div>;

jest.mock("./externalComponents", () => ({
  DASHBOARD: MockDashboard,
  TRANSLATION_TOGGLE: MockTranslationToggle,
}));

describe("App", () => {
  it("should load the translation toggle and dashboard", () => {
    const { getByText } = render(<App />);

    expect(getByText("translation")).toBeInTheDocument();
    expect(getByText("dashboard")).toBeInTheDocument();
  });
});
