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
        console.log(userRating[0])
        console.log(userRating[1])
        console.log(userRating[2])
        console.log(userRating[3])
        event.preventDefault()
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: userRating[0],
                understanding: userRating[1],
                support: userRating[2],
                comments: userRating[3]
            }
        })
            .then(response => {
                history.push('/');
                console.log('response', response)
                clearRedux();
            })
            .catch(error => {
                console.log('error in post', error);
            })
    }

    const clearRedux = () => {
        dispatch({
            type: 'CLEAR_REDUX'
        });
    }

    return (
        <>

        <h2>Your Feedback</h2>
        <p>{userRating[0]}</p>
        <p>{userRating[1]}</p>
        <p>{userRating[2]}</p>
        <p>{userRating[3]}</p>
        <Button variant="outlined" size="large" color="primary" onClick={handleClick}>Submit</Button>
        
        </>
    )



}
export default SubmitFeedback;


