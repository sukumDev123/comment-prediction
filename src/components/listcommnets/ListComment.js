import React, { useState, useEffect } from 'react'
import './ListComment.css'
import {
  getCommentsLastest,
  getNewCommentsLastest
} from '../../firebase-handle/firebase-realtime'

function ListNewCommentIs({ commentNew }) {
  if (commentNew) {
    return commentNew.map((data, ind) => {
      return (
        <div className="comment-div" key={ind}>
          <h3>
            {data.username ? data.username : 'Anonymous'}:{' '}
            {data.comment ? data.comment : 'not comment'}
          </h3>
        </div>
      )
    })
  }
  return <h4>Empty</h4>
}

const Loading = ({ loading }) =>
  loading === true ? (
    <div className="lodingCode-box">
      <div className="lodingCode"></div>
      <h3>Loading</h3>
    </div>
  ) : (
    ''
  )
function ListComment({ typeSentiment }) {
  const [loding, setLoading] = useState(true)
  const [commentNew, setCommentNew] = useState([])
  const [commentAllLength, setCommentAllLength] = useState(0)

  useEffect(() => {
    setCommentNew([])
    const handleNewCommentData = data => {
      // console.log({ data })
      if (data) {
        if (data.val()) {
          let getSnapShopToArray
          if (typeSentiment === 'all') {
            getSnapShopToArray = Object.values(data.val())
          } else {
            getSnapShopToArray = Object.values(data.val()).filter(
              data => data.analyser === false
            )
          }
          setCommentAllLength(getSnapShopToArray.length || 0)
          setCommentNew(getSnapShopToArray)
          setLoading(false)
        } else {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }
    console.log(getCommentsLastest())
    // console.log(getNewCommentsLastest())

    getNewCommentsLastest().on('value', handleNewCommentData)
  }, [typeSentiment])

  return (
    <div>
      <h2 className="comment-size">{commentAllLength} user commented.</h2>

      <div className="list-comment-box">
        <Loading loading={loding}></Loading>
        {commentNew.length ? (
          <ListNewCommentIs commentNew={commentNew}> </ListNewCommentIs>
        ) : (
          <h2 className="comment-status">Empty this site.</h2>
        )}
      </div>
    </div>
  )
}

export default ListComment
