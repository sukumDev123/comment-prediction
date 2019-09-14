import React, { useState, useEffect } from 'react'
import './ListComment.css'
import { getCommentsLastest } from '../../firebase-handle/firebase-realtime'

function ListComment({ typeSentiment }) {
  const [datas, setDatas] = useState([])
  const handleState = (typeSentiment, if_, ret) =>
    typeSentiment === if_ ? ret : null

  useEffect(() => {
    setDatas([])
    const hadleCallBackFB = data => {
      if (data) {
        const mapData = Object.values(data.val()).map(data =>
          Object.values(data)
        )
        const event1 = handleState(typeSentiment, 'good', mapData[0])
        const event2 = handleState(typeSentiment, 'neg', mapData[1])
        const event3 = handleState(typeSentiment, 'recommend', mapData[2])
        const event4 = handleState(typeSentiment, 'all', [
          ...mapData[0],
          ...mapData[1],
          ...mapData[2]
        ])
        const returnData = [event1, event2, event3, event4].filter(
          event_is => event_is !== null
        )[0]
        setDatas(returnData)
      }
    }
    getCommentsLastest().on('value', hadleCallBackFB)
  }, [typeSentiment])

  return (
    <div className="list-comment-box">
      {datas.map((data, ind) => {
        return (
          <div className="comment-div" key={ind}>
            <h3>
              {data.userName ? data.userName : 'Anonymous'}:{' '}
              {data.text ? data.text : 'not comment'}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default ListComment
