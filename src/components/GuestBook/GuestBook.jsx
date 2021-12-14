import React from 'react'
import { useEntries } from '../../context/EntryContext'

export default function GuestBook() {
  const [name, setName] = useState('')
  const [guestEntry, setGuestEntry] = useState('')
  const { entries, setEntries } = useEntries()
  
  function updateName() {
    if (!guestEntry) return
    setEntries([...entries, { name, message: guestEntry }])
    setGuestEntry('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateName()
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className="guestname-input"
          id="guestName"
          type="text"
          placeholder="Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Guest Entry
        </label>
        <div>
          <textarea
            className='guestEntry-input'
            id='guestEntry'
            value={guestEntry}
            placeholder='Your Entry'
            onChange={(e) => setGuestEntry(e.target.value)}
          />
        </div>
        <button className='button' type='submit'>
          Sumbit
        </button>
      </form>
    </>
  );
}
