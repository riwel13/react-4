import './App.css'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import stats from "./stats.json"
import friends from "./friends.json"

function App() {


  return (
    <>
      <Statistics title="hi" stats={stats}/>
      <Statistics stats={stats}/>

      <FriendList friends={friends}/>

    </>
  )
}

export default App
