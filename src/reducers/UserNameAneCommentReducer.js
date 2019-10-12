export const USERANDDUSERNAME = {
  type: 'USERADDUSERNAME',
  payload: ''
}

export const USERADDCOMMENT = {
  type: 'USERADDCOMMENT',
  payload: ''
}
export const defaultOfUserNameAndCommend = {
  comment: '',
  username: ''
}
export default function UserNameAneCommentReducer(
  state = defaultOfUserNameAndCommend,
  action
) {
  switch (action.type) {
    case USERANDDUSERNAME.type: {
      return {
        ...state,
        username: action.payload
      }
    }
    case USERADDCOMMENT.type: {
      return {
        ...state,
        comment: action.payload
      }
    }
    default: {
      return state
    }
  }
}
