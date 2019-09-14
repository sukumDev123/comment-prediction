import React, { useState, useContext } from 'react'
import './Commect.css'
import { ContextMessage, SHOWMESSAGE } from '../message-handle/MessageProvider'
function Comment() {
  const [comment, setComment] = useState('')
  const [stateMessage, dispatchMessage] = useContext(ContextMessage)
  const whenUserComment = e => {
    const commentVal = e.target.value
    setComment(commentVal)
  }
  const whenUserCommentSubmit = e => {
    e.preventDefault()
    const checkCommentIsNotNull = comment !== ''
    if (checkCommentIsNotNull) {
      // TODO connect comment to firebase.
      const setMessage = SHOWMESSAGE
      setMessage.payload.message = 'Firebase s'
      setMessage.payload.status = '200'
      dispatchMessage(setMessage)
    } else {
      // TODO message fail
    }
  }
  return (
    <div className="box-background box-comment">
      <h3 className="title-comment">Comment</h3>
      <form className="form-comment" onSubmit={whenUserCommentSubmit}>
        <input
          className="commentInput"
          placeholder="commect"
          value={comment}
          onChange={whenUserComment}
        ></input>
        <button type="submit" className="comment-btn">
          Comment{' '}
        </button>
      </form>
    </div>
  )
}

export default Comment
