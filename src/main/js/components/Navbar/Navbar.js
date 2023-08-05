import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavbarWrapper } from './Navbar.styled';
const client = require('./../../client');

function Navbar() {

    const [tabs, setTabs] = useState([]);

    useEffect(() => {
            client({method: 'GET', path: '/api/tabs'}).then(response => {
                setTabs(response.entity._embedded.tabs)});
            });

    return (
         <NavbarWrapper>
            <h1>++++</h1>
         </NavbarWrapper>
    );
};

export default Navbar;
