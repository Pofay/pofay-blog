import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { IconButton } from "@material-ui/core"
import Brightness7Icon from "@material-ui/icons/Brightness7"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import React from "react"

const DarkMode = props => (
  <div style={{ height: 70 }}>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <IconButton
          aria-label="toggle-theme"
          onClick={e => {
            theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
          }}
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      )}
    </ThemeToggler>
  </div>
)

export default DarkMode
