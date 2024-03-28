import PropTypes from 'prop-types';
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuStickyNote } from "react-icons/lu";
import { Link } from "react-router-dom";

const WishListBooks = ({ book }) => {
    const {bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book;
    console.log(book)
    return (
        <div>
            <div className="lg:flex bg-base-100  gap-5 border-2">
                <div>
                <figure><img className="rounded-2xl w-full p-2" src={image} alt="Movie" /></figure>
                </div>
                <div className="p-2">
                    <h2 className="text-2xl font-bold mb-2">{bookName}</h2>
                    <p className="mb-1"><span className="font-bold ">By :</span> {author}</p>
                    <div className="lg:flex mb-1">
                    <div className="flex gap-5 mt-2">
                        <p className="flex items-center font-bold">Tag</p>
                        {
                            tags.map((tag, inx) => <div key={inx} >
                                <p className="bg-[#17BE0A0D] p-2 rounded-xl text-[#23BE0A] font-bold">#{tag}</p>
                            </div>)
                        }
                    </div>
                    <p className="flex items-center lg:ml-10 font-bold mt-2"><MdOutlineLocationOn className="mr-2" />Year of Publishing: <span className="ml-1">{yearOfPublishing}</span></p>
                </div>
                    <div className="lg:flex gap-10 mb-2">
                    <p className="flex items-center gap-1"><HiOutlineUsers /><span className="font-bold"> Publisher:</span> {publisher}</p>
                    <p className="flex items-center gap-1 mt-2"><LuStickyNote /><span className="font-bold">Page:</span> {totalPages}</p>
                    </div> <hr />
                    <div className="flex gap-10 mt-2">
                        <p className="text-[#328EFF] bg-[#328EFF26] rounded-full px-5 p-2">Category: {category}</p>
                        <p className="text-[#FFAC33] bg-[#FFAC3326] p-2 rounded-full px-5 ">Rating: {rating}</p>
                        <Link to={`/book-details/${bookId}`}>
                        <button className="bg-[#23BE0A] rounded-full px-5 text-white font-bold">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
WishListBooks.propTypes = {
    book: PropTypes.object.isRequired,
    
  };
export default WishListBooks;