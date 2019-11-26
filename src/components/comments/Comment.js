import React, { useContext } from 'react'
import './Commect.css'
import { dataBaseUpdateComment } from '../../firebase-handle/firebase-realtime'
import { ContextMessage, SHOWMESSAGE } from '../message-handle/MessageProvider'
import { userNameAndCommendContext } from '../../providers/UserNameAndCommend'
import { USERADDCOMMENT } from '../../reducers/UserNameAneCommentReducer'
function Comment() {
  const {
    stateOfUserCommend,
    setDispatchUserCommend,

    setShowDiv
  } = useContext(userNameAndCommendContext)
  const { dispatchMessage } = useContext(ContextMessage)
  const whenUserComment = e => {
    const commentVal = e.target.value
    const commenState = USERADDCOMMENT
    commenState.payload = commentVal
    setDispatchUserCommend(commenState)
  }
  const whenUserCommentSubmit = e => {
    e.preventDefault()
    const { comment, username } = stateOfUserCommend
    const checkCommentIsNotNull = comment !== '' && username !== ''

    if (checkCommentIsNotNull) {
      // TODO connect comment to firebase.
      dataBaseUpdateComment(comment, username)
        .then(message => {
          const setMessage = SHOWMESSAGE
          setMessage.payload.message = message
          setMessage.payload.status = '200'
          setMessage.payload.className = 'success'
          dispatchMessage(setMessage)
        })
        .catch(err => {
          const setMessage = SHOWMESSAGE
          setMessage.payload.message = err
          setMessage.payload.status = '200'
          setMessage.payload.className = 'error'
          dispatchMessage(setMessage)
        })
    } else {
      // TODO message fail
      const setMessage = SHOWMESSAGE
      setMessage.payload.message = 'Some of Filed are empty.'
      setMessage.payload.status = '404'
      setMessage.payload.className = 'error'
      dispatchMessage(setMessage)
    }
  }

  const whenUserChangeUser = e => {
    setShowDiv(true)
  }
  return (
    <div className="box-background box-comment">
      <h3 className="title-comment">Comment</h3>
      <h3 className="title-comment">
        Username : {stateOfUserCommend.username}{' '}
        <button className="changeUserBtn" onClick={whenUserChangeUser}>
          Change Username
        </button>
      </h3>
      <form className="form-comment" onSubmit={whenUserCommentSubmit}>
        <input
          className="commentInput"
          placeholder="commect"
          value={stateOfUserCommend.comment}
          onChange={whenUserComment}
        ></input>
        <button type="submit" className="comment-btn">
          Comment
        </button>
      </form>
    </div>
  )
}

export default Comment
