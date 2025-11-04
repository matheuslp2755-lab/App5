
import React from 'react';
import type { User } from '../types';

interface CreatePostProps {
  user: User;
}

const CreatePost: React.FC<CreatePostProps> = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-900/50 p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
      <div className="flex space-x-3">
        <img 
          src={`https://i.pravatar.cc/150?u=${user.id}`} 
          alt="User avatar" 
          className="w-10 h-10 rounded-full"
        />
        <textarea
          className="w-full bg-transparent text-lg placeholder-gray-500 focus:outline-none resize-none"
          placeholder="What's on your mind?"
          rows={2}
        ></textarea>
      </div>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
         <div>
            {/* Placeholder for Photo/Video upload buttons */}
             <button className="text-blue-500 font-semibold text-sm hover:text-blue-600">
                Add Photo/Video
             </button>
         </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 text-sm">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
