import React, { Component } from "react";
import * as Survey from "survey-react";
import 'bootstrap/dist/css/bootstrap.css';
import "survey-react/survey.css";

Survey.StylesManager.applyTheme("bootstrap");

class SurveyComponent extends Component {
    constructor() {
        super();
    }
    render() {
        const json = {
            title: "Software developer survey.",
            pages: [
                {
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "feeling",
                            "title": "How are you feeling?",
                            "isRequired": true,
                            "choices": ["Good", "Normal", "Bad"]
                        }
                    ]
                },
                {
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "feeling",
                            "title": "What kind of workout are you looking for?",
                            "isRequired": true,
                            "choices": ["Individual, Easy", "Individual, Challenge", "Group Class", "1 v 1 w/trainer"]
                        }
                    ]
                },
                {
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "feeling",
                            "title": "Before we begin, is there any injuries or limitations do you have?",
                            "isRequired": true,
                            "choices": ["Yes", "No"]
                        }
                    ]
                }]
        };
        const survey = new Survey.Model(json);

        return (
            <Survey.Survey model={survey}/>
        );
    }
}

export default SurveyComponent;
