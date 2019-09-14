import React, { useState } from 'react'
import './TypeOfSentiment.css'

function TypeOfSentimentsComponent({ setTypeSentiment }) {
  const sentiments = ['good', 'neg', 'recommend', 'all']
  const [preClick, setPreC] = useState(sentiments.length - 1)
  const sentimentsColorStyle = [
    'goodStyle',
    'negStyle',
    'recomStyle',
    'allStyle'
  ]
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
    console.log({ sentimentUserSelectedCss })
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
