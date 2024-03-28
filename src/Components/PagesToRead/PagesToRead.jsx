
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookList } from "../LocalStorage/saveLocalStorage";
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



























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
    <BarChart
      width={500}
      height={300}
      data={chart}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis dataKey="totalPages" />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chart.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );

    }
export default PagesToRead;
