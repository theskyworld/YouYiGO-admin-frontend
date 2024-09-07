import { render, screen } from "@testing-library/react";
import OrderTable from "../components/OrderTable";

describe("OrderTable", () => {
  const renderComponent = () => {
    render(<OrderTable />);
  };
  it("should render table columns", () => {
    renderComponent();
    screen.debug();
  });
});
