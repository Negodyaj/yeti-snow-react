import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './logo.svg';
import { UserWidget } from './shared/UserWidget/UserWidget';

interface HeaderProps {
  userName: string;
  userStatus: string;
}

export const Header = (props: HeaderProps) => {
  const { userName, userStatus } = props;
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Yeti sports" />
        <nav>
          <Link to="/" className="nav-link">О МАГАЗИНЕ</Link>
          <Link to="/catalog" className="nav-link">КАТАЛОГ</Link>
          <Link to="/" className="nav-link">КОНТАКТЫ</Link>
          <Link to="/" className="nav-link">ЛИЧНЫЙ КАБИНЕТ</Link>
          <Link to="/" className="nav-link">КОРЗИНА (0)</Link>
          <Link to="/login" className="nav-link">Log In</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <UserWidget avatarLink={''} name={userName} status={userStatus} />
        </nav>
        <button className="burger-menu mobile-only">...</button>
      </div>
    </header>
  );
};
