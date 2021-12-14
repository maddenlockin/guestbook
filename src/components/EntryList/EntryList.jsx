

export default function EntryList() {
  return (
    <div>
      <ul className='list'>
        <li>
          <Entry entry={entry} />
        </li>
      </ul>
    </div>
  )
}
