import { useEffect, useState } from "react";
import "./App.css";
import AddNewBook from "./components/AddNewBook";
import Header from "./components/Header";
import BookCards from "./components/BookCards";
import Filter from "./components/Filter";

function App() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [sortMethod, setSortMethod] = useState("");
    const [displayForm, setDisplayForm] = useState(false);

    function addBooks(book) {
        setBooks((prev) => [...prev, book]);
    }

    useEffect(() => {
        const bookData = [...books];
        if (sortMethod) {
            if (sortMethod === "low-high") {
                const data = bookData.sort((a, b) => a.price - b.price)
                setFilteredBooks(data)
                console.log(filteredBooks)
            }
            else if (sortMethod === "high-low") {
                const data = bookData.sort((a, b) => b.price - a.price);
                setFilteredBooks(data);
            }
            else if (sortMethod === "name") {
                const data = bookData.sort((a, b) => a.title - b.title);
                setFilteredBooks(data);
            }
        }
    }, [books, sortMethod])

    return (
        <>
            <Header setDisplayForm={setDisplayForm} />
            {displayForm && (
                <AddNewBook
                    closeForm={() => setDisplayForm(false)}
                    addBook={addBooks}
                />
            )}
            <Filter setSortMethod={setSortMethod} sortMethod={sortMethod} />
            {
                books.map((book, index) => (
                    <BookCards key={index+1} book={book} />
                ))
            }
        </>
    );
}

export default App;
