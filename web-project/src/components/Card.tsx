import { Button } from "@mui/material";
import Book from "../entities/Book";
import './Card.css';

interface CardProps {
    item: Book;
}

function Card( {item: { id, title, author, nrOfPages, description, link }} : CardProps) {
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
            <Button variant="contained">EDIT</Button>
        </div>
    );
}

export default Card;