import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => 
    `nav-link ${isActive(path) ? 'nav-link-active' : ''}`;

  return (
    <header className="mb-8">
      <nav className="flex items-center justify-between bg-white/70 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg">
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          MF Monorepo
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/" className={navLinkClass('/')}>홈</Link>
          <Link to="/products" className={navLinkClass('/products')}>상품</Link>
          <Link to="/users" className={navLinkClass('/users')}>사용자</Link>
          <Link to="/about" className={navLinkClass('/about')}>소개</Link>
        </div>
      </nav>
    </header>
  );
};

