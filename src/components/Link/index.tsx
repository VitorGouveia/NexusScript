import { AnchorHTMLAttributes, FC } from 'react'
import Anchor from 'next/link'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<LinkProps> = ({ children, href, ...rest }) => {
  return (
    <Anchor {...rest} href={href || ''}>
      {children}
    </Anchor>
  )
}
