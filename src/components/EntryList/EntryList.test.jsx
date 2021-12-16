import React from 'react';
import EntryList from './EntryList';
import { screen, render } from '@testing-library/react';
import { EntryProvider } from '../../context/EntryContext';

it('renders list of entries', async () => {
  const { container } = render(
    <EntryProvider>
      <EntryList />
    </EntryProvider>
  );
  expect(container).toMatchSnapshot();
});
