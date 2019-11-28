import React, { useState } from 'react'
import './TypeOfSentiment.css'

function TypeOfSentimentsComponent({ setTypeSentiment }) {
  const sentiments = ['all', 'new-comment']
  const [preClick, setPreC] = useState(sentiments.length - 1)
  const sentimentsColorStyle = ['allStyle', 'goodStyle']
  const [sentimentUserSelectedCss, changeUi] = useState(
    Array(sentiments.length)
      .fill('none')
      .map((d, i) => {
        return i === sentiments.length - 1 ? 'clicked' : 'none'
      })
  )
  const whenUserClickThis = (sentiment, ind) => {
    sentimentUserSelectedCss[preClick] = 'none'
    sentimentUserSelectedCss[ind] = 'clicked'
    setPreC(ind)
    changeUi(sentimentUserSelectedCss)
    setTypeSentiment(sentiment)
  }
  return (
    <div className="type-sentiment-box">
      <ul>
        {sentiments.map((sentiment, index) => {
          return (
            <li
              onClick={e => whenUserClickThis(sentiment, index)}
              key={index}
              className={`${sentimentsColorStyle[index]} ${sentimentUserSelectedCss[index]}`}
            >
              {sentiment}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TypeOfSentimentsComponent
