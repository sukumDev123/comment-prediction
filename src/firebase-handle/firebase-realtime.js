import firebase from 'firebase/app'
import 'firebase/database'

export const dbHandle = ref_ => firebase.database().ref(ref_)

export const dataBaseUpdateComment = comment => {
  const db_push = dbHandle('comments').push({ comment, analyser: false })
  return new Promise((res, rej) => {
    db_push
      .then(_ => res(`The comment '${comment}' are writen success. `))
      .catch(_ => rej("Something wrong : 'firebase push'"))
  })
}

export const getCommentsLastest = () => {
  const data_get = dbHandle('commect_predicted')
  return data_get
}
