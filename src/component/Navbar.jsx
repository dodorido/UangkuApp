import React, { useState } from "react";
import { navItems } from "../constant";
import {Menu, X} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import  uangku  from '../assets/uangku.png';
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/hitung-modal'); // Mengarahkan ke halaman Hitung Modal
  }
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={uangku} alt="uangku" />
            <span className="text-xl tracking-tight text-green-800">UangKu</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault(); // Mencegah reload halaman
                if (item.onClick) {
                  item.onClick(navigate);
                }
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
          
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>  
          </div>
        )}
      </div>
      {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-2">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
    </nav>
  );
};

export default Navbar;