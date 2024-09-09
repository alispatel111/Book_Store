import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data); // Log the response from the server
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
          <div className="mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
            <h1 className="text-2xl md:text-4xl dark:bg-slate-900 dark:text-white">
              We're delighted to have you
              <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="mt-12 dark:bg-slate-900 dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <a href="/">
              <button className="bg-pink-500 mt-2 text-white rounded-xl px-4 py-2 hover:bg-pink-800 duration-300">
                Back
              </button>
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.length > 0 ? (
              book.map((item) => (
                <Cards key={item.id || item._id} item={item} /> // Ensure a unique key
              ))
            ) : (
              <p>No books available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
