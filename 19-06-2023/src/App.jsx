
import './App.css'
import { useState } from 'react'
import Topbar from './components/topbar'
import Stories from './components/stories'
import { loggedUser } from './Data/LoggedUserData.js'
import TabBar from './components/tabbar'
import { followedUsers } from './Data/usersData.js'
import { Posts } from './Data/postList.js'
import Post from './components/post/post'


   

function App() {
  const [users, setUsers] = useState(followedUsers)
  const [logUsers, setLoggedUser] = useState(loggedUser)
  const [posts, setPosts] = useState(Posts)
  

  return (
    <>
      <Topbar />
      <Stories user={logUsers} stories={users}/>
      <Post user={users} post={posts}/>
      <TabBar />
    </>
  )
}


export default App
