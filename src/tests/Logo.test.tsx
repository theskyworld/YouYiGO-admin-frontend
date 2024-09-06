import { render, screen } from "@testing-library/react";
import Logo from "../components/Logo";
import { LOGO_NAME } from "../utils/constants";

describe("Logo", () => {
  const renderComponent = () => {
    render(<Logo />);
  };
  it("should render LOGO_NAME", () => {
    renderComponent();
    expect(screen.getByText(LOGO_NAME)).toBeInTheDocument();
  });
});
