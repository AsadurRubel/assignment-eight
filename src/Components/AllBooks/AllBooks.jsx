import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const AllBooks = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;
  
    return (

        <Link to={`/book-details/${bookId}`}>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img className="w-full h-96" src={image} alt="Book" /></figure>
                <div className="card-body">
                    <div className="flex gap-10">
                        {
                            tags.map((tag, inx) => <div key={inx} >
                                <p className="bg-[#17BE0A0D] p-2 rounded-xl text-[#23BE0A] font-bold">{tag}</p>
                            </div>)
                        }
                    </div>

                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <hr />
                    <div className="flex justify-between w-full">
                        <div>
                            <p>{category}</p>
                        </div>
                        <div>
                            <p className="flex gap-1 items-center">{rating} <IoIosStarOutline /></p>
                        </div>
                    </div>

                </div>
            </div>
        </Link>

    );
};
AllBooks.propTypes = {
    book: PropTypes.object.isRequired,
    
  };
  
export default AllBooks;