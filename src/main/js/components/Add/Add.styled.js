import styled from 'styled-components';

export const AddWrapper = styled.div`
    display:inline-block;
    width:1rem;
    height:1rem;

    background:
        linear-gradient(#fff 0 0),
        linear-gradient(#fff 0 0),
        #000;
      background-position:center;
      background-size: 50% 2px,2px 50%; /*thickness = 2px, length = 50% (25px)*/
      background-repeat:no-repeat;
      cursor: pointer;
`;

export const InputWrapper = styled.input`
`;
