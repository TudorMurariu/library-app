import { useEffect, useState } from "react";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import service from "../services/service";

function AddBookPage() {
    const location = useLocation();
    const { book } = location.state || {};
    const navigate = useNavigate();

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("")

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [nrOfPages, setNrOfPages] = useState(0)
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {
        console.log(book)
        if(book === undefined)
            return

        setTitle(book.title)
        setAuthor(book.author)
        setNrOfPages(book.nrOfPages)
        setDescription(book.description)
        setLink(book.link)
    }, []);

    function handleCancel() {
        navigate("/home")
    }

    function handleDone() {
        if(!title) {
            setAlertContent("Title can't be empty!")
            setAlert(true)
            return
        }

        if(!author) {
            setAlertContent("Author can't be empty!")
            setAlert(true)
            return
        }

        if(!description) {
            setAlertContent("Description can't be empty!")
            setAlert(true)
            return
        }

        if(book)
            service.updateBook(book.id, { id: book.id, title: title, author: author, nrOfPages: nrOfPages, description:description, link:link})
        else 
            service.createBook({ id:undefined, title: title, author: author, nrOfPages: nrOfPages, description:description, link:link })
        
        navigate("/home")
    }

    return(
        <>
            {alert ? <Alert severity='error' onClose={() => {setAlert(false)}}>{alertContent}</Alert> : <></> }

            <Typography>{book === undefined ? "Add" : "Update"} Book</Typography>
            <TextField id="outlined-basic" label="title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="author" variant="outlined" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="nrOfPages" type="number" variant="outlined" value={nrOfPages} onChange={(e) => setNrOfPages(Number(e.target.value))}/>
            <br/>
            <TextField id="outlined-basic" label="description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="link" variant="outlined" value={link} onChange={(e) => setLink(e.target.value)}/>
            <br/>
            <Button variant="contained" color="success" onClick={handleDone}>DONE</Button>
            <Button variant="contained" color="error" onClick={handleCancel}>Cancel</Button>
        </>
    )
}

export default AddBookPage;