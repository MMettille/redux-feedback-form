import axios from "axios";
import {useState, useEffect} from "react"
import {useHistory} from 'react-router-dom';

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
// ⬇ Icons I need for the flag and delete button
import FlagIcon from '@material-ui/icons/Flag';
import FlagOutlineIcon from '@material-ui/icons/FlagOutlined';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

    const [flagged, setFlagged] = useState(false);
    const handleFlag = (event) => {
        console.log('clicked');
        setFlagged(!flagged)
        
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
                        {feedback.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell >
                                {!flagged ? (
                                    <FlagOutlineIcon onClick={handleFlag} />
                                ) : (
                                    <FlagIcon onClick={handleFlag} />
                                )}
                                <IconButton aria-label="flag">
                                    <FlagIcon onClick={handleFlag}/>
                                </IconButton>
                            </TableCell>
                            <TableCell>{item.feeling}</TableCell>
                            <TableCell>{item.understanding}</TableCell>
                            <TableCell>{item.support}</TableCell>
                            <TableCell>{item.comments}</TableCell>
                            <TableCell>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
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