import {useNavigate} from 'react-router-dom'

const AfterSurvey = () =>{
    const navigate = useNavigate();
    return (
        <div className="as-wrapper">
            <div className="message-body">
                <p>Great, we will make sure we avoid putting too much stress on your...</p>
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