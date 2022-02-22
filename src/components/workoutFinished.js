
export function WorkoutFinished() {
    const today = new Date(Date.now());
    return (
        <div>
            <h2> Congratulations!You finished!</h2>
            <button onClick={() => {
                navigator.clipboard.writeText("I finished the fountain workout on " + today.toDateString() + "!")
                alert("copy success!")
            }} >
                copy to clipboard
            </button>
        </div>
    );
}