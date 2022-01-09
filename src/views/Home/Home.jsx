import React from 'react';
import GuestBook from '../../components/GuestBook/GuestBook';
import { EntryProvider } from '../../context/EntryContext';
import EntryList from '../../components/EntryList/EntryList';

export default function Home() {
  return (
    <EntryProvider>
      <GuestBook />
      <EntryList />
    </EntryProvider>
  );
}
