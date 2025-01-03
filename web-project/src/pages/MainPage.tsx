import { useEffect, useState } from "react";
import service from "../services/service";
import Book from "../entities/Book";
import Card from "../components/Card";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    const [books, setBooks] = useState<Book[]>([]);
    const [search, setSearch] = useState("")

    useEffect(() => {  
        fetchBooks();
      }, []);

    const fetchBooks = async () => {
        try {
          const fetchedBooks = await service.getBooks();
          setBooks(fetchedBooks);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
    };

    function handleAddBook() {
        navigate("/new")
    }

    async function handleSearch(title: string) {
      setSearch(title)

      if(title.trim() === "") {
        await fetchBooks();
        return
      }

      try {
        const fetchedBooks = await service.filterBooksByTitle(title);
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }

    return(
        <>
            <TextField id="standard-basic" label="Search book by title" variant="standard" value={search} onChange={(e) => handleSearch(e.target.value)}/>
            <br/>
            {books.map((book) => {
                return <Card key={book.id} item={book} func={fetchBooks} />
            })}
            <br/> <br/>
            <Button variant="contained" onClick={handleAddBook}>ADD NEW BOOK</Button>
        </>
    );
}

export default MainPage;