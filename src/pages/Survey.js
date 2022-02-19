import {useEffect, useState} from "react";
import {Question} from "../components/question";
import {useNavigate} from "react-router-dom";

const questions = {
    10: {
        "question": "How are you feeling today?",
        "options":[
            {"txt": "Good", "value":21},
            {"txt": "Okay", "value":21},
            {"txt": "Not great", "value":21},
            {"txt": "Skip", "value":21},
        ]
    },

    21: {
        "question": "Before we begin, any new injuries or limitations you'd like to discuss?",
        "options":[
            {"txt": "Pain", "value":31},
            {"txt": "Stiffness", "value":22},
            {"txt": "Something else", "value":33},
        ]
    },

    31: {
        "question": "Where are you feeling pain?",
        "options":[
            {"txt": "one", "value":1},
            {"txt": "two", "value":2},
            {"txt": "three", "value":3},
        ]
    },

    32: {
        "question": "Where are you feeling stiff?",
        "options":[
            {"txt": "one", "value":1},
            {"txt": "two", "value":2},
            {"txt": "three", "value":3},
        ]
    },

    33: {
        "question": "Is it one of the following?",
        "options":[
            {"txt": "one", "value":1},
            {"txt": "two", "value":2},
            {"txt": "three", "value":3},
        ]
    }
}

export function Survey() {
    const navigate = useNavigate();
    const [step, setStep] = useState(10);
    const [answer, setAnswer] = useState(10);

    useEffect(() => {
        setStep(answer)
    }, [answer])

    return (
        <div>
            { questions[step] ? <Question question={questions[step].question}
                                        options={questions[step].options}
                                        setAnswer={setAnswer}/>
                : (step)
            }
        </div>
    );
}

