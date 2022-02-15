import React from "react";
import {Card} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const Home = () =>{
    const navigate = useNavigate();
    return (
        <div className="home-wrapper">
            <Card className="home-button" onClick={ () => {
                navigate('/workout');
            }}>
                <Card.Body>
                    <Card.Title>Personalized Workout</Card.Title>
                </Card.Body>
            </Card>
            <Card className="home-button" onClick={ () => {
                    navigate('/survey1');
                    }}>
                <Card.Body>
                    <Card.Title>Update Preference Survey </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home;