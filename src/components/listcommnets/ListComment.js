import React, { useState, useEffect } from 'react'
import './ListComment.css'
import {
  getCommentsLastest,
  getNewCommentsLastest
} from '../../firebase-handle/firebase-realtime'

function ListCommectPredicted({ comments }) {
  if (comments) {
    return comments.map((data, ind) => {
      return (
        <div className="comment-div" key={ind}>
          <h3>
            {data.userName ? data.userName : 'Anonymous'}:{' '}
            {data.text ? data.text : 'not comment'}
          </h3>
        </div>
      )
    })
  }
  return <h4>Empty</h4>
}
function ListNewCommentIs({ commentNew }) {
  if (commentNew) {
    return commentNew.map((data, ind) => {
      return (
        <div className="comment-div" key={ind}>
          <h3>
            {data.userName ? data.userName : 'Anonymous'}:{' '}
            {data.comment ? data.comment : 'not comment'}
          </h3>
        </div>
      )
    })
  }
  return <h4>Empty</h4>
}

function Loading({ loading }) {
  if (loading) {
    return (
      <div className="lodingCode-box">
        <div className="lodingCode"></div>
        <h3>Loading</h3>
      </div>
    )
  }
  return ''
}

function ListComment({ typeSentiment }) {
  const [datas, setDatas] = useState([])
  const [loding, setLoading] = useState(true)
  const [commentNew, setCommentNew] = useState([])
  const handleState = (typeSentiment, if_, ret) =>
    typeSentiment === if_ ? ret : null

  useEffect(() => {
    setDatas([])
    setCommentNew([])
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
    const handleNewCommentData = data => {
      if (data) {
        const getSnapShopToArray = Object.values(data.val()).filter(
          data => data.analyser === false
        )
        console.log({ getSnapShopToArray })
        setCommentNew(getSnapShopToArray)
        setLoading(false)
      }
    }
    getCommentsLastest().on('value', hadleCallBackFB)
    getNewCommentsLastest().on('value', handleNewCommentData)
  }, [typeSentiment])

  return (
    <div className="list-comment-box">
      <Loading loading={loding}></Loading>
      {typeSentiment !== 'new-comment' ? (
        <ListCommectPredicted comments={datas}></ListCommectPredicted>
      ) : (
        <ListNewCommentIs commentNew={commentNew}> </ListNewCommentIs>
      )}
    </div>
  )
}

export default ListComment
