import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Action(props) {
    return <button className={`action ${props.rotation}`}>
        {/* <FontAwesomeIcon icon={props.icon} /> */}
        {props.label}
    </button>
}