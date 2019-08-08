import React from 'react';
import '../Cockpits/Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    if(props.person.length <= 2)
    {  classes.push('red'); }
    if(props.person.length <= 1)
    {  classes.push('another-eff'); }

    return(
        <div>
             <h1 className={classes.join(' ')}>Hello I'm Asif</h1>
            <button
             onClick={props.clicked}
             className='button'>
                 Click Me
            </button> 
        </div>
    )

}

export default cockpit;