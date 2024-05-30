const Person = (props) => {
    
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
        </div>
    );
}

Person.defaultProps = {
    name: 'No name found!',
    age: 'No age found!',
    gender: 'Gender not specified!'
}

export default Person;