import { AnchorHTMLAttributes, FC } from "react";
import Anchor from "next/link";

import styles from "@/styles/components/link.module.scss";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<LinkProps> = ({ children, href, ...rest }) => {
  return (
    <Anchor href={href || ""}>
      <a {...rest} className={styles.a}>
        {children}
      </a>
    </Anchor>
  );
};
