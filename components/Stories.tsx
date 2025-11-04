import React from 'react';
import type { User } from '../types';
import StoryItem from './StoryItem';
import { PlusIcon } from './icons';

interface StoriesProps {
    user: User;
}

// Dummy empty data, ready for real data from a database
const stories: { userId: string, userName: string, avatarUrl: string, seen: boolean }[] = [];

const Stories: React.FC<StoriesProps> = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-900/50 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
        <div className="flex items-center space-x-4 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {/* Add Story Button */}
            <button className="flex flex-col items-center space-y-1 flex-shrink-0 focus:outline-none">
                <div className="relative group">
                    <img
                        className="w-16 h-16 rounded-full object-cover group-hover:opacity-80 transition-opacity"
                        src={`https://i.pravatar.cc/150?u=${user.id}`}
                        alt="Your Story"
                    />
                    <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white dark:border-gray-900/50 group-hover:scale-110 transition-transform">
                        <PlusIcon className="w-4 h-4 text-white" />
                    </div>
                </div>
                <p className="text-xs w-20 truncate text-center text-gray-800 dark:text-gray-200">Your Story</p>
            </button>
            
            {/* Following Stories - currently empty */}
            {stories.map((story) => (
                <StoryItem
                    key={story.userId}
                    avatarUrl={story.avatarUrl}
                    username={story.userName}
                    seen={story.seen}
                />
            ))}
        </div>
    </div>
  );
};

export default Stories;
