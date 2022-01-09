import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      {user ? <p>Signing guestbook as {user}</p> : <p>Sign in below!</p>}
    </header>
  );
}
