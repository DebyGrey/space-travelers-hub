import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavMenu from '../NavMenu';

// Mock PropTypes validation
jest.spyOn(PropTypes, 'string').mockImplementation(() => null);

describe('NavMenu', () => {
  test('renders the NavMenu component with the provided props', () => {
    const path = '/';
    const name = 'Home';

    render(
      <MemoryRouter>
        <NavMenu path={path} name={name} />
      </MemoryRouter>,
    );

    const navLinkElement = screen.getByText(name);
    expect(navLinkElement).toBeInTheDocument();
    expect(navLinkElement).toHaveAttribute('href', path);
  });

  test('matches snapshot', () => {
    const path = '/';
    const name = 'Home';

    const { asFragment } = render(
      <MemoryRouter>
        <NavMenu path={path} name={name} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
