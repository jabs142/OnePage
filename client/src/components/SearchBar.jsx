// import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="search-form flex justify-center py-10">
            <form className="search-form">
                <input className="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter book title"></input>

                <button type="submit" className="search-button p-4">
                    <FaSearch size={20} />
                </button>
            </form>
        </div>
    )
}

export default SearchBar

