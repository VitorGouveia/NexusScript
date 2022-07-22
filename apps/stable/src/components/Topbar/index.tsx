import { FC } from "react";
import { HelpCircle, ArrowLeft } from "react-feather";

import { Link } from "@/components";
import styles from "@/styles/components/topbar.module.scss";

type TopbarProps = {
  back: string;
  onClick?: () => void;
};

export const Topbar: FC<TopbarProps> = ({ back, ...rest }) => {
  return (
    <nav className={styles.navbar}>
      <Link {...rest} href={back}>
        <ArrowLeft />
      </Link>

      <Link href="/help">
        <HelpCircle />
      </Link>
    </nav>
  );
};
