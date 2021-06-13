import axios from "axios";
import {useState} from "react"
import swal from 'sweetalert';
// ⬇ Icons I need for the flag and delete button
import TableCell from "@material-ui/core/TableCell";
import FlagIcon from '@material-ui/icons/Flag';
import FlagOutlineIcon from '@material-ui/icons/FlagOutlined';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function AdminItem({feedback, getFeedback}) {

    const [flagged, setFlagged] = useState(feedback.flagged);
    
    const handleFlag = (feedback) => {
        console.log(feedback)
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

    const handleDelete=() => {
        console.log('clicked delete')
        console.log(feedback)
        // ⬇ 
                axios.delete(`/feedback/delete/${feedback.id}`)
            .then( response => {
                // Confirms to the user that it was deleted
                swal(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                )
                // ⬇ Will refresh the DOM with the updated database containing the new information
                getFeedback();
                }).catch( err => {
                    alert(`There was a problem deleting. Please try again later.`)
                });
} // end deleteTask

    return(
        <>
        <TableCell>
            <IconButton aria-label="flag" onClick={() => handleFlag(feedback)}>
                {!flagged ? (
                <FlagOutlineIcon />
                ) : (
                <FlagIcon />
                )}
            </IconButton>
        </TableCell>
        <TableCell>{feedback.feeling}</TableCell>
        <TableCell>{feedback.understanding}</TableCell>
        <TableCell>{feedback.support}</TableCell>
        <TableCell>{feedback.comments}</TableCell>
        <TableCell>
            <IconButton aria-label="delete"onClick={() => handleDelete(feedback)}>
                    <DeleteIcon />
            </IconButton>
        </TableCell>
        </>
    )
}

export default AdminItem
