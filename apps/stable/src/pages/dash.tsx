import { FC } from "react";
import { Bell, Send, BarChart2, Repeat, PieChart } from "react-feather";

import styles from "@/styles/pages/dash.module.scss";

const Dash: FC = () => {
  return (
    <div className={styles.dashContainer}>
      <div className={styles.header}>
        <div className={styles.moneyHeading}>R$ 1435.053,32</div>
        <small>Balance</small>
        <Bell size={24} />
        <div>
          <img
            alt="description"
            src={`https://avatars.dicebear.com/api/jdenticon/${new Date()
              .getTime()
              .toString()}.svg`}
          />
        </div>

        <div className={styles.nav}>
          <div className={styles.navCart}>
            <picture>
              <Send />
            </picture>
            Send
          </div>

          <div className={styles.navCart}>
            <picture>
              <BarChart2 />
            </picture>
            Invest
          </div>

          <div className={styles.navCart}>
            <picture>
              <Repeat />
            </picture>
            In {"&"} Out
          </div>

          <div className={styles.navCart}>
            <picture>
              <PieChart />
            </picture>
            Overview
          </div>
        </div>
      </div>
      <main className={styles.main}></main>
    </div>
  );
};

export default Dash;
