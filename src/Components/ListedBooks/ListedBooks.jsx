import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBookList, getStoredWishList } from '../LocalStorage/saveLocalStorage';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishListBooks from '../WishlistBooks/WishListBooks';

const ListedBooks = () => {
    const books = useLoaderData();
    const [listOfBooks, setListOfBooks] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sortBy, setSortBy] = useState([])
    console.log(sortBy)
    useEffect(()=>{
        const storedBooksIds = getStoredBookList();
        if(books.length > 0){
            const bookList = [];
            for(const id of storedBooksIds){
                const book = books.find(book=> book.bookId === id);
                if(book){
                    bookList.push(book)
                }
            }
            setListOfBooks(bookList)
          
        }
    },[books]);

    useEffect(()=>{
        const storedWishIds = getStoredWishList();
        if(books.length > 0){
            const wishList = [];
            for(const id of storedWishIds){
                const book = books.find(book=> book.bookId === id);
                if(book){
                    wishList.push(book)
                }
            }
            
            setWishList(wishList)
            
        }
    },[books]);

   const handleSortBy = (e) =>{
    const selectedSortField = e.target.value;
    setSortBy(selectedSortField);
    sortBooks(selectedSortField);
    wishBooks(selectedSortField)
   }

   const sortBooks = (field) => {
    const sortedBooks = [...listOfBooks];
    sortedBooks.sort((a, b) => {
        if (a[field] < b[field]){
           return 1; 
        } 
        if (a[field] > b[field]){
           return -1; 
        } 
        return 0;
    });
    setListOfBooks(sortedBooks);
};
   const wishBooks = (field) => {
    const wishBooks = [...wishList].sort((a, b) => {
        if (a[field] < b[field]){
           return 1; 
        } 
        if (a[field] > b[field]){
           return -1; 
        } 
        return 0;
    });
    setWishList(wishBooks);
};



    return (
        <div className="container mx-auto mt-10 p-2">
            <h1 className="text-4xl font-bold mb-4 text-center bg-[#1313130D] p-10 rounded-2xl">Books</h1>

            <div className='flex justify-center my-10'>
                <select onChange={handleSortBy} className="select select-bordered text-center">
                    <option disabled selected>Sort</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of pages</option>
                    <option value="yearOfPublishing">Published year</option>
                </select>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    
                    <div className='flex flex-col gap-5 mt-5'>
                        {
                            listOfBooks.map((book, ind)=> <ReadBooks key={ind} book={book}></ReadBooks> )
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    
                <div className='flex flex-col gap-5 mt-5'>
                        {
                        wishList.map((book, ind) => <WishListBooks key={ind} book={book}></WishListBooks> )
                        }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
