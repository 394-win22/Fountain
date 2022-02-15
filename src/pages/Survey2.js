import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useNavigate} from 'react-router-dom';
import {set_exercise_type} from "../database/users";

function Survey2({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="survey-heading"><h1>{question}</h1></div>
            <Card className="survey-button m-2" onClick={ () => {
                    set_exercise_type("individual easy", UName, UEmail)
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title> <p>Individual, Easy</p> </Card.Title>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                    set_exercise_type("individual chalenge", UName, UEmail)
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title><p>Individual, Challenge</p></Card.Title>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                    set_exercise_type("group class", UName, UEmail)
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title><p>Group Class</p></Card.Title>
                </Card.Body>
            </Card>
            <Card className="survey-button m-2" onClick={ () => {
                    set_exercise_type("trainer", UName, UEmail)
                    navigate('/survey3');}}>
                <Card.Body>
                    <Card.Title><p>1 v 1 w/trainer </p></Card.Title>
                </Card.Body>
            </Card>
        </div>
        

    );
}

export default Survey2;