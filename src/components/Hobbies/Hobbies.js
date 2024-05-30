const Hobbies = () => {
    const hobbies = [
        'Reading',
        'Writing',
        'Coding',
        'Playing guitar'
    ];

    return (
        <div>
            <h1>My Hobbies</h1>
            <ul>
                {
                    hobbies !== null && hobbies.length > 0 ? 
                    hobbies.map((hobby, index) => {
                        return (
                            <li key={index}>{hobby}</li>
                        );
                    }) : <li>No hobbies found!</li>
                }
            </ul>
        </div>
    );
}

export default Hobbies;