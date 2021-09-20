export class Theme {
  themes = ["light", "dark", "contrast", "omni", "launchbase"]
  themeObject = this.themes.reduce((a, v) => ({ ...a, [v]: v }), {})
  defaultTheme = "dark"
  currentTheme = this.defaultTheme

  constructor(theme) {
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