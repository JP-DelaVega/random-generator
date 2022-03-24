import React from 'react'
import '../styles/QuoteApp.css';
import { FaTumblrSquare, FaTwitterSquare, FaQuoteLeft } from "react-icons/fa";
export default function Quotes() {
  const [myQuotes, setMyQuotes] = React.useState({
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
    myColor: "#D85A7FFF"
  })
  const [isTrue, setIsTrue] = React.useState(true)
  const [allQuotes, setAllQuotes] = React.useState([])
  React.useEffect(() => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(res => res.json())
      .then(data => setAllQuotes(data.quotes))
  }, [])
  var colors = [
    '#FC766AFF',
    '#5B84B1FF',
    '#5F4B8BFF',
    '#E69A8DFF',
    '#0063B2FF',
    '#CDB599FF',
    '#00A4CCFF ',
    '#F95700FF',
    '#00203FFF',
    '#2C5F2D',
    '#606060FF',
    '#D85A7FFF'
  ];
  document.body.style.backgroundColor = myQuotes.myColor
  function getQuotes() {
    setIsTrue(prevState => !prevState)
    const randomNumber = Math.floor(Math.random() * allQuotes.length)
    const randomNumber2 = Math.floor(Math.random() * colors.length)
    const theQuote = allQuotes[randomNumber].quote
    const theAuthor = allQuotes[randomNumber].author
    const theColor = colors[randomNumber2]
    setMyQuotes({
      quote: theQuote,
      author: theAuthor,
      myColor: theColor,
    })


  }
  
  return (
    <div className='body'><div className="app">
      <div className='content'>
        <div className={isTrue ? "quote animation" : "quote animation2"} style={{ color: myQuotes.myColor }}><FaQuoteLeft /> {myQuotes.quote}
        </div>
        <div className={isTrue ? "author animation" : "author animation2"} style={{ color: myQuotes.myColor }}>-{myQuotes.author}
        </div>
      </div>
      <hr style={{ color: myQuotes.myColor }} />
      <div className='bottom-quote'>
        <div className='icons'>
          <a className='twitLogo ' target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${myQuotes.quote} \n-- ${myQuotes.author}`}><FaTwitterSquare size="2em" color={myQuotes.myColor} /></a>
          <a className='fbLogo' target="_blank" href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,plot&caption='${myQuotes.quote} \n-- ${myQuotes.author}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}><FaTumblrSquare size="2em" color={myQuotes.myColor} /></a>
        </div>
        <div className='generate'>
          <button onClick={getQuotes} style={{ backgroundColor: myQuotes.myColor }}>Generate Quote </button>
        </div>
      </div>
    </div></div>
  )
}
