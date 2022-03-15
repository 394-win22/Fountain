import React, {useEffect, useState} from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import {fetch_workouts} from "../database/workout";
import {useNavigate} from "react-router-dom";

export function Review() {
    const [workouts, setWorkouts] = useState([]);
    const [gifs, setGifs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch_workouts().then(value => {
            let workOutArr = [];
            let gifArr = [];
            Object.values(value).forEach((val) => {
                workOutArr.push(val["Exercise Name"])
                gifArr.push(val["Image"])
            })
            setWorkouts(workOutArr);
            setGifs(gifArr)
        })
    }, []);

    return (
        <div>
            <div id="preview-back-start">
                <button data-cy="Back" className="previewBack" onClick={() => {
                    navigate('/start/');
                }}>Back</button>
                <span/>
                <button data-cy="Start" className="previewStart" onClick={() => {
                    navigate('/countdown/');
                }}>Start</button>
            </div>
            <div style={{marginLeft: 10+"%"}}>
                <h2 data-cy="Preview">Preview Workout</h2>
                <h6>Total Time: 10 min</h6>
                <h6>Total Workouts: {workouts.length}</h6>
            </div>

            <Container>
                <Row xs={1} md={2}>
                    {Object.keys(workouts).map((value) => {
                        return <Col data-cy="Cards" key={value} style={{width:"48%", margin:"1%"}} >
                            <Card>
                                <Card.Header>{parseInt(value)+1}.{workouts[value]}</Card.Header>
                                <Card.Img style={{height:"10%"}} src= {gifs[value]} alt={"gif"} />
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
    );
}