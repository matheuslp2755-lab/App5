import React from 'react';

interface StoryItemProps {
  avatarUrl: string;
  username: string;
  seen?: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({ avatarUrl, username, seen = false }) => {
  const ringClass = seen
    ? 'ring-gray-300 dark:ring-gray-700'
    : 'ring-pink-500';

  return (
    <button className="flex flex-col items-center space-y-1 flex-shrink-0 focus:outline-none">
      <div className={`bg-white dark:bg-black p-0.5 rounded-full ring-2 ${ringClass} ring-offset-2 ring-offset-white dark:ring-offset-black transition-transform transform hover:scale-105`}>
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={avatarUrl}
          alt={`${username}'s story`}
        />
      </div>
      <p className="text-xs w-20 truncate text-center text-gray-800 dark:text-gray-200">{username}</p>
    </button>
  );
};

export default StoryItem;
