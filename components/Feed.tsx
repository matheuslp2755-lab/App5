import React from 'react';
import type { User, Post as PostType } from '../types';
import Post from './Post';
import CreatePost from './CreatePost';
import Stories from './Stories';

interface FeedProps {
  user: User;
}

// Data is now empty, ready for real user posts from a database.
const posts: PostType[] = [];

const Feed: React.FC<FeedProps> = ({ user }) => {
  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      <Stories user={user} />
      <CreatePost user={user} />
      
      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))
        ) : (
          <div className="text-center py-16 px-4 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Welcome to MP Social!</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Your feed is empty. Start by finding people to follow.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;