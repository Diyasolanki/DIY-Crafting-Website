import React, { useState, useEffect } from 'react';

const CheckOut = () => {
    const [msg, setMsg] = useState('');
    const [formdata, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formdata');
        return savedData ? JSON.parse(savedData) : [];
    });

    const [userdata, setUserData] = useState({
        username: '',
        email: '',
        contact: '',
        address: '',
    });

    useEffect(() => {
        localStorage.setItem('formdata', JSON.stringify(formdata));
    }, [formdata]);

    const handleuserdata = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData((prev) => [...prev, userdata]);
        setUserData({ username: '', email: '', contact: '', address: '' });
        setMsg('Your Information is Saved successfully');
        setTimeout(() => setMsg(''), 3000);
    };

    return (
        <>
            <h1 className="text-xl bg-violet-800 text-white mt-4 w-11/12 sm:w-80 mx-auto p-2 text-center rounded">
                CheckOut Form
            </h1>
            <form
                onSubmit={handleSubmit}
                className="m-5 p-6 border-2 border-gray-300 rounded-lg shadow-lg max-w-lg w-11/12 sm:w-full mx-auto space-y-4 bg-white"
            >
                <div>
                    <label
                        htmlFor="username"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Enter Your Name:
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                        placeholder="Enter Your Name"
                        value={userdata.username}
                        onChange={handleuserdata}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Enter Your Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                        placeholder="Enter Your Email"
                        value={userdata.email}
                        onChange={handleuserdata}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Enter Your Number:
                    </label>
                    <input
                        type="number"
                        id="contact"
                        name="contact"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                        placeholder="Enter Your Number"
                        value={userdata.contact}
                        onChange={handleuserdata}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="address"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Enter Your Address:
                    </label>
                    <textarea
                        name="address"
                        id="address"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                        placeholder="Enter Your Address"
                        value={userdata.address}
                        onChange={handleuserdata}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-violet-800 text-white py-2 px-4 rounded-md text-lg hover:bg-violet-900 transition"
                >
                    Submit
                </button>
            </form>

            <div>
                {msg && (
                    <div className="fixed top-5 left-5 right-5 mx-auto max-w-xs sm:max-w-sm bg-green-500 text-white px-4 py-2 rounded shadow">
                        {msg}
                    </div>
                )}
            </div>
        </>
    );
};

export default CheckOut;
