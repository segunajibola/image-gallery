import react, { useState, useEffect } from "react";

function App() {
  //cont []

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
          </div>
          <ul>
            <li>
              <strong>Views: 4000</strong>
            </li>
            <li>
              <strong>Downloads: 300</strong>
            </li>
            <li>
              <strong>Likes: 400</strong>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-ful px-3 py-1 text-sm font-semi-bold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-ful px-3 py-1 text-sm font-semi-bold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-ful px-3 py-1 text-sm font-semi-bold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
    </div>
  );
}

export default App;
