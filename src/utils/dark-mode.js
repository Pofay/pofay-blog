import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"

class DarkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            {""}
            Dark Mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
