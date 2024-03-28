import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="container mx-auto p-2">
            <div className="hero  bg-[#E5E7E5] rounded-xl p-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-40">
                    <img src="https://i.ibb.co/GvHQS4G/Dating-Play-Book.png" className="lg:w-3/4  rounded-lg " />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold playfair mb-5 lg:mb-10 leading-normal">Books to freshen up your bookshelf</h1>
                        
                        <Link to="/listedBooks">
                        <button className="btn bg-[#23BE0A] text-white">View The List</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;