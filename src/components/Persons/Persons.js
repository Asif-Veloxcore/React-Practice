import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
    props.persons.map((person, index) => {
        return <Person
            click={() => props.clicked1(index)}
            cssClass={person.cssClass}
            planet={person.planet}
            key={person.id}
            clicked={(event) => props.changed1(event, person.id)}
        />
    }
    );

export default persons;

