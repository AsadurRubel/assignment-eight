import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookList } from "../LocalStorage/saveLocalStorage";
import BarChart from "../BarChart/BarChart";


const PagesToRead = () => {
   const books = useLoaderData();

   const [chart, setChart] = useState([]);

   useEffect(()=>{
    const storedBooksIds = getStoredBookList();
    if(books){
        const bookList = [];
        for(const id of storedBooksIds){
            const book = books.find(book=> book.bookId === id);
            if(book){
                bookList.push(book)
            }
        }
        setChart(bookList)
      console.log(chart)
    }
},[books]);

    return (
        <div className="flex">
            {
                chart.map((chart, inx) => <BarChart key={inx} chart={chart}> </BarChart> )
            }
        </div>
    );
};
PagesToRead.propTypes = {
    books: PropTypes.array.isRequired,
    
  };
export default PagesToRead;
