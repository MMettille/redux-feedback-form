import axios from "axios";
import {useState} from "react"

// ⬇ Icons I need for the flag and delete button
import FlagIcon from '@material-ui/icons/Flag';
import FlagOutlineIcon from '@material-ui/icons/FlagOutlined';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// ⬇ Things I need for styling
import Button from '@material-ui/core/Button';

import TableCell from "@material-ui/core/TableCell";


function AdminItem({feedback, getFeedback}) {
   const [flagged, setFlagged] = useState(feedback.flagged);
const handleFlag = (event) => {
    console.log('clicked');
    setFlagged(!flagged)  
}

    return(
        <>
        <TableCell>
            {!flagged ? (
            <FlagOutlineIcon onClick={handleFlag} />
            ) : (
            <FlagIcon onClick={handleFlag} />
            )}
        </TableCell>
        <TableCell>feedback.feeling}</TableCell>
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
