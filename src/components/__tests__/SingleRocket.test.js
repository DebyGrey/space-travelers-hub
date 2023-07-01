import React from 'react';
import { render } from '@testing-library/react';
import SingleRocket from '../SingleRocket';

jest.mock(
  '../ReserveRocketButton',
  () => function MockReserveRocketButton() {
    return (
      <button
        type="button"
        data-testid="reserve-rocket-button-mock"
      >
        ReserveRocketButton Mock
      </button>
    );
  },
);

jest.mock(
  '../ReservedButton',
  () => function MockReservedButton() {
    return (
      <button type="button" data-testid="reserved-button-mock">
        ReservedButton Mock
      </button>
    );
  },
);

describe('SingleRocket', () => {
  const defaultProps = {
    id: 1,
    description: 'Rocket description',
    rocketName: 'Falcon 9',
    flickrImages: 'rocket.jpg',
    reserved: false,
  };

  test('renders rocket name', () => {
    const { getByText } = render(
      <SingleRocket
        id={defaultProps.id}
        description={defaultProps.description}
        rocketName={defaultProps.rocketName}
        flickrImages={defaultProps.flickrImages}
        reserved={defaultProps.reserved}
      />,
    );
    const rocketNameElement = getByText(defaultProps.rocketName);
    expect(rocketNameElement).toBeInTheDocument();
  });

  test('renders rocket description', () => {
    const { getByText } = render(
      <SingleRocket
        id={defaultProps.id}
        description={defaultProps.description}
        rocketName={defaultProps.rocketName}
        flickrImages={defaultProps.flickrImages}
        reserved={defaultProps.reserved}
      />,
    );
    const descriptionElement = getByText(defaultProps.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders ReserveRocketButton when not reserved', () => {
    const { getByTestId } = render(
      <SingleRocket
        id={defaultProps.id}
        description={defaultProps.description}
        rocketName={defaultProps.rocketName}
        flickrImages={defaultProps.flickrImages}
        reserved={defaultProps.reserved}
      />,
    );
    const reserveButton = getByTestId('reserve-rocket-button-mock');
    expect(reserveButton).toBeInTheDocument();
  });

  test('renders ReservedButton when reserved', () => {
    const { getByTestId } = render(
      <SingleRocket
        id={defaultProps.id}
        description={defaultProps.description}
        rocketName={defaultProps.rocketName}
        flickrImages={defaultProps.flickrImages}
        reserved
      />,
    );
    const reservedButton = getByTestId('reserved-button-mock');
    expect(reservedButton).toBeInTheDocument();
  });
});
