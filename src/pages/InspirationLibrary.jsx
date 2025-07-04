import React from 'react';

const inspirations = [
  { id: 1, title: "Rustic Theme", image: "src/assets/images/download (4).jpeg" },
  { id: 2, title: "Garden Ceremony", image: "src/assets/images/download (4).jpeg" },
  { id: 3, title: "Classic Bride Look", image: "src/assets/images/Enchanting Lakeside Wedding Under the Stars.jpeg" },
];

export default function InspirationLibrary() {
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <h2 className="text-xl font-bold text-pink-600 mb-4">Inspiration Library</h2>
      <div className="grid grid-cols-2 gap-4">
        {inspirations.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow">
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
            <div className="p-2">
              <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
