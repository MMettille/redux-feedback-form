import axios from "axios";
import {useState, useEffect} from "react"
import {useHistory} from 'react-router-dom';
import AdminItem from '../AdminItem/AdminItem';
// ⬇ Things I need for styling
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

    // ⬇ On page load, run the function getFeedback
    useEffect(() => {
        getFeedback();
    }, [null]);
    
    // ⬇ Function to get data from the database
    const getFeedback = () => {
        axios.get("/feedback")
        .then( response => {
            // ⬇ This will set the data from the database to feedback so we can access it here.
            setFeedback(response.data)
        })
        // ⬇ If there is an error, log it!
        .catch( error => {
            console.log(`We have a server error`, error);
        });
    }

    // ⬇ Will send user to a new page, called understanding-graph
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
                            <TableCell>Flag?</TableCell>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedback.map((feedback, i) => (
                            <TableRow key={i}>
                                <AdminItem
                                    value={i}
                                    feedback={feedback}
                                    getFeedback={getFeedback}
                                />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div>
            <h3>NEW FEATURE - JUST LAUNCHED!</h3>
            <p>Now you are able to visually see patterns in your student's feedback.</p>
            <Button variant="outlined" size="large" color="primary" onClick={handleChange}>Feedback Graph</Button>
        </div>
        </>
    )
}

export default Admin;