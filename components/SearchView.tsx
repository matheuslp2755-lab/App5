import React from 'react';
import { SearchIcon } from './icons';

// User list is now empty, ready for real data from a database.
const suggestedUsers: { id: string; name: string; handle: string; isFollowing: boolean; }[] = [];

const SearchView: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-4 bg-gray-50 dark:bg-black sticky top-16 sm:top-20 z-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-200 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>
      
      <div className="mt-4">
         <h2 className="text-md font-bold px-4 mb-2 text-gray-900 dark:text-white">Suggested for you</h2>
         {suggestedUsers.length > 0 ? (
            suggestedUsers.map(user => (
             <div key={user.id} className="p-3 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors rounded-lg">
                <div className="flex items-center space-x-3">
                    <img src={`https://i.pravatar.cc/150?u=${user.id}`} alt={user.name} className="w-11 h-11 rounded-full" />
                    <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-gray-500 text-sm">@{user.handle}</p>
                    </div>
                </div>
                <button className={`font-semibold py-1.5 px-4 rounded-lg text-sm ${user.isFollowing ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'bg-blue-500 text-white'}`}>
                    {user.isFollowing ? 'Following' : 'Follow'}
                </button>
             </div>
            ))
         ) : (
            <div className="px-4 py-8 text-center text-gray-500 text-sm">
                <p>No suggestions at the moment. Use the search bar to find friends!</p>
            </div>
         )}
      </div>
    </div>
  );
};

export default SearchView;