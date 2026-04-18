import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-transparent text-[#f3ecdf]">
      <NavBar />
      <main className="pb-10 pt-32 sm:pt-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
