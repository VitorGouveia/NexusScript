import { ReactNode } from "react"

export const Section = ({
  className,
  children,
  ...props
}: {
  className?: string
  id?: string
  children: ReactNode
}) => {
  return (
    <section
      {...props}
      className={`m-auto mx-auto w-full max-w-6xl px-6 py-16 ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  )
}
