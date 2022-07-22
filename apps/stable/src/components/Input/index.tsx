import { FC, InputHTMLAttributes, SelectHTMLAttributes, useState } from "react";
import PhoneInput from "react-phone-input-2";

import styles from "@/styles/components/input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  noLabel?: boolean;
}

export const Input: FC<InputProps> = ({
  name,
  placeholder,
  noLabel,
  ...rest
}) => {
  return (
    <div className={styles.inputContainer}>
      {noLabel ? (
        <>
          <input
            maxLength={6}
            data-short={noLabel}
            {...rest}
            className={styles.inputElement}
            id={name}
          />

          <span className={styles.span} data-short={noLabel} />
        </>
      ) : (
        <>
          <input {...rest} className={styles.inputElement} id={name} />

          <label className={styles.label} htmlFor={name}>
            {placeholder}
          </label>

          <span className={styles.span} />
        </>
      )}
    </div>
  );
};

export const Datalist: FC<InputProps> = ({
  name,
  placeholder,
  noLabel,
  children,
  ...rest
}) => {
  return (
    <div className={styles.inputContainer}>
      {noLabel ? (
        <>
          <input
            list={name}
            maxLength={6}
            data-short={noLabel}
            {...rest}
            className={styles.inputElement}
            id={name}
          />

          <datalist id={name}>{children}</datalist>

          <span data-short={noLabel} className={styles.span} />
        </>
      ) : (
        <>
          <input
            list={name}
            {...rest}
            className={styles.inputElement}
            id={name}
          />

          <datalist id={name}>{children}</datalist>
          <label className={styles.label} htmlFor={name}>
            {placeholder}
          </label>

          <span className={styles.span} />
        </>
      )}
    </div>
  );
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select: FC<SelectProps> = ({
  children,
  placeholder,
  name,
  ...rest
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {placeholder}
      </label>
      <select className={styles.selectContainer} id={name} {...rest}>
        {children}
      </select>
      <span className={styles.span} />
    </div>
  );
};
