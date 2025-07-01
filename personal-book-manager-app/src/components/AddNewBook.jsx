import React, { useState } from "react";

const AddNewBook = ( { closeForm, addBook }) => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        price: "",
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        addBook(formData)
        setFormData({title: "", author: "", genre: "", price: ""})
        closeForm();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-150 h-100 bg-yellow-200 p-5">
                <div className="flex flex-row gap-3">
                    <label>Title:</label>
                    <input type="text" placeholder="Enter Book Title" onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} />
                </div>
                <div className="flex flex-row gap-3">
                    <label>Author:</label>
                    <input type="text" placeholder="Enter Author's Name" onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))} />
                </div>
                <div className="flex flex-row gap-3">
                    <label>Genre:</label>
                    <input type="text" placeholder="Enter Genre" onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))} />
                </div>
                <div className="flex flex-row gap-3">
                    <label>Price:</label>
                    <input type="number" placeholder="Enter Price from Marketplace" onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewBook;
