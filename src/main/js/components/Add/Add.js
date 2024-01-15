import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddWrapper, InputWrapper } from './Add.styled';
const client = require('./../../client');

function Add ({type, createObj, onAdd, url})  {

    const [showInput, setShowInput] = useState(false);
    const [text, setText] = useState('');

    const handleInput = (event) => {
        if (event.key === 'Enter') {
            addComp()
        }
    }
    return (
        <AddWrapper onClick={() => setShowInput(true)}>
            {showInput ? (
            <InputWrapper
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyPress={handleInput}
            autoFocus/>
            ) : (
             <div>+</div>
            )}
         </AddWrapper>
    );

    function addComp() {
        const newObject = createObj(text);
        client({method: 'POST',
                        path: '/api/' + url,
                        headers: { Accept: 'application/json', 'Content-Type': 'application/json'},
                        entity: newObject})
                        .then(response => {onAdd(response.entity)});
        setShowInput(false);
        setText('');
    }
}

export default Add;
