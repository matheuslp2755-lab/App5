
import React, { useState } from 'react';
import type { Post as PostType } from '../types';
import { HeartIcon, CommentIcon, BookmarkIcon, OptionsMenuIcon } from './icons';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { author, imageUrl, caption, likes, comments, createdAt } = post;
  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollow = () => setIsFollowed(!isFollowed);

  return (
    <article className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center p-3">
        <img 
          src={`https://i.pravatar.cc/150?u=${author.id}`} 
          alt={`${author.name}'s avatar`}
          className="w-9 h-9 rounded-full"
        />
        <div className="flex-1 ml-3">
          <a href="#" className="font-semibold text-sm hover:underline">{author.name}</a>
        </div>
        <button 
          onClick={toggleFollow}
          className={`text-xs font-bold ${isFollowed ? 'text-gray-500' : 'text-blue-500'}`}
        >
          {isFollowed ? 'Following' : 'Follow'}
        </button>
        <button className="ml-3 text-gray-500 dark:text-gray-400">
            <OptionsMenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Post Image */}
      <div>
        <img src={imageUrl} alt={`Post by ${author.name}`} className="w-full object-cover" />
      </div>

      {/* Post Actions & Meta */}
      <div className="p-3">
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
            <HeartIcon className="h-7 w-7"/>
          </button>
          <button className="text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
            <CommentIcon className="h-7 w-7"/>
          </button>
          <div className="flex-1"></div>
          <button className="text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
            <BookmarkIcon className="h-7 w-7"/>
          </button>
        </div>

        <div className="mt-2">
            <p className="font-semibold text-sm">{likes.length.toLocaleString()} likes</p>
        </div>

        <div className="mt-1 text-sm">
            <a href="#" className="font-semibold hover:underline">{author.name}</a>
            <span className="ml-1">{caption}</span>
        </div>

        {comments.length > 0 && (
            <div className="mt-1">
                <a href="#" className="text-sm text-gray-500">View all {comments.length} comments</a>
            </div>
        )}
        
        <div className="mt-2">
            <p className="text-xs text-gray-400 uppercase">{createdAt}</p>
        </div>
      </div>
    </article>
  );
};

export default Post;
