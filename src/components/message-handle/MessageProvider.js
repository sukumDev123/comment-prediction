import React, { useReducer, createContext } from 'react'
const messageObject = {
  message: '',
  status: '',
  className: '',
  show: 'message-hide'
}
export const NOTSHOWMESSAGEANDCLERNSTATE = {
  type: 'NOTSHOWMESSAGEANDCLERNSTATE',
  payload: messageObject
}
export const SHOWMESSAGE = {
  type: 'SHOWMESSAGE',
  payload: messageObject
}
function messageReducer(state = messageObject, action) {
  switch (action.type) {
    case SHOWMESSAGE.type: {
      const { message, status, className } = action.payload
      return {
        message,
        status,
        className,
        show: 'message-show'
      }
    }
    case NOTSHOWMESSAGEANDCLERNSTATE.type: {
      return {
        ...messageObject,
        show: 'message-hide'
      }
    }
    default: {
      return state
    }
  }
}
export const ContextMessage = createContext()
function MessageProvider({ children }) {
  const [stateMessageReducer, dispatchMessage] = useReducer(
    messageReducer,
    messageObject
  )
  return (
    <ContextMessage.Provider value={{ stateMessageReducer, dispatchMessage }}>
      {children}
    </ContextMessage.Provider>
  )
}

export default MessageProvider
