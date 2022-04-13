import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 20px 0 0;
`;

const Input = styled.input`
    background: ${({ theme }) => theme.colors.bg1};
    border: solid 1px ${({ theme }) => theme.colors.grey};
    padding: 5px 10px;
    ${(props) =>
        props.small &&
        `
        width: 70px;
    `}
`;

const Label = styled.label`
    margin-right: 20px;
`;

const TextInput = ({ label, small, value, onChange }) => {
    return (
        <Wrapper>
            {label && <Label htmlFor="textinput">{label}</Label>}
            <Input
                small={small}
                name="textinput"
                value={value}
                type="text"
                onChange={onChange}
            />
        </Wrapper>
    );
};

export default TextInput;
