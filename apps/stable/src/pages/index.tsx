import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";

import { Loading } from "@/modules/Loading";
import { Button, Link } from "@/components";
import styles from "@/styles/pages/home.module.scss";

const Home: NextPage = () => {
  const [isFirstTime, setIsFirstTime] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const loadingDelay = 700;

  const [step, setStep] = useState(0);

  useEffect(() => {
    const isUserFirstTime =
      localStorage.getItem("isFirstTime") === "true" || isFirstTime;

    if (isUserFirstTime) {
      setIsFirstTime(true);
      setStep(2);
    }

    localStorage.setItem("isFirstTime", "true");
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), loadingDelay);
  }, [isFirstTime]);

  return (
    <Fragment>
      <Head>
        <title>
          Gerencie as suas finanças facilmente - Gestor de finanças pessoal -
          Organize os seus gastos | Finances
        </title>

        <meta
          name="description"
          content="Organize as suas finanças online agora, online e seguro, serviço SAAS gratuito. Finanças"
        />
      </Head>

      <div className={styles.homeContainer}>
        <Loading show={isLoading} />

        <section
          className={styles.mainSection}
          data-show={!isLoading}
          data-step={step}
        >
          <div className={styles.imgContainer}>
            {step === 0 && (
              <img src="/welcome-1.png" alt="Image of 3 finance icons" />
            )}

            {step === 1 && <img src="/graph.svg" />}

            {step === 2 && (
              <div className={styles.logoContainer}>
                <div className={styles.logoBackground}>
                  <h1>$</h1>
                </div>
              </div>
            )}
          </div>

          <h1 className={styles.title}>
            {step === 0 && <>Stay on top of your finance with us.</>}
            {step === 1 && <>Mutual Investment</>}
            {step === 2 && <>Start Now</>}
          </h1>

          <div className={styles.description}>
            {step === 0 && (
              <>
                Follow projects on every stage to see how each decision
                influence your incomes. <br />
                Set priorities and pinpoint risks.
              </>
            )}
            {step === 1 && (
              <>
                At FinanceHub we care about your future.
                <br />
                We help you invest the way you want.
                <br />
                So you can relax, have fun and let your fund grow.
              </>
            )}
            {step === 2 && (
              <>Create your account or Login into an existing account</>
            )}
          </div>

          <div className={styles.progress}>
            <>
              <div
                className={styles.dot}
                onClick={() => setStep(0)}
                data-active={step === 0}
              />
              <div
                className={styles.dot}
                onClick={() => setStep(1)}
                data-active={step === 1}
              />
              <div
                className={styles.dot}
                onClick={() => setStep(2)}
                data-active={step === 2}
              />
            </>
          </div>

          <section className={styles.buttonContainer} data-step={step}>
            {step < 2 ? (
              <Button icon variant="primary" onClick={() => setStep(step + 1)}>
                {step === 0 && <>Ok, next.</>}
                {step === 1 && <>Hm, interesting.</>}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="29.1838"
                    y="15.0918"
                    width="5"
                    height="20"
                    rx="2"
                    transform="rotate(135 29.1838 15.0918)"
                    fill="white"
                  />
                  <rect
                    x="14.5355"
                    y="29.6777"
                    width="5"
                    height="20"
                    rx="2"
                    transform="rotate(-135 14.5355 29.6777)"
                    fill="white"
                  />
                </svg>
              </Button>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="secondary">Log in</Button>
                </Link>

                <Link href="/fingerprint">
                  <Button variant="tertiary">
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.81 2.47C15.73 2.47 15.65 2.45 15.58 2.41C13.66 1.42 12 1 10.01 1C8.02998 1 6.14999 1.47 4.43999 2.41C4.19999 2.54 3.89999 2.45 3.75999 2.21C3.62999 1.97 3.71999 1.66 3.95999 1.53C5.81998 0.52 7.85998 0 10.01 0C12.14 0 14 0.47 16.04 1.52C16.29 1.65 16.38 1.95 16.25 2.19C16.16 2.37 15.99 2.47 15.81 2.47ZM1.49998 7.72C1.39998 7.72 1.29999 7.69 1.20999 7.63C0.979985 7.47 0.929985 7.16 1.08998 6.93C2.07998 5.53 3.33999 4.43 4.83999 3.66C7.97999 2.04 12 2.03 15.15 3.65C16.65 4.42 17.91 5.51 18.9 6.9C19.06 7.12 19.01 7.44 18.78 7.6C18.55 7.76 18.24 7.71 18.08 7.48C17.18 6.22 16.04 5.23 14.69 4.54C11.82 3.07 8.14999 3.07 5.28999 4.55C3.92999 5.25 2.78999 6.25 1.88999 7.51C1.80999 7.65 1.65998 7.72 1.49998 7.72ZM7.74999 19.79C7.61999 19.79 7.48998 19.74 7.39998 19.64C6.52998 18.77 6.05999 18.21 5.38999 17C4.69999 15.77 4.33999 14.27 4.33999 12.66C4.33999 9.69 6.87998 7.27 9.99998 7.27C13.12 7.27 15.66 9.69 15.66 12.66C15.66 12.94 15.44 13.16 15.16 13.16C14.88 13.16 14.66 12.94 14.66 12.66C14.66 10.24 12.57 8.27 9.99998 8.27C7.42999 8.27 5.33999 10.24 5.33999 12.66C5.33999 14.1 5.65999 15.43 6.26999 16.51C6.90999 17.66 7.34999 18.15 8.11999 18.93C8.30999 19.13 8.30999 19.44 8.11999 19.64C8.00998 19.74 7.87999 19.79 7.74999 19.79ZM14.92 17.94C13.73 17.94 12.68 17.64 11.82 17.05C10.33 16.04 9.43998 14.4 9.43998 12.66C9.43998 12.38 9.65998 12.16 9.93998 12.16C10.22 12.16 10.44 12.38 10.44 12.66C10.44 14.07 11.16 15.4 12.38 16.22C13.09 16.7 13.92 16.93 14.92 16.93C15.16 16.93 15.56 16.9 15.96 16.83C16.23 16.78 16.49 16.96 16.54 17.24C16.59 17.51 16.41 17.77 16.13 17.82C15.56 17.93 15.06 17.94 14.92 17.94ZM12.91 20C12.87 20 12.82 19.99 12.78 19.98C11.19 19.54 10.15 18.95 9.05999 17.88C7.65999 16.49 6.88999 14.64 6.88999 12.66C6.88999 11.04 8.26999 9.72 9.96999 9.72C11.67 9.72 13.05 11.04 13.05 12.66C13.05 13.73 13.98 14.6 15.13 14.6C16.28 14.6 17.21 13.73 17.21 12.66C17.21 8.89 13.96 5.83 9.95998 5.83C7.11998 5.83 4.51998 7.41 3.34998 9.86C2.95998 10.67 2.75999 11.62 2.75999 12.66C2.75999 13.44 2.82998 14.67 3.42998 16.27C3.52998 16.53 3.39998 16.82 3.13998 16.91C2.87998 17.01 2.58999 16.87 2.49998 16.62C2.00998 15.31 1.76998 14.01 1.76998 12.66C1.76998 11.46 1.99998 10.37 2.44998 9.42C3.77998 6.63 6.72998 4.82 9.95998 4.82C14.51 4.82 18.21 8.33 18.21 12.65C18.21 14.27 16.83 15.59 15.13 15.59C13.43 15.59 12.05 14.27 12.05 12.65C12.05 11.58 11.12 10.71 9.96999 10.71C8.81998 10.71 7.88999 11.58 7.88999 12.65C7.88999 14.36 8.54998 15.96 9.75998 17.16C10.71 18.1 11.62 18.62 13.03 19.01C13.3 19.08 13.45 19.36 13.38 19.62C13.33 19.85 13.12 20 12.91 20Z"
                        fill="white"
                      />
                    </svg>
                  </Button>
                </Link>

                <Link data-button="register" href="/register">
                  <Button variant="primary">Create My Account</Button>
                </Link>
              </>
            )}
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
