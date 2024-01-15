import React from 'react';
import PropTypes from 'prop-types';
import { TabWrapper } from './Tab.styled';

function Tab({tab}) {

    return (
         <TabWrapper>
            <div>{tab.title}</div>
         </TabWrapper>
    );
};

export default Tab;
