import { FC } from 'react'
import { Bell, Send, BarChart2, Repeat, PieChart } from 'react-feather'

import {
  DashContainer,
  Header,
  Main,
  Nav,
  MoneyHeading,
  NavCard,
} from '@styles/pages/dash'

const Dash: FC = () => {
  return (
    <DashContainer>
      <Header>
        <MoneyHeading>R$ 1435.053,32</MoneyHeading>
        <small>Balance</small>
        <Bell size={24} />
        <div>
          <img
            src={`https://avatars.dicebear.com/api/jdenticon/${new Date()
              .getTime()
              .toString()}.svg`}
          />
        </div>

        <Nav>
          <NavCard>
            <picture>
              <Send />
            </picture>
            Send
          </NavCard>

          <NavCard>
            <picture>
              <BarChart2 />
            </picture>
            Invest
          </NavCard>

          <NavCard>
            <picture>
              <Repeat />
            </picture>
            In {'&'} Out
          </NavCard>

          <NavCard>
            <picture>
              <PieChart />
            </picture>
            Overview
          </NavCard>
        </Nav>
      </Header>
      <Main></Main>
    </DashContainer>
  )
}

export default Dash
