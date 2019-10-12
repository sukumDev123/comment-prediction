import React, { createContext, useReducer } from 'react'
import UserNameAneCommentReducer, {
  defaultOfUserNameAndCommend
} from '../reducers/UserNameAneCommentReducer'
export const userNameAndCommendContext = createContext()
export default function UserNameCommendProvider({ children }) {
  const [stateOfUserCommend, setDispatchUserCommend] = useReducer(
    UserNameAneCommentReducer,
    defaultOfUserNameAndCommend
  )
  return (
    <userNameAndCommendContext.Provider
      value={{ stateOfUserCommend, setDispatchUserCommend }}
    >
      {children}
    </userNameAndCommendContext.Provider>
  )
}
