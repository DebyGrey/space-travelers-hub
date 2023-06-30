import React from "react";
import { render, renderer, create } from "@testing-library/react";
import SingleRocket from "../SingleRocket";

jest.mock("../ReserveRocketButton", () => {
  return function MockReserveRocketButton() {
    return (
      <button data-testid="reserve-rocket-button-mock">
        ReserveRocketButton Mock
      </button>
    );
  };
});

jest.mock("../ReservedButton", () => {
  return function MockReservedButton() {
    return (
      <button data-testid="reserved-button-mock">
        ReservedButton Mock
      </button>
    );
  };
});

describe("SingleRocket", () => {
  const defaultProps = {
    id: 1,
    description: "Rocket description",
    rocketName: "Falcon 9",
    flickrImages: "rocket.jpg",
    reserved: false,
  };

  test("renders rocket name", () => {
    const props = { ...defaultProps };
    const { getByText } = render(<SingleRocket {...props} />);
    const rocketNameElement = getByText("Falcon 9");
    expect(rocketNameElement).toBeInTheDocument();
  });

  test("renders rocket description", () => {
    const props = { ...defaultProps };
    const { getByText } = render(<SingleRocket {...props} />);
    const descriptionElement = getByText("Rocket description");
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders ReserveRocketButton when not reserved", () => {
    const props = { ...defaultProps };
    const { getByTestId } = render(<SingleRocket {...props} />);
    const reserveButton = getByTestId("reserve-rocket-button-mock");
    expect(reserveButton).toBeInTheDocument();
  });

  test("renders ReservedButton when reserved", () => {
    const props = { ...defaultProps, reserved: true };
    const { getByTestId } = render(<SingleRocket {...props} />);
    const reservedButton = getByTestId("reserved-button-mock");
    expect(reservedButton).toBeInTheDocument();
  });
});
