import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import service from "../services/service";
import { useNavigate } from "react-router-dom";
import User from "../entities/User";

function LogIn() {
    const navigate = useNavigate();
    
    const [userName, setUserName] = useState("")
    const [pasword, setPasword] = useState("")

    async function handleLogIn() {
        console.log("AAA")
        let user: User = await service.getUserByUserName(userName)

        console.log(user)

        if (!user)
            return;

        if(user.userName == userName && user.password == pasword)
            navigate("/home", { state: { user } })
    }

    return(
        <Card variant="outlined">
            <Typography>Log In</Typography>
            <TextField id="outlined-basic" label="userName" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="password" variant="outlined" value={pasword} onChange={(e) => setPasword(e.target.value)}/>
            <br/>
            <Button onClick={handleLogIn}>Log in</Button>
        </Card>
    );
}

export default LogIn;