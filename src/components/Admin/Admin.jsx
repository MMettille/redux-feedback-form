import axios from "axios";
import {useState, useEffect} from "react"
import {useHistory} from 'react-router-dom';

import './Admin.css'
import Button from '@material-ui/core/Button';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Admin(){

    const history = useHistory();
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedback();
    }, [null]);
        
    const getFeedback = () => {
        axios.get("/feedback")
        .then( response => {
            setFeedback(response.data)
        })
        .catch( error => {
            console.log(`We have a server error`, error);
        });
    }

    const handleChange = (event) => {
        history.push('/understanding-graph')
    }

    return(
        <>
        <div className="admin-table-container">
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
        <div>
            <h3>NEW FEATURE COMING SOON!</h3>
            <p>Now in beta testing! Soon you will be able to visually see patterns in your student's feedback.</p>
            <p>Interested in seeing the test product, while our engineers are hunting down bugs? Click the button below!</p>
            <Button variant="outlined" size="large" color="primary" onClick={handleChange}>Submit</Button>
        </div>
        </>
    )
}

export default Admin;