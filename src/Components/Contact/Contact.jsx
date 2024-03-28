

const Contact = () => {
    return (
        <div className="container mx-auto mt-5">
            <h1 className="text-3xl font-bold mb-5 text-center">Contact Us</h1>
            <p className="w-3/5 text-center mx-auto">
                Thank you for visiting our website. If you have any questions, feedback, or inquiries,
                please feel free to contact us using the information provided below.
            </p>
            <div className="mt-5 border-4 border-red-400 rounded-2xl w-2/5 p-4 mx-auto">
                <h2 className="text-xl font-semibold text-center mb-2">Contact Information:</h2> <hr />
                <ul className=" mt-3 text-center">
                    <p>Email: example@example.com</p>
                    <p>Phone: +1 123 456-7890</p>
                    <p>Address: 123 Main St, City, Country</p>
                </ul>
            </div>
        </div>
    );
};


export default Contact;