import { ButtonHTMLAttributes, FC } from "react";
// import { Loader } from "react-feather";

import styles from "@/styles/components/button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
  icon?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  icon = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={styles.buttonContainer}
      data-loading={isLoading || false}
    >
      <div
        className={styles.buttonText}
        data-icon={icon}
        data-loading={isLoading || false}
      >
        {children}
      </div>
    </button>
  );
};
