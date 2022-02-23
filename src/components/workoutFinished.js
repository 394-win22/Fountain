
export function WorkoutFinished() {
    const today = new Date(Date.now());
    return (
        <div className="workout-finished">
            <h2 className="workout-finished-header"> Congratulations! You finished!</h2>
            <button type="button" className="btn btn-outline-dark"  onClick={() => {
                navigator.clipboard.writeText("I finished the fountain workout on " + today.toDateString() + "! https://fountain-37243.web.app")
                alert("copy success!")
            }} >
                copy to clipboard
            </button>
            <div><a href="https://www.facebook.com/groups/fountainfit/"> Share on Fountain Facebook </a></div>
        </div>
    );
}