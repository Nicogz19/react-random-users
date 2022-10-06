import UserList from './components/UserList'
import UserState from './components/context/User/UserState'

function App() {
  return (
    <UserState>
      <UserList />
    </UserState>
  );
}

export default App;
