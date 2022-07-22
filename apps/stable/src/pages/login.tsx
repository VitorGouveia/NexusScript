import { FC } from "react";
import Head from "next/head";

import { Topbar, Button, Input, Link } from "@/components";
import styles from "@/styles/pages/login.module.scss";

const Login: FC = () => {
  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>FinanceHub | Login</title>
      </Head>

      <div className={styles.mainSection}>
        <Topbar back="/" />

        <div className={styles.form}>
          <Input name="e-mail" placeholder="e-mail" />
          <Input name="password" placeholder="password" />
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="primary">
            <Link href="/dash">Enter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
