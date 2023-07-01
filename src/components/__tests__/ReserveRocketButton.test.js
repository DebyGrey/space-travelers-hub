import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ReserveRocketButton from '../ReserveRocketButton';
import {
  reserveRocket,
  cancelReservation,
} from '../../redux/rockets/rocketsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/rockets/rocketsSlice', () => ({
  reserveRocket: jest.fn(),
  cancelReservation: jest.fn(),
}));

describe('ReserveRocketButton', () => {
  test('renders the button with the correct text and style based on reserved prop', () => {
    const id = 1;
    const reserved = true;
    useDispatch.mockReturnValue(jest.fn());

    render(<ReserveRocketButton id={id} reserved={reserved} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Cancel reservation');
    expect(buttonElement).toHaveClass(
      'text-base bg-transparent border border-blue-500 text-blue-600 cursor-pointer mt-3 rounded-md px-[1.2rem] py-2 font-medium',
    );
  });

  test('dispatches the reserveRocket action when button is clicked and reserved is true', () => {
    const id = 1;
    const reserved = true;
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(<ReserveRocketButton id={id} reserved={reserved} />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith(reserveRocket(id));
    expect(mockDispatch).toHaveBeenCalledWith(cancelReservation(id));
  });

  test('dispatches the cancelReservation action when button is clicked and reserved is false', () => {
    const id = 1;
    const reserved = false;
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(<ReserveRocketButton id={id} reserved={reserved} />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(cancelReservation(id));
  });
});
