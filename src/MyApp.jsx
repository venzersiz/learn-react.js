import { useState } from 'react'
import AboutPage from './AboutPage'
import Profile from './Profile'
import ShoppingList from './ShoppingList'

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>
}

function AdminPanel() {
  return <h1>AdminPanel</h1>
}

function LoginForm() {
  return <h1>LoginForm</h1>
}

const isLoggedIn = false

export default function MyApp() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <AboutPage />
      <Profile />
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      <ShoppingList />
    </div>
  )
}
