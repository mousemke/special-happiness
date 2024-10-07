import React, { act } from "react";
import { render } from "@testing-library/react";
import App from "./App";
import mockSDK from "./useSDK/useSDK.mocks";

jest.mock("./externalComponents", () => ({
  Dashboard: () => <div>dashboard</div>,
  TranslationToggle: () => <div>translation</div>
}));

jest.mock("./useSDK", () => ({
  __esModule: true,
  default: jest.fn(() => mockSDK),
}));

describe("App", () => {
  it("should load the translation toggle and dashboard", () => {
    const { queryByText } = render(<App />);

    expect(queryByText("translation")).not.toBe(null);
    expect(queryByText("dashboard")).not.toBe(null);
  });
});
