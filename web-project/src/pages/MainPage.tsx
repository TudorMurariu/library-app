import { useEffect, useState } from "react";
import service from "../services/service";
import Book from "../entities/Book";
import Card from "../components/Card";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    const [books, setBooks] = useState<Book[]>([]);
    let search = ""

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const fetchedBooks = await service.getBooks();
            setBooks(fetchedBooks);
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
    
        fetchBooks();
      }, []);

      function handleAddBook() {
        navigate("/new")
      }

      function handleSearch() {
        const fetchBooks = async () => {
            try {
              const fetchedBooks = await service.getBooks();
              setBooks(fetchedBooks);
            } catch (error) {
              console.error('Error fetching books:', error);
            }
          };
      
          fetchBooks();
      }

    return(
        <>
            <TextField id="standard-basic" label="Standard" variant="standard" value={search} onChange={handleSearch}/>
            <br/>
            {books.map((book) => {
                return <Card key={book.id} item={book} />
            })}
            <br/> <br/>
            <Button variant="contained" onClick={handleAddBook}>ADD NEW BOOK</Button>
        </>
    );
}

export default MainPage;