import React, { useContext } from 'react'
import './InputUserName.css'
import { userNameAndCommendContext } from '../../providers/UserNameAndCommend'
import { USERANDDUSERNAME } from '../../reducers/UserNameAneCommentReducer'
export default function InputUserName() {
  const {
    stateOfUserCommend,
    setDispatchUserCommend,
    showDiv,
    setShowDiv
  } = useContext(userNameAndCommendContext)
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
        <form onSubmit={whenUserAddSuccess}>
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
            />
          </div>

          <button
            disabled={!stateOfUserCommend.username}
            type="submit"
            className="username-button"
          >
            ADD USERNAME
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div></div>
  )
}
