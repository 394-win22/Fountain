import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Survey3({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    return (
        <div>
            <h1> {question}</h1>
        
            <Card className="survey-button m-2" onClick={ () => {navigate('/survey4')}}>
                <Card.Body>
                    <Card.Text>Pain</Card.Text>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {navigate('/survey4')}}>
                <Card.Body>
                    <Card.Text>Stiffness</Card.Text>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {navigate('/survey4')}}>
                <Card.Body>
                    <Card.Text>Other</Card.Text>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {navigate('/aftersurvey',
                       { state: {
                          injury_type: 'none'
                        }
                      }) }}>
                <Card.Body>
                    <Card.Text>None</Card.Text>
                </Card.Body>
            </Card>
            <div className="skip-container"><a href='/home'>Skip</a></div>

        </div>
    );
}

export default Survey3;