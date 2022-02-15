import ReactPlayer from "react-player"

const Workout = () =>{
    return (
        <div className="workout-wrapper">
            <div className="ytvideo">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=i3PYS_jsA1c"
                />
            </div>
        </div>
    )
}

export default Workout;