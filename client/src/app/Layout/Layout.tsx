import { NavLink, Outlet } from 'react-router-dom';
import { Paths } from '../constants';
import styles from './Layout.module.css';

export const Layout = () => (
  <div>
    <div className={styles.header}>
      <NavLink to={Paths.home}>Home</NavLink>
      <NavLink to={Paths.boards}>Boards</NavLink>
      <NavLink to={Paths.issues}>Issues</NavLink>
    </div>
    <Outlet />
  </div>
);
