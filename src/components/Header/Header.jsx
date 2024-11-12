import React from 'react';
import { Container, LogoutBtn, Logo } from "../index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];
  
  return (
    <header className="py-3 shadow-lg bg-gray-800 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="hidden md:flex ml-auto space-x-6">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 rounded-full duration-200 hover:bg-gray-700"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden mt-2">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
