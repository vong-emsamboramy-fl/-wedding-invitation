'use client';

import { useState, useEffect } from 'react';

export default function WeddingInvitation() {
  const [inviteeName, setInviteeName] = useState('Dear Guest');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
      setInviteeName(`Dear ${name}`);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
          
          {/* Header Decoration */}
          <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 h-2"></div>
          
          {/* Main Content */}
          <div className="p-8 md:p-12 text-center">
            
            {/* Decorative Element */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Dynamic Invitee Name Block */}
            <div className="mb-8 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
              <h1 className="text-2xl md:text-3xl font-serif text-rose-800 mb-2">
                {inviteeName}
              </h1>
              <p className="text-rose-600 text-sm">You are cordially invited to celebrate</p>
            </div>

            {/* Couple Names */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                <span className="block text-rose-600">Ramy</span>
                <span className="text-2xl text-gray-600 font-light">&</span>
                <span className="block text-rose-600">Moniroth</span>
              </h2>
              <p className="text-xl text-gray-700 font-light">are getting married!</p>
            </div>

            {/* Wedding Details */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Saturday, December 14th, 2024</p>
                  <p className="text-gray-600">6:00 PM</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Vimean Piphup Thmei Sensok</p>
                  <p className="text-gray-600">Building C</p>
                </div>
              </div>
            </div>

            {/* RSVP Section */}
            <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-serif text-rose-800 mb-4">Please RSVP by December 1st, 2024</h3>
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                RSVP Now
              </button>
            </div>

            {/* Footer Message */}
            <div className="text-center">
              <p className="text-gray-600 font-light italic">
                &ldquo;Love is not just looking at each other, it&rsquo;s looking in the same direction together.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-4">
                We can&rsquo;t wait to celebrate with you!
              </p>
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 h-2"></div>
        </div>
      </div>
    </div>
  );
}
