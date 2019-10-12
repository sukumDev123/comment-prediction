import React, { useState } from 'react'

import './App.css'

import Comment from './components/comments/Comment'
import MessageHandle from './components/message-handle/MessageHandle'
import TypeOfSentimentsComponent from './components/type-of-sentiments/TypeOfSentimentsComponent'
import ListComment from './components/listcommnets/ListComment'
import MessageProvider from './components/message-handle/MessageProvider'
import UserNameCommendProvider from './providers/UserNameAndCommend'
import InputUserName from './components/input-user-name/InputUserName'
function App() {
  const [typeSentiment, setTypeSentiment] = useState('new-comment')

  return (
    <MessageProvider>
      <div className="App">
        <UserNameCommendProvider>
          <InputUserName></InputUserName>

          <MessageHandle />
          <Comment></Comment>
          <div className="aboutList">
            <TypeOfSentimentsComponent
              setTypeSentiment={setTypeSentiment}
            ></TypeOfSentimentsComponent>
            <ListComment typeSentiment={typeSentiment}></ListComment>
          </div>
        </UserNameCommendProvider>
      </div>
    </MessageProvider>
  )
}

export default App
