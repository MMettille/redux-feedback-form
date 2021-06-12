import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function SubmitFeedback(){

    const history = useHistory();
    const dispatch = useDispatch();

    // reducers
    const userRating = useSelector(store => store.userRating);
    // const understanding = useSelector(store => store.understandingRating);
    // const support = useSelector(store => store.supportedRating);
    // const comments = useSelector(store => store.comments);

    const handleClick = (event) => {
        console.log(userRating)
        // event.preventDefault()
        // axios({
        //     method: 'POST',
        //     url: '/feedback',
        //     data: {
        //         feeling: feeling,
        //         understanding: understanding,
        //         support: support,
        //         comments: comments
        //     }
        // })
        //     .then(response => {
        //         history.push('/');
        //         console.log('response', response)
        //         clearRedux();
        //     })
        //     .catch(error => {
        //         console.log('error in post', error);
        //     })
    }

    // const clearRedux = () => {
    //     dispatch({
    //         type: 'REMOVE_FEELING',
    //         type: 'REMOVE_UNDERSTANDING',
    //         type: 'REMOVE_SUPPORT',
    //         type: 'REMOVE_COMMENTS',
    //     });
    // }

    return (
        <>

        {/* <h2>Your Feedback</h2>
        <p>{feeling}</p>
        {/* <p>{understanding}</p> */}
        {/* <p>{support}</p>
        <p>{comments}</p>
        <Button variant="outlined" size="large" color="primary" onClick={handleClick}>Submit</Button>
         */}
        </>
    )



}
export default SubmitFeedback;


