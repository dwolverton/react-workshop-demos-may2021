import './Quote.css';

function Quote({text, author, date}) {

  return (
    <div className="Quote">
      <h3>Quote by {author}</h3>
      <p>"{text}"</p>
      { date && <p>{date}</p> }
    </div>
  )
}

export default Quote