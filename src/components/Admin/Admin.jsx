import axios from "axios";
import {useState, useEffect} from "react"

import './Admin.css'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Admin(){

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedback();
    })
        
    const getFeedback = () => {
        axios.get("/feedback")
        .then( (response) => {
            setFeedback(response.data)
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });
    }

    return(
        <div className="table-container">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedback.map((item, i) => (
                        <TableRow key={i}>
                        <TableCell>{item.feeling}</TableCell>
                        <TableCell>{item.understanding}</TableCell>
                        <TableCell>{item.support}</TableCell>
                        <TableCell>{item.comments}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
    )
}

export default Admin;