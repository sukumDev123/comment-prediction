import React, { useContext } from 'react'
import './MessageHandle.css'
import { ContextMessage, NOTSHOWMESSAGEANDCLERNSTATE } from './MessageProvider'

function MessageHandle() {
  const { stateMessageReducer, dispatchMessage } = useContext(ContextMessage)
  const whenUserCloseMessage = e => {
    dispatchMessage(NOTSHOWMESSAGEANDCLERNSTATE)
  }
  return (
    <div className={`${stateMessageReducer.show} message-box box-background`}>
      <div className="message-body">
        <h2>{stateMessageReducer.message}</h2>
        <div className="on-message-bottom">
          <h4>{stateMessageReducer.status}</h4>
          <h4 onClick={whenUserCloseMessage}>close button</h4>
        </div>
      </div>
    </div>
  )
}

export default MessageHandle
