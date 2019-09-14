import React, { useReducer, createContext } from 'react'
const messageObject = {
  message: '',
  status: '',
  show: 'message-hide'
}
export const NOTSHOWMESSAGEANDCLERNSTATE = {
  type: 'NOTSHOWMESSAGEANDCLERNSTATE',
  payload: {
    message: '',
    statue: ''
  }
}
export const SHOWMESSAGE = {
  type: 'SHOWMESSAGE',
  payload: {
    message: '',
    status: ''
  }
}
function messageReducer(state = messageObject, action) {
  switch (action.type) {
    case SHOWMESSAGE.type: {
      const { message, status } = action.payload
      return {
        message,
        status,
        show: 'message-show'
      }
    }
    case NOTSHOWMESSAGEANDCLERNSTATE.type: {
      const { message, status } = action.payload
      return {
        message,
        status,
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
    <ContextMessage.Provider value={[stateMessageReducer, dispatchMessage]}>
      {children}
    </ContextMessage.Provider>
  )
}

export default MessageProvider
