export class Theme {
  themes = ["light", "dark", "contrast", "omni", "launchbase"]
  themeObject = this.themes.reduce((a, v) => ({ ...a, [v]: v }), {})
  defaultTheme = "dark"
  currentTheme = this.defaultTheme

  constructor(theme) {
    if(!theme) {
      this.setTheme(document.body.setAttribute("data-theme", localStorage.getItem("theme")))
    }
    
    this.setTheme(theme)
  }
  
  setTheme(theme) {
    let pageTheme = theme

    if(!theme || !this.themeObject[theme]) {
      pageTheme = this.defaultTheme
    }

    this.save(pageTheme)
  }

  save(theme) {
    this.currentTheme = theme

    localStorage.setItem("theme", this.currentTheme)
    document.body.setAttribute("data-theme", this.currentTheme)
  }
}


export const setThemeOnInitalLoad = () => {
  const theme = new Theme()
  
  window.addEventListener("storage", event => {
    theme.setTheme(event.newValue)
  })
}