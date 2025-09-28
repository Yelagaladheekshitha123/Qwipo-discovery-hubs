import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-purple-200/30"></div>
      <div className="w-full max-w-4xl relative z-10 text-center space-y-8 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-indigo-200/50">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c0 4.97-4.03 9-9 9a9.28 9.28 0 01-4.69-1.31L3 21l1.31-4.69A9.28 9.28 0 013 12a9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-sans">Welcome to Qwipo Discovery Hub</h1>
            <p className="text-2xl text-indigo-700 font-semibold max-w-2xl mx-auto leading-relaxed">
              Discover amazing content, innovative ideas, and connect with like-minded individuals. Qwipo is your gateway to exploration and creativity.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="p-4 bg-indigo-50 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-indigo-800 mb-2">Explore Content</h3>
                <p className="text-gray-600 text-sm">Access curated recommendations and new discoveries tailored to your interests.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Connect & Share</h3>
                <p className="text-gray-600 text-sm">Join communities, share your thoughts, and collaborate with others.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-purple-800 mb-2">Inspire Growth</h3>
                <p className="text-gray-600 text-sm">Find inspiration, knowledge, and connections to fuel your personal and professional growth.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 pt-8 border-t border-indigo-200">
          <div className="flex justify-center space-x-6">
            <Button
              onClick={() => navigate('/signin')}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-xl py-4 px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate('/register')}
              variant="outline"
              className="border-2 border-indigo-600 text-indigo-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 font-bold text-xl py-4 px-10 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Register Now
            </Button>
          </div>
          <p className="text-base text-gray-600 font-medium max-w-md mx-auto">
            New to Qwipo? Register to unlock your discovery journey. Already a member? Sign in to continue exploring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
