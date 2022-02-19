import React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import Select from "react-dropdown-select";
import {useEffect, useState} from 'react';
import {set_injury_location} from "../database/users";

function Survey4({ user, UEmail, setUEmail, UName, setUName, setUid, question}) {
    const navigate = useNavigate();
    const options = [
        { value: 'neck', label: 'Neck' },
        { value: 'shoulders', label: 'Shoulders' },
        { value: 'back', label: 'Back' },
        { value: 'hips', label: 'Hips' },
        { value: 'knees', label: 'Knees' }
      ]
    const [injury, setInjury] = useState("");
    return (
        <div>
            <div className="survey-heading"><h1> {question}</h1></div>
        
            <Select options={options} onChange={value => {setInjury(value[0].value)}} />
            <button type="button" className="btn btn-primary" onClick={ () => {
                if(injury !== ''){
                    set_injury_location(injury, UName, UEmail);
                    navigate('/aftersurvey',
                       { state: {
                          injury_location: injury
                        }
                      })
                    
                }
                else{
                    set_injury_location('none', UName, UEmail);
                    navigate('/aftersurvey',
                       { state: {
                          injury_location: 'none'
                        }
                      })
                   
                }
            }}>Continue</button>
                    

        </div>
        
    );
}

export default Survey4;