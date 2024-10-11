
import React from 'react'

function SearchNavbar() {
    return (
        <div className='sticky top-2 mb-2 bg-black'>
            <div className='bg-white px-12'>
                <label className="mt-1 h-fit py-2 px-5 rounded-full border-2 flex items-center gap-2 focus-within:border-blue-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 opacity-50 text-gray-500 focus-within:text-blue-300 transition-colors duration-200">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow pl-2 text-sm focus:outline-none focus:ring-0" placeholder="Search" />
                </label>
            </div>
        </div>
    )
}

export default SearchNavbar