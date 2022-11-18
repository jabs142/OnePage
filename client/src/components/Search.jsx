import React from 'react'
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function Search() {
    return (
        <div className="bg-gray-700 min-h-screen ">
            <NavBar />
            <div>

                <h1
                    className="text-gray-300 pt-40 text-6xl font-serif flex justify-center"> Start your reading journey</h1>
                <h1
                    className="text-gray-300 py-8 text-6xl font-bold font-serif flex justify-center"> One page at a time </h1>

                <SearchBar />

            </div>


        </div >
    )
}

export default Search
