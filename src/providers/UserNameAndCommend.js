import React, { createContext, useReducer, useState } from 'react'
import UserNameAneCommentReducer, {
  defaultOfUserNameAndCommend
} from '../reducers/UserNameAneCommentReducer'
export const userNameAndCommendContext = createContext()
export default function UserNameCommendProvider({ children }) {
  const [showDiv, setShowDiv] = useState(true)

  const [stateOfUserCommend, setDispatchUserCommend] = useReducer(
    UserNameAneCommentReducer,
    defaultOfUserNameAndCommend
  )
  return (
    <userNameAndCommendContext.Provider
      value={{
        stateOfUserCommend,
        setDispatchUserCommend,
        showDiv,
        setShowDiv
      }}
    >
      {children}
    </userNameAndCommendContext.Provider>
  )
}
