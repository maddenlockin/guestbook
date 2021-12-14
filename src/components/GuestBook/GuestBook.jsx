import React from 'react'

export default function GuestBook() {
  const [name, setName] = useState('')
  const [guestEntry, setGuestEntry] = useState('')
  
  function updateName() {
    if (!guestEntry) return
    setGuestEntry('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateName()
  }

  return (
    <>
      <form>
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
