import think from './think.png'
import './Home.css';
import { useHistory } from 'react-router-dom';

function Home(){
    // ⬇ Will send user to a new page
    const history = useHistory();
    const nextPage = (event) => {
        history.push('/questions/QuestionOne');
    }
    
    return(
        <>
            <h3>Click on the image to submit your feedback for the day!</h3>
           
            <img src={think} alt="'Everybody in this country should learn how to program a computer, because it
            teaches you how to think' by Steve Jobs" onClick={nextPage}/>
            
        </>
    )
}

export default Home;