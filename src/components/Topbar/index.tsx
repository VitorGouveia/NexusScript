import { FC } from 'react'
import { HelpCircle, ArrowLeft } from 'react-feather'

import { Link } from '@components'
import { Navabar } from '@styles/components/topbar'

type TopbarProps = {
  back: string
}

export const Topbar: FC<TopbarProps> = ({ back }) => {
  return (
    <Navabar>
      <Link href={back}>
        <ArrowLeft />
      </Link>

      <Link href="/help">
        <HelpCircle />
      </Link>
    </Navabar>
  )
}
