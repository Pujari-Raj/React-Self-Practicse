import React, {useContext} from 'react'
import ThemeContext from '../Context/Context'
import AppTheme from '../Colors'

const Home = () => {
    const theme = useContext(ThemeContext)[0];
    const currTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currTheme.backgroundColor}`,
        color: `${currTheme.textColor}`,
        textAlign: "center"
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currTheme.border}`
        }}
      >
        Click Me
      </button>
    </div>
  )
}

export default Home