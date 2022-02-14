import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useNavigate} from 'react-router-dom';

function Survey2({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    return (
        <div>
            <h1>You're feeling good! </h1>
            <h1>{question}</h1>
            <Card className="survey-button m-2" onClick={ () => {
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title> <p>Indiividual, Easy</p> </Card.Title>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title><p>Indiividual, Challenge</p></Card.Title>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title><p>Group Class</p></Card.Title>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title><p>1 v 1 w/trainer </p></Card.Title>
                </Card.Body>
            </Card>
        </div>
        

    );
}

export default Survey2;