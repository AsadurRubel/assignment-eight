import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBookList, getStoredWishList, saveBookList, saveWishList } from "../LocalStorage/saveLocalStorage";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt);
    const { image, author, bookName, category, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;

    const handleAddToRead = () => {
        const exists = getStoredBookList().includes(bookIdInt);
        if (exists) {
            toast.warning("Book is already in the Read List!");
        } else {
            saveBookList(bookIdInt);
            toast.success("Book added to Read List!");
        }
    };


    const handleAddToWishList = () => {
        const storedWishList = getStoredWishList();
        const storedBookList = getStoredBookList();

        const alreadyRead = storedBookList.includes(bookIdInt);
        const alreadyInWishlist = storedWishList.includes(bookIdInt);

        if (alreadyRead) {
            toast.error("Book is already in the Read List!");
        } else if (alreadyInWishlist) {
            toast.warning("Book is already in the Wishlist!");
        } else {
            saveWishList(bookIdInt);
            toast.info("Book added to Wishlist!");
        }
    };


    return (
        <div className="container mx-auto mt-10">
            <div className="lg:flex items-center  bg-base-100 shadow-xl">
                <div className="w-full lg:w-2/5 p-2">
                    <figure><img className="w-full h-full rounded-2xl" src={image} alt="Movie" /></figure>
                </div>
                <div className="w-full lg:w-3/5 p-2">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-3xl lg:text-4xl">{bookName}</h2>
                        <p><span className="font-bold">By :</span> {author}</p>
                        <hr />
                        <p className="font-bold">{category}</p>
                        <hr />
                        <p><span className="font-bold">Revire :</span>  {review}</p>

                        <div className="flex gap-8">
                            <span className="flex items-center font-bold">Tag</span>
                            {
                                tags.map((tag, inx) => <div key={inx}>

                                    <p className="bg-[#17BE0A0D] p-2 rounded-xl text-[#23BE0A] font-bold">#{tag}</p>
                                </div>)
                            }
                        </div>

                        <hr />

                        <table className="my-5">
                            <tr>
                                <td>Number of Pages:</td>
                                <td className="font-bold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td>Publisher:</td>
                                <td className="font-bold">{publisher}</td>
                            </tr>
                            <tr>
                                <td>Year of Publishing:</td>
                                <td className="font-bold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td>Rating:</td>
                                <td className="font-bold">{rating}</td>
                            </tr>
                        </table>

                        <div>
                            <button
                                onClick={handleAddToRead}
                                className="btn mr-5 font-bold">Read</button>

                            <button
                                onClick={handleAddToWishList}
                                className="btn bg-[#59C6D2] text-white font-bold">Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;