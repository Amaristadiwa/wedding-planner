import React from 'react';
import { useParams } from 'react-router-dom';

const dummyVenues = {
  1: {
    name: "Crystal Palace",
    image: "src/assets/images/Luxury Wedding Venues in Napa Valley.jpeg",
    description: "Elegant ballroom perfect for 200+ guests. Includes catering, lights, decor.",
    price: "$4000",
    location: "Harare",
    rating: "4.9 (210)",
  },
  2: {
    name: "Rose Garden",
    image: "src/assets/images/Enchanting Lakeside Wedding Under the Stars.jpeg",
    description: "Romantic garden with floral arch, ideal for outdoor ceremonies.",
    price: "$3500",
    location: "Bulawayo",
    rating: "4.7 (178)",
  },
};

export default function VenueDetail() {
  const { id } = useParams();
  const venue = dummyVenues[id];

  if (!venue) return <div className="p-4">Venue not found.</div>;

  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <img src={venue.image} className="w-full h-48 object-cover rounded-xl mb-4" alt={venue.name} />
      <h1 className="text-2xl font-bold text-pink-600">{venue.name}</h1>
      <p className="text-sm text-gray-600">{venue.location}</p>
      <p className="text-yellow-500 text-sm mb-2">{venue.rating}</p>
      <p className="text-gray-700 text-sm mb-4">{venue.description}</p>
      <p className="text-pink-500 text-lg font-bold mb-4">{venue.price}</p>
      <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full w-full">
        Book Now
      </button>
    </div>
  );
}
