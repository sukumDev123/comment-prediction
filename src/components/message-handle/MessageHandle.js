import React from 'react'
import './MessageHandle.css'
function MessageHandle() {
  return (
    <div className="message-box box-background">
      <div className="message-body">
        <h2>Message Comment</h2>
        <div className="on-message-bottom">
          <h4>message status</h4>
          <h4>close button</h4>
        </div>
      </div>
    </div>
  )
}

export default MessageHandle
