import React from 'react';
import { screen, render } from '@testing-library/react';
import { EntryProvider } from '../../context/EntryContext';
import Entry from './Entry';

it('renders a guestbook entry', async () => {
  const { container } = render(
    <EntryProvider>
      <Entry
        entry={{
          name: 'Doris',
          message: 'meow',
        }}
      />
    </EntryProvider>
  );

  const entryName = screen.getByText(/Doris/i);
  expect(entryName).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
