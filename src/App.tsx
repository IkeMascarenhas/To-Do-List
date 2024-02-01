import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState("dark")

  const handleSwitchTheme = () => {
    setTheme(theme=="dark" ? "light" : "dark")
  }
  return (
    <div className={`Background flex  flex-col ${theme=="dark" ? "bg-Very-Dark-Blue" : "bg-Light-Grayish-Blue"}`}>
      <Header theme={theme} setTheme={setTheme} handleSwitchTheme={handleSwitchTheme}/>
        <List theme={theme} setTheme={setTheme} handleSwitchTheme={handleSwitchTheme}/>
    </div>
  )
}

export default App