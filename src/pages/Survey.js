import React from "react";

function Survey({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {

    return (
        <div>
            <h1> Hi {UName}! {question}</h1>
        </div>
    );
}

export default Survey;