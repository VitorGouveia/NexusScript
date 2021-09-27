import { AnchorHTMLAttributes, FC } from 'react'
import Anchor from 'next/link'

import { A } from '@styles/components/link'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<LinkProps> = ({ children, href, ...rest }) => {
  return (
    <Anchor {...rest} href={href || ''}>
      <A href={href}>{children}</A>
    </Anchor>
  )
}
