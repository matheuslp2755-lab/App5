
import React, { useState } from 'react';
import type { User } from '../types';
import Header from './Header';
import Feed from './Feed';
import SearchView from './SearchView';
import MessagesView from './MessagesView';
import ProfileView from './ProfileView';

interface HomePageProps {
  user: User;
  onLogout: () => void;
}

export type View = 'feed' | 'search' | 'messages' | 'profile';

const HomePage: React.FC<HomePageProps> = ({ user, onLogout }) => {
  const [activeView, setActiveView] = useState<View>('feed');

  const renderContent = () => {
    switch (activeView) {
      case 'feed':
        return <Feed user={user} />;
      case 'search':
        return <SearchView />;
      case 'messages':
        return <MessagesView />;
      case 'profile':
        return <ProfileView user={user} />;
      default:
        return <Feed user={user} />;
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen">
      <Header user={user} onLogout={onLogout} setActiveView={setActiveView} activeView={activeView} />
      <main className="max-w-4xl mx-auto pt-16 sm:pt-20">
        <div className="px-4 sm:px-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
