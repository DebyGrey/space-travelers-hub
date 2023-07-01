import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('renders the logo', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const logoElement = screen.getByAltText('logo'); // Assuming the Logo component uses an <img> tag with the alt text 'Logo'
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the navigation menu items', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const menuItems = screen.getAllByRole('link');
    const expectedUrls = [
      { id: 1, name: "Rockets", path: "/" },
      { id: 2, name: "Missions", path: "/missions" },
      { id: 3, name: "My Profile", path: "/my-profile" },
    ];

    expect(menuItems).toHaveLength(expectedUrls.length);

    menuItems.forEach((menuItem, index) => {
      expect(menuItem).toHaveTextContent(expectedUrls[index].name);
      expect(menuItem).toHaveAttribute(
        'href',
        expectedUrls[index].path,
      );
    });
  });

  describe('Navbar', () => {
    test('matches snapshot', () => {
      const { asFragment } = render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
