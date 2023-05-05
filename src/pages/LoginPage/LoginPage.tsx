interface LoginPageProps {
  setUserData: (name: string, status: string) => void;
}

export const LoginPage = (props: LoginPageProps) => {
  const { setUserData } = props;

  const onLogInButtonClick = () => {
    // sending request
    // getting response
    const user = {
      id: 14,
      name: 'John Doe',
      email: 'john.doe@mail.com',
      status: 'VIP',
    };

    setUserData(user.name, user.status);
  };

  return (
    <div className="container log-in-page">
      <h1>Log in</h1>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '15px'}}>
        <label>Email: <input type="email" /></label>
        <label>Password: <input type="password" /></label>
        <button type="button" onClick={onLogInButtonClick}>Let me in</button>
      </form>
    </div>
  );
};
