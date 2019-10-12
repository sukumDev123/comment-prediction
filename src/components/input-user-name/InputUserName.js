import React, { useContext, useState } from 'react'
import './InputUserName.css'
import { userNameAndCommendContext } from '../../providers/UserNameAndCommend'
import { USERANDDUSERNAME } from '../../reducers/UserNameAneCommentReducer'
export default function InputUserName() {
  const [showDiv, setShowDiv] = useState(true)
  const { stateOfUserCommend, setDispatchUserCommend } = useContext(
    userNameAndCommendContext
  )
  const whenUserChangeUsername = e => {
    const username = e.target.value
    const userState = USERANDDUSERNAME
    userState.payload = username
    setDispatchUserCommend(userState)
  }
  const whenUserAddSuccess = e => {
    setShowDiv(false)
  }
  return showDiv ? (
    <div className="iusername-div">
      <div className="iuser-box">
        <h3>You need to input your name before comment.</h3>
        <div className="md-form">
          <input
            placeholder="username..."
            value={
              stateOfUserCommend
                ? stateOfUserCommend.username
                  ? stateOfUserCommend.username
                  : ''
                : ''
            }
            onChange={whenUserChangeUsername}
          ></input>
          <button
            disabled={!stateOfUserCommend.username}
            onClick={whenUserAddSuccess}
            className="username-button"
          >
            ADD USERNAME
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}
