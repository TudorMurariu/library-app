import { useEffect, useState } from "react";
import service from "../services/service";
import Book from "../entities/Book";
import Card from "../components/Card";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    const [books, setBooks] = useState<Book[]>([]);

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

    return(
        <>
            {books.map((book) => {
                return <Card key={book.id} item={book} />
            })}
            <br/> <br/>
            <Button variant="contained" onClick={handleAddBook}>ADD NEW BOOK</Button>
        </>
    );
}

export default MainPage;