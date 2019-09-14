import React, { useState } from 'react'
import './Commect.css'
function Comment() {
  const [comment, setComment] = useState('')
  const whenUserComment = e => {
    const commentVal = e.target.value
    setComment(commentVal)
  }
  const whenUserCommentSubmit = e => {
    e.preventDefault()
    const checkCommentIsNotNull = comment !== ''
    if (checkCommentIsNotNull) {
      // TODO connect comment to firebase.
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
