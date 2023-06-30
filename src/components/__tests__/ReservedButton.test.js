import { render, screen } from '@testing-library/react';
import ReservedButton from '../ReservedButton';

describe('ReservedButton', () => {
  test('renders the ReservedButton component', () => {
    render(<ReservedButton />);

    const buttonElement = screen.getByText('Reserved');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-teal-500');
    expect(buttonElement).toHaveClass('text-sm');
    expect(buttonElement).toHaveClass('font-bold');
    expect(buttonElement).toHaveClass('text-white');
    expect(buttonElement).toHaveClass('py-[0.1rem]');
    expect(buttonElement).toHaveClass('px-[0.3rem]');
    expect(buttonElement).toHaveClass('rounded');
    expect(buttonElement).toHaveClass('mr-2');
  });

  test("renders the ReservedButton component", () => {
    const { asFragment } = render(<ReservedButton />);

    expect(asFragment()).toMatchSnapshot();
  });
});
