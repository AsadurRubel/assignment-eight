import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="text-7xl font-bold">Opps!!</h1>
            <p className="text-xl font-bold my-5">Sorry, an unexpected error has occurred.</p>
            <div className="mt-10 text-xl font-bold">
            <Link to='/'><button className="btn text-white font-bold sans bg-[#23BE0A]">Back To Home</button></Link>
            </div>
        </div>

    );
};

export default ErrorPage;