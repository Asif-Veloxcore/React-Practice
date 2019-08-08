import React from 'react';
import '../Person/Person.css';
import Radium from 'radium';

const person = (props) => {
    return (
            <center>
                <div className="box-eff">
                    <h3 className={props.cssClass} onClick={props.click}>I'm a Person From {props.planet} Planet</h3>
                    <h4 className={props.childClassName}>{props.children}</h4>
                    <input type="text" onChange={props.clicked} value={props.planet} />
                    <br />
                </div>
            </center>
            );
}

export default Radium(person);