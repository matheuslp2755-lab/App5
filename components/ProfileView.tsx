import React from 'react';
import type { User } from '../types';

interface ProfileViewProps {
  user: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-4 sm:p-8">
        <header className="flex items-center space-x-8 sm:space-x-16">
          <div className="flex-shrink-0">
            <img 
              src={`https://i.pravatar.cc/150?u=${user.id}`} 
              alt="User avatar" 
              className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover"
            />
          </div>
          <section className="flex-grow">
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-2xl font-light text-gray-800 dark:text-gray-200">{user.id}</h1>
              <button className="bg-gray-200 dark:bg-gray-800 text-sm font-semibold py-1.5 px-4 rounded-lg">
                Edit Profile
              </button>
            </div>
            <div className="flex space-x-8 text-sm sm:text-base">
              <div><span className="font-semibold">0</span> posts</div>
              <div><span className="font-semibold">0</span> followers</div>
              <div><span className="font-semibold">0</span> following</div>
            </div>
             <div className="mt-4">
                <h2 className="font-semibold text-sm sm:text-base">{user.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    This is a placeholder bio. Users will be able to edit this section. #MPsocial
                </p>
             </div>
          </section>
        </header>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 mt-4">
         {/* Post tabs */}
         <div className="flex justify-center text-xs sm:text-sm font-semibold text-gray-400">
            <a href="#" className="flex-1 text-center p-3 border-t-2 border-gray-800 dark:border-white text-gray-800 dark:text-white">
                POSTS
            </a>
            <a href="#" className="flex-1 text-center p-3">
                SAVED
            </a>
             <a href="#" className="flex-1 text-center p-3">
                TAGGED
            </a>
         </div>
         {/* Post Grid - Empty State */}
        <div className="py-20 text-center text-gray-500 dark:text-gray-400">
          <div className="inline-block border-2 border-gray-800 dark:border-gray-300 rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-gray-800 dark:text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Share Photos</h2>
          <p className="mt-1 text-sm">When you share photos, they will appear on your profile.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;