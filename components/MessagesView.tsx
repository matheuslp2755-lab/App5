
import React from 'react';

const MessagesView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto border border-gray-200 dark:border-gray-800 rounded-xl h-[calc(100vh-100px)] flex bg-white dark:bg-gray-900/50">
        {/* Conversation List */}
        <div className="w-1/3 border-r border-gray-200 dark:border-gray-800 flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-lg font-bold text-center">Messages</h1>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
             {/* Placeholder for conversation list */}
             <div className="p-4 text-center text-gray-500 text-sm">
                Your conversations will appear here. Start a new one from a user's profile.
             </div>
            </div>
        </div>
        {/* Chat Window */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
             <div className="text-center text-gray-500">
                <div className="w-24 h-24 border-4 border-gray-800 rounded-full flex items-center justify-center mx-auto">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold mt-4">Your Messages</h2>
                <p className="text-sm">Send private messages to a friend.</p>
             </div>
        </div>
    </div>
  );
};

export default MessagesView;
