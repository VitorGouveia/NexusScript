import { FC } from 'react'
import { HelpCircle, ArrowLeft } from 'react-feather'

import { Link } from '@components'
import { Navabar } from '@styles/components/topbar'

type TopbarProps = {
  back: string
  onClick?: () => void
}

export const Topbar: FC<TopbarProps> = ({ back, ...rest }) => {
  return (
    <Navabar>
      <Link {...rest} href={back}>
        <ArrowLeft />
      </Link>

      <Link href="/help">
        <HelpCircle />
      </Link>
    </Navabar>
  )
}
