import {Card} from "react-bootstrap";
import React from "react";

export function Question({ UName, question, options, setAnswer }) {
    return (
        <div>
            <h1> Hi {UName}! {question}</h1>
            { Object.values(options).map((option =>
                    <Card className="survey-button" onClick={() => {
                        setAnswer(option.value)
                    }}>
                        <Card.Body>
                            <Card.Text>{option.txt}</Card.Text>
                        </Card.Body>
                    </Card>
            ))}
            {/*<div className="skip-container"><a href='/home'>Skip Survey</a></div>*/}
        </div>
    );
}