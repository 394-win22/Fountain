import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import Select from "react-dropdown-select";
import {useEffect, useState} from 'react';

function Survey4({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    const options = [
        { value: 'neck', label: 'Neck' },
        { value: 'shoulder', label: 'Shoulders' },
        { value: 'back', label: 'Back' },
        { value: 'hips', label: 'Hips' },
        { value: 'knees', label: 'Knees' }
      ]
    const [injury, setInjury] = useState("");
    return (
        <div>
            <h1> {question}</h1>
        
            <Select options={options} onChange={value => {setInjury(value[0].value)}} />
            <button type="button" className="btn btn-primary" onClick={ () => {
                    navigate('/aftersurvey',
                       { state: {
                          injury_type: injury
                        }
                      })
                    }}>Continue</button>

        </div>
        
    );
}

export default Survey4;