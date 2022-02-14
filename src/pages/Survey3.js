import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Survey3({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    return (
        <div>
            <h1> Hi {UName}! {question}</h1>
            <Card className="survey-button m-2" onClick={ () => {navigate('/great')}}>
                <Card.Body>
                    <Card.Text><i className="bi bi-check-square" style={{fontSize:"25px"}}/></Card.Text>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {navigate('/great')}}>
                <Card.Body>
                    <Card.Text><i className="bi bi-x-square" style={{fontSize:"25px"}}/></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Survey3;