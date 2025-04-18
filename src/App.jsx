// src/App.jsx
import React, { useState, useEffect } from "react";
import Map from "./Map";
import "/style.css";
// App.jsx
import React from 'react';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      {/* 나머지 컴포넌트들 */}
    </>
  );
}

//
// Dummy data for listings
//
const listingsData = [
  {
    id: "sinchon-room-1",
    title: "Studio near Sogang Univ. (Sinchon)",
    location: "Sinchon-dong, Mapo-gu",
    price: "₩550,000/month",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: "yeonnam-room-1",
    title: "One‑room near Hongdae",
    location: "Yeonnam-dong, Mapo-gu",
    price: "₩620,000/month",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: "changjeon-room-1",
    title: "Studio with view",
    location: "Changjeon-dong, Mapo-gu",
    price: "₩580,000/month",
    image: "https://via.placeholder.com/300x200",
  },
  // ...you can add more dummy entries here for testing
];

export default function App() {
  //
  // Wishlist state (persisted in localStorage)
  //
  const [wishlist, setWishlist] = useState(() => {
    try {
      const stored = localStorage.getItem("wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load wishlist:", e);
      return [];
    }
  });

  //
  // Search query state
  //
  const [searchQuery, setSearchQuery] = useState("");

  //
  // Persist wishlist to localStorage whenever it changes
  //
  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist:", e);
    }
  }, [wishlist]);

  //
  // Toggle wishlist membership
  //
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  //
  // Filter listings based on search query
  //
  const filteredListings = listingsData.filter((listing) =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    || listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/*
        ─────────────────────────────────────────────────────────────────
        Header
        ─────────────────────────────────────────────────────────────────
      */}
      <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img src="/kohologo.jpg" alt="Global Home Logo" className="h-10" />
          <h1 className="text-xl font-bold">Global Home</h1>
        </div>
        <nav>
          <ul className="flex gap-6 font-semibold">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Listings</a></li>
            <li><a href="#" className="hover:underline">Favorites</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
          </ul>
        </nav>
      </header>

      {/*
        ─────────────────────────────────────────────────────────────────
        Search Section
        ─────────────────────────────────────────────────────────────────
      */}
      <section className="bg-yellow-300 p-4 flex justify-center shadow-sm">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search in Sinchon, Mapo-gu..."
          className="px-4 py-2 w-72 rounded-l border border-gray-300 focus:outline-none"
        />
        <button
          onClick={() => {/* you can hook up real search logic here */ }}
          className="bg-blue-600 text-white px-4 rounded-r font-medium"
        >
          Search
        </button>
      </section>

      {/*
        ─────────────────────────────────────────────────────────────────
        Map Section (large)
        ─────────────────────────────────────────────────────────────────
      */}
      <section className="w-full h-[60vh] md:h-[70vh] lg:h-[75vh]">
        <Map />
      </section>


      {/*
        ─────────────────────────────────────────────────────────────────
        Listings Grid
        ─────────────────────────────────────────────────────────────────
      */}
      <main className="flex-1 max-w-screen-lg mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{listing.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{listing.location}</p>
              <p className="text-sm mb-4">{listing.price}</p>
              <button
                onClick={() => toggleWishlist(listing.id)}
                className={`px-3 py-1 border rounded-full text-sm transition 
                  ${wishlist.includes(listing.id)
                    ? "bg-yellow-300 border-blue-600 text-blue-600"
                    : "bg-white border-gray-300 text-gray-700"
                  }`}
              >
                {wishlist.includes(listing.id) ? "★ Saved" : "♡ Save"}
              </button>
            </div>
          </div>
        ))}

        {filteredListings.length === 0 && (
          <div className="col-span-full text-center text-gray-600">
            No results found.
          </div>
        )}
      </main>

      {/*
        ─────────────────────────────────────────────────────────────────
        Footer
        ─────────────────────────────────────────────────────────────────
      */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Global Home. All rights reserved.</p>
      </footer>
    </div>
  );
}
