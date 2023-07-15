import { Logo } from "./Logo"

export const Header = () => (
  <header className="fixed top-0 z-50 flex w-full items-center justify-center bg-zinc-900">
    <nav className="flex w-full max-w-6xl items-center justify-between p-3">
      <section className="flex items-center gap-12">
        <Logo />
      </section>

      <a
        href="#criar-site"
        className="flex items-center justify-center rounded bg-amber-300 p-3 font-bold text-zinc-900 transition hover:bg-amber-200"
      >
        Começar
      </a>
    </nav>
  </header>
)
