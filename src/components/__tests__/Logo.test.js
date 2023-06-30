import { render, screen } from "@testing-library/react";
import Logo from "../Logo";
import logo from "../../assets/logo.png";

describe("Logo", () => {
  test("renders the logo image", () => {
    render(<Logo />);
    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", logo);
    expect(logoImage).toHaveClass("h-[60px]");
  });

  test("renders the title", () => {
    render(<Logo />);
    const titleElement = screen.getByText("Space Travelers' Hub");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-3xl");
    expect(titleElement).toHaveClass("font-bold");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
