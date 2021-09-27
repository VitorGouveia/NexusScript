import { AnchorHTMLAttributes, FC } from 'react'
import Anchor from 'next/link'

import { A } from '@styles/components/link'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<LinkProps> = ({ children, href, ...rest }) => {
  return (
    <Anchor href={href || ''}>
      <A {...rest} href={href}>
        {children}
      </A>
    </Anchor>
  )
}
