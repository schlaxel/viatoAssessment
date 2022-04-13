import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
    margin: 10px 0;
    border: solid 1px ${({ theme }) => theme.grey};
    display: flex;
    align-items: center;
`;

const FormRow = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default FormRow;
