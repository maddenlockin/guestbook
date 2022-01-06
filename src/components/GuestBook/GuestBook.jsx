import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useEntries } from '../../context/EntryContext'
//import { useUser } from '../../context/UserContext'
import { useAuth } from '../../hooks/useAuth'

export default function GuestBook() {
  const [name, setName] = useState('')
  const [guestEntry, setGuestEntry] = useState('')
  const { entries, setEntries } = useEntries()
  //const { user, setUser } = useUser()
  const history = useHistory()
  const { user, logout } = useAuth()
  
  function updateName() {
    if (!guestEntry) return
    //setUser(name)
    setEntries([...entries, { name: user.email, message: guestEntry }])
    setGuestEntry('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateName()
  }

  const handleLogout = () => {
    logout(() => history.push('/'))
  }

  const signingMessage = user 
    ?`Thanks for signing, ${user.email}!`
    :'Please sign the guestbook'

  return (
    <>
      <h1 className="signing-message">{signingMessage}</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* {user ? null : (
          <input
            className="guestname-input"
            id="guestName"
            type="text"
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )} */}
        <label>Guest Entry</label>
        <div>
          <textarea
            className="guestEntry-input"
            id="guestEntry"
            value={guestEntry}
            placeholder="Your Entry"
            onChange={(e) => setGuestEntry(e.target.value)}
          />
        </div>
        <div>
          <button className="sumbit-button" type="submit">
            Sumbit
          </button>
          {user && (
            <button 
              type='button' className='signout-button' 
              onClick={handleLogout}
              aria-label='sign out'
            >
              Not {user.email} ?
            </button>
          )}
        </div>
      </form>
    </>
  );
}
