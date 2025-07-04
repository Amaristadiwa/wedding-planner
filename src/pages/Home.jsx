import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Home as HomeIcon, Heart, Search, User } from 'lucide-react';

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user'));

  const venues = [
    {
      id: 1,
      name: "Crystal Palace",
      location: "Harare",
      image: "src/assets/images/Luxury Wedding Venues in Napa Valley.jpeg",
      reviews: "4.9 (210)",
      price: "$4000",
    },
    {
      id: 2,
      name: "Rose Garden",
      location: "Bulawayo",
      image: "src/assets/images/download (4).jpeg",
      reviews: "4.7 (178)",
      price: "$3500",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col justify-between">
      <div className="p-4">
        <h2 className="text-sm text-gray-500">Welcome to Wedding Bells</h2>
        <h1 className="text-xl font-bold text-pink-600">Hello, {user?.name || 'Guest'} 👋</h1>
        <input
          type="text"
          placeholder="Search venues..."
          className="w-full mt-4 p-3 rounded-xl bg-white shadow-sm outline-none"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-pink-700 mb-3">Recommended Venues</h2>
        <div className="space-y-4">
          {venues.map((venue) => (
            <Link to={`/venue/${venue.id}`} key={venue.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex">
                <img src={venue.image} alt={venue.name} className="w-1/3 object-cover" />
                <div className="p-3 flex-1">
                  <h3 className="font-semibold text-gray-800">{venue.name}</h3>
                  <p className="text-xs text-gray-500">{venue.location}</p>
                  <p className="text-xs text-yellow-500 mt-1">{venue.reviews}</p>
                  <p className="text-sm font-semibold text-pink-600 mt-1">{venue.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white shadow-inner flex justify-around py-3 border-t border-gray-100">
        <Link to="/home"><Home className="text-pink-500" /></Link>
        <Link to="/favorites"><Heart className="text-gray-400" /></Link>
        <Link to="/inspiration"><Search className="text-gray-400" /></Link>
        <Link to="#"><User className="text-gray-400" /></Link>
      </div>
    </div>
  );
}
