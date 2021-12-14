

export default function Entry({ entry: {name, message} }) {
  return (
    <div>
      <h2 className="entryName">-{name}</h2>
      <p className="entryMessage">{message}</p>
    </div>
  );
}
