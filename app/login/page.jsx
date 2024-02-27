import styles from "@/components/login/login.module.css";
import LoginForm from "@/components/login/loginForm/loginForm";


const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;