import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useNavigate} from 'react-router-dom';
import {set_feeling} from "../database/users";

function Survey1({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    return (
        <div>
            <h1> Hi {UName}! {question}</h1>
            <Card className="m-2" onClick={ () => {
                    set_feeling("happy", UName, UEmail)
                    navigate('/survey2');
                    }}>
                <Card.Body>
                    <Card.Title><i class="bi bi-emoji-smile"></i></Card.Title>
                </Card.Body>
            </Card>
            <Card className="m-2" onClick={ () => {
                    set_feeling("medium", UName, UEmail)
                    navigate('/survey2');}}>
                <Card.Body>
                    <Card.Title><i class="bi bi-emoji-neutral"></i></Card.Title>
                </Card.Body>
            </Card>
            <Card className="m-2" onClick={ () => {
                    set_feeling("sad", UName, UEmail)
                    navigate('/survey2');}}>
                <Card.Body>
                    <Card.Title><i class="bi bi-emoji-frown"></i></Card.Title>
                </Card.Body>
            </Card>
        </div>
        

    );
}

export default Survey1;