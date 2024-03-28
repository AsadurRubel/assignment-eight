import { useEffect, useState } from "react";
import AllBooks from "../AllBooks/AllBooks";


const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('listOfBooks.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])

    return (
        <div className="container mx-auto">
           <h1 className="text-3xl lg:text-6xl font-bold text-center mt-10">Books</h1>
        <div className="grid lg:grid-cols-3 gap-8 mt-10 p-2">
        {
            books.map(book=> <AllBooks key={book.id} book={book} ></AllBooks>)
        }

        </div>
        
        </div>
    );
};

export default BooksList;