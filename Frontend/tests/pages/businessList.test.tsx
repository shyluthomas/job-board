import { vi, it, expect, describe } from "vitest";
import BusinessList from "../../src/pages/business/businessList";
import { screen } from "@testing-library/dom";
import { renderWithProviders } from "tests/utils/test.utils";
import { within } from "@testing-library/react";

vi.mock("useAppDispatch", () => {});

describe("BusinessLst test", () => {
  it("should render Businesss list", () => {
    renderWithProviders(<BusinessList></BusinessList>);

    expect(screen.findAllByAltText("Business List")).toBeDefined();
    const { getByText } = within(screen.getByTestId("cardTitle"));
    expect(getByText("Business List")).toBeTruthy();

    const title = within(screen.getByTestId("cardTitle"));
    expect(title.getByText("Business List")).toBeTruthy();
    expect(screen.getByTestId("searchinput")).toBeTruthy();
    expect(screen.getByTestId("column")).toBeTruthy();
  });
});
