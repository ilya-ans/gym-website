import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

import './Layout.css'; 

export default function Layout() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}