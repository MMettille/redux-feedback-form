import axios from "axios";
import {useState} from "react"

// ⬇ Icons I need for the flag and delete button
import TableCell from "@material-ui/core/TableCell";
import FlagIcon from '@material-ui/icons/Flag';
import FlagOutlineIcon from '@material-ui/icons/FlagOutlined';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function AdminItem({feedback, getFeedback}) {

    const [flagged, setFlagged] = useState(feedback.flagged);
    const handleFlag = (feedback) => {
        // ⬇ Setting the flagged variable to the opposite
        setFlagged(!flagged) 
        // ⬇ Declaring the variable as the opposite of what it is currently
        let data = {
            flagged: !flagged
        };
        // ⬇ Axios put request
        axios.put(`/feedback/${feedback.id}`, data)
        .then( response => {
            getFeedback()
        }).catch( error => {
            console.log(`Error in put`, error)
        })
    }

    return(
        <>
        <TableCell>
            {!flagged ? (
            <FlagOutlineIcon onClick={() => handleFlag(feedback)} />
            ) : (
            <FlagIcon onClick={handleFlag} />
            )}
        </TableCell>
        <TableCell>{feedback.feeling}</TableCell>
        <TableCell>{feedback.understanding}</TableCell>
        <TableCell>{feedback.support}</TableCell>
        <TableCell>{feedback.comments}</TableCell>
        <TableCell>
            <IconButton aria-label="delete">
                    <DeleteIcon />
            </IconButton>
        </TableCell>
        </>
    )
}

export default AdminItem
