import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: user?.name || '', email: user?.email || '' });
  const [showAllDiscoveries, setShowAllDiscoveries] = useState(false);

  const allDiscoveries = [
    {
      id: 1,
      icon: 'AI',
      title: 'AI-Powered Content Discovery',
      description: 'Explored new AI tools for creativity - 2 days ago',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-200',
      iconColor: 'text-indigo-600'
    },
    {
      id: 2,
      icon: 'Net',
      title: 'Networking Event',
      description: 'Connected with 5 like-minded individuals - 1 week ago',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      icon: 'Insp',
      title: 'Inspirational Reads',
      description: 'Saved 3 articles on personal growth - 3 days ago',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      icon: 'Tech',
      title: 'Tech Innovation Summit',
      description: 'Attended sessions on emerging technologies - 1 month ago',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 5,
      icon: 'Art',
      title: 'Digital Art Workshop',
      description: 'Learned new digital art techniques - 2 weeks ago',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-200',
      iconColor: 'text-pink-600'
    },
    {
      id: 6,
      icon: 'Biz',
      title: 'Business Strategy Webinar',
      description: 'Gained insights on scaling startups - 3 weeks ago',
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-yellow-200',
      iconColor: 'text-yellow-600'
    },
    {
      id: 7,
      icon: 'Sci',
      title: 'Science Discovery Podcast',
      description: 'Listened to episodes on quantum physics - 1 month ago',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-200',
      iconColor: 'text-red-600'
    },
    {
      id: 8,
      icon: 'Env',
      title: 'Environmental Awareness Campaign',
      description: 'Participated in local clean-up drive - 2 months ago',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-teal-200',
      iconColor: 'text-teal-600'
    },
    {
      id: 9,
      icon: 'Edu',
      title: 'Online Learning Platform',
      description: 'Completed 5 courses on various topics - 1 month ago',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      id: 10,
      icon: 'Fit',
      title: 'Fitness Challenge',
      description: 'Achieved personal fitness goals - 3 weeks ago',
      bgColor: 'bg-cyan-50',
      iconBg: 'bg-cyan-200',
      iconColor: 'text-cyan-600'
    }
  ];

  const displayedDiscoveries = showAllDiscoveries ? allDiscoveries : allDiscoveries.slice(0, 3);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="text-center space-y-4">
          <p className="text-xl text-gray-600">Please log in to view your profile.</p>
          <Button onClick={() => navigate('/signin')} className="bg-gradient-to-r from-indigo-600 to-blue-600">
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  const handleEdit = () => {
    if (isEditing) {
      // Update localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = users.map(u => u.email === user.email ? { ...u, ...editedUser } : u);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('currentUser', JSON.stringify({ ...user, ...editedUser }));
      alert('Profile updated successfully!');
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200/30 via-transparent to-purple-200/20"></div>
          <div className="relative z-10">
            <div className="w-32 h-32 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-5xl text-white font-bold">{user.name.charAt(0).toUpperCase()}</span>
            </div>
            <div className="space-y-2">
              {isEditing ? (
                <Input
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="text-3xl font-bold text-center bg-transparent border-none focus:ring-0"
                />
              ) : (
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">{user.name}</h1>
              )}
              <p className="text-xl text-indigo-700 font-semibold">{user.email}</p>
            </div>
            <Button onClick={handleEdit} variant={isEditing ? "default" : "outline"} className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600">12</div>
            <p className="text-gray-600 font-medium">Discoveries</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">45</div>
            <p className="text-gray-600 font-medium">Connections</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">23</div>
            <p className="text-gray-600 font-medium">Recommendations</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recommendations for You
          </h2>
          <div className="space-y-4">
            {displayedDiscoveries.map((discovery) => (
              <div key={discovery.id} className={`flex items-center space-x-4 p-4 ${discovery.bgColor} rounded-xl`}>
                <div className={`w-12 h-12 ${discovery.iconBg} rounded-lg flex items-center justify-center`}>
                  <span className={`font-semibold ${discovery.iconColor}`}>{discovery.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{discovery.title}</h3>
                  <p className="text-sm text-gray-600">{discovery.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="link"
            className="mt-6 text-indigo-600 hover:text-indigo-800"
            onClick={() => setShowAllDiscoveries(!showAllDiscoveries)}
          >
            {showAllDiscoveries ? 'Show Less' : 'View All'}
          </Button>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 flex justify-center space-x-4">
          <Button onClick={() => navigate('/home')} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Go to Home
          </Button>
          <Button onClick={logout} variant="destructive" className="flex-1">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
