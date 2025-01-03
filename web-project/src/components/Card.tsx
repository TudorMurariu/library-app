import { Button } from "@mui/material";
import Book from "../entities/Book";
import './Card.css';
import { useNavigate } from "react-router-dom";
import service from "../services/service";

interface CardProps {
    item: Book;
    func: () => void;
}

function Card( {item: { id, title, author, nrOfPages, description, link }, func} : CardProps) {
    const navigate = useNavigate();

    function handleUpdateBook() {
        navigate("/new", { state: { book: {id, title, author, nrOfPages, description, link} } })
    }

    async function handleDeleteBook() {
        await service.deleteBook(id!)
        func()
    }

    return(
        <div className="card" key={id}>
            <h2 className='title'>
                <b>Title</b>: {title}
            </h2>
            <p className='author'>
                <b>Author:</b> {author}
            </p>
            <p className='nrOfPages'>
                <b>Number of pages:</b> {nrOfPages}
            </p>
            <p className='description'>
                <b>Description:</b> {description}
            </p>
            { link && 
            <p className='link'>
                <b>Link:</b> {link}
            </p> 
            }
            <Button variant="contained" onClick={handleUpdateBook}>EDIT</Button>
            <Button variant="contained" color="error" onClick={handleDeleteBook}>DELETE</Button>
        </div>
    );
}

export default Card;