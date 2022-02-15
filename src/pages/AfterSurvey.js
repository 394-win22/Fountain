import {useNavigate, useLocation} from 'react-router-dom'

function AfterSurvey({ route, navigation }) {
    const navigate = useNavigate();
    
    const {state} = useLocation();
    console.log(state);
    const injury = state.injury_location;
    console.log(injury);
    return (
        <div className="as-wrapper">
            <div className="message-body">
                {injury == 'none' ? <p>Great, your personalized workout is ready. Head to the home page to view it.</p> :<p>Great, we will make sure we avoid putting too much stress on your {injury}! Your personalized workout is ready. Head to the home page to view it. </p>}
            </div>
            <div className="message-btn">
                <button type="button" className="btn btn-primary" onClick={ () => {
                    navigate('/home');
                    
                    }}>Go to Home Page</button>
            </div>
        </div>
    )
}

export default AfterSurvey;