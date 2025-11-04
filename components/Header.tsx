import React, { useState } from 'react';
import type { User, Language } from '../types';
import { HomeIcon, SearchIcon, MessagesIcon, UserIcon, LogoutIcon, LanguageIcon, LogoIcon } from './icons';
import type { View } from './HomePage';

interface HeaderProps {
  user: User;
  onLogout: () => void;
  setActiveView: (view: View) => void;
  activeView: View;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full transition-colors duration-200 
      ${isActive 
        ? 'bg-gray-200 dark:bg-gray-800' 
        : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'
      }`}
    >
      <div className={`w-7 h-7 ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>{icon}</div>
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ user, onLogout, setActiveView, activeView }) => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  // In a real app, this would come from a context or state management library
  const [currentLanguage, setCurrentLanguage] = useState<Language>(user.language);


  const navItems = [
    { id: 'feed', icon: <HomeIcon /> },
    { id: 'search', icon: <SearchIcon /> },
    { id: 'messages', icon: <MessagesIcon /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" onClick={() => setActiveView('feed')}>
             MP Social
          </a>

          {/* Navigation Icons */}
          <nav className="flex items-center space-x-2 sm:space-x-4">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                isActive={activeView === item.id}
                onClick={() => setActiveView(item.id as View)}
              />
            ))}
             {/* Profile Menu */}
            <div className="relative">
                <button onClick={() => setProfileMenuOpen(!isProfileMenuOpen)} className={`p-1 rounded-full ${activeView === 'profile' ? 'ring-2 ring-pink-500' : ''}`}>
                    <img src={`https://i.pravatar.cc/150?u=${user.id}`} alt="profile" className="w-8 h-8 rounded-full" />
                </button>
                {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-xl border dark:border-gray-800 py-1">
                        <a href="#" onClick={() => { setActiveView('profile'); setProfileMenuOpen(false); }} className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <UserIcon className="w-5 h-5 mr-2" /> Profile
                        </a>
                        <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                        <div className="px-4 py-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Language</p>
                            <div className="flex space-x-2">
                                <button 
                                    onClick={() => setCurrentLanguage('en')}
                                    className={`w-full text-sm py-1 rounded-md ${currentLanguage === 'en' ? 'bg-pink-500 text-white' : 'bg-gray-200 dark:bg-gray-800'}`}
                                >
                                    English
                                </button>
                                 <button 
                                    onClick={() => setCurrentLanguage('pt')}
                                    className={`w-full text-sm py-1 rounded-md ${currentLanguage === 'pt' ? 'bg-pink-500 text-white' : 'bg-gray-200 dark:bg-gray-800'}`}
                                >
                                    Português
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                        <a href="#" onClick={onLogout} className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <LogoutIcon className="w-5 h-5 mr-2" /> Logout
                        </a>
                    </div>
                )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;