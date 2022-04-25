function Exercise({ good = "Great", bad = "Not Great" }) {
    return (
        <div>
            {/* 
        <h1>Great</h1>
        <h1>Not Great</h1>
         */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
        </div>
    );
}
export default Exercise;