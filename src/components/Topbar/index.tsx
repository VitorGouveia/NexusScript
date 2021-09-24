import { FC } from 'react'
import { HelpCircle, ArrowLeft } from 'react-feather'

import { Navabar } from '@styles/components/topbar'

export const Topbar: FC = () => {
  return (
    <Navabar>
      <ArrowLeft />
      <HelpCircle />
    </Navabar>
  )
}
