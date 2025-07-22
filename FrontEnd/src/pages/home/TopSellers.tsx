import React, { use, useEffect, useState } from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {
    const [books, setBooks] = useState([]);
     const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
    
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, []);
     

     const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())
     console.log(books.category)

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/* category filtering */}
            <div className='mb-8 flex items-center'>
                <select
                     onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#e2d6e8] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                
                       {
                   filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            {/* <div className='bg-white p-4 rounded-lg shadow-md'>
                                <img src={book.image} alt={book.title} className='w-full h-64 object-cover mb-4 rounded-md' />
                                <h3 className='text-lg font-semibold mb-2'>{book.title}</h3>
                                <p className='text-gray-600 mb-2'>by {book.author}</p>
                                <p className='text-gray-800 font-bold'>${book.price}</p>
                            </div> */}
                        </SwiperSlide>
                    ))
                }
                
                



            </Swiper>


        </div>
    )
}

export default TopSellers