import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    //when a user puts a text in the search bar, "text" is set to that input i.e setText = the input. When it is submitted, searchText func is called with test parsed in. we have a func in App.js that set a "term" with the value of "text" to use it. 


    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto 2xl:max-w-xl 2xl:p-5">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)}
                    // getting new text inputted in the search bar 
                    className="apperance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                    <button className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 border-gray-500 hover:border-gray-800 text-sm border-4 text-white py-1 px-2 rounded">Search</button>                 
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;
