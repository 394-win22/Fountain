import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import {set_injury_type} from "../database/users";

function Survey3({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="survey-heading"><h1> {question}</h1></div>
        
            <Card className="survey-button m-2" onClick={ () => {
                set_injury_type("pain", UName, UEmail);
                navigate('/survey4')}}>
                <Card.Body>
                    <Card.Text>Pain</Card.Text>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                set_injury_type("stiffness", UName, UEmail);
                navigate('/survey4')}}>
                <Card.Body>
                    <Card.Text>Stiffness</Card.Text>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                set_injury_type("other", UName, UEmail);
                navigate('/survey4')}}>
                <Card.Body>
                    <Card.Text>Other</Card.Text>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                set_injury_type("none", UName, UEmail);
                navigate('/aftersurvey',
                       { state: {
                          injury_location: 'none'
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