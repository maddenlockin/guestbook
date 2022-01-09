import React from 'react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ProvideAuth } from '../../context/ProvideAuth';
import { UserProvider } from '../../context/UserContext';
import Login from './Login';
import { render } from '@testing-library/react';

it('should render Login view', async () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <ProvideAuth>
          <Login />
        </ProvideAuth>
      </UserProvider>
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})