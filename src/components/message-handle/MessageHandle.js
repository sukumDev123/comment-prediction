import React, { useContext } from 'react'
import './MessageHandle.css'
import { ContextMessage, NOTSHOWMESSAGEANDCLERNSTATE } from './MessageProvider'

function MessageHandle() {
  const [stateMessage, dispatchMessage] = useContext(ContextMessage)
  const whenUserCloseMessage = e => {
    dispatchMessage(NOTSHOWMESSAGEANDCLERNSTATE)
  }
  return (
    <div className={`${stateMessage.show} message-box box-background`}>
      <div className="message-body">
        <h2>{stateMessage.message}</h2>
        <div className="on-message-bottom">
          <h4>{stateMessage.status}</h4>
          <h4 onClick={whenUserCloseMessage}>close button</h4>
        </div>
      </div>
    </div>
  )
}

export default MessageHandle
