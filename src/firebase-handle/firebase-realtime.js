import firebase from 'firebase/app'
import 'firebase/database'

export const dbHandle = ref_ => firebase.database().ref(ref_)

export const dataBaseUpdateComment = (comment, username) => {
  const db_push = dbHandle('comments').push({
    comment,
    analyser: false,
    username
  })
  return new Promise((res, rej) => {
    db_push
      .then(_ => res(`The comment '${comment}' are writen success. `))
      .catch(_ => rej("Something wrong : 'firebase push'"))
  })
}

export const getCommentsLastest = () => dbHandle('commect_predicted')

export const getNewCommentsLastest = () => dbHandle('comments')
