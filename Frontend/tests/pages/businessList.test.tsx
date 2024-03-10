import { vi, it, expect, describe, beforeEach, afterEach } from "vitest";
import BusinessList from "../../src/pages/business/businessList";
import { screen } from "@testing-library/dom";
import { renderWithProviders } from "tests/utils/test.utils";
import { within, cleanup } from "@testing-library/react";

vi.mock("useAppDispatch", () => {});

describe("BusinessLst test", () => {
  beforeEach(() => {
    renderWithProviders(<BusinessList></BusinessList>);
  });
  afterEach(cleanup);

  it("should render Businesss list", () => {
    expect(screen.findAllByAltText("Business List")).toBeDefined();
    const { getByText } = within(screen.getByTestId("cardTitle"));
    expect(getByText("Business List")).toBeTruthy();
    const title = within(screen.getByTestId("cardTitle"));
    expect(title.getByText("Business List")).toBeTruthy();
    expect(screen.getByTestId("searchinput")).toBeTruthy();
    expect(screen.getByTestId("column")).toBeTruthy();
  });

  it("should render Businesss list: testing datatable", () => {
    expect(screen.getByTestId("username")).toBeTruthy();
    expect(screen.getByTestId("display_name")).toBeTruthy();
    expect(screen.getByTestId("classifications")).toBeTruthy();
    expect(screen.getByTestId("locations_served")).toBeTruthy();
  });
});
