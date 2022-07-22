import { FC } from "react";

import styles from "@/styles/modules/loading.module.scss";

type LoadingProps = {
  show: boolean;
};

export const Loading: FC<LoadingProps> = ({ show }) => {
  return (
    <div className={styles.logoContainer} data-show={show}>
      <div className={styles.logoBackground}>
        <h1>$</h1>
      </div>
    </div>
  );
};
