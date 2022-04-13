import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'styled-icons/fa-regular/';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.bg1};
    border: solid 1px ${({ theme }) => theme.colors.grey};
    display: inline-block;
`;

const Input = styled.input`
    border: 0;
    padding: 10px;
`;

const Label = styled.label`
    padding: 0 10px;
`;

const InputIcon = ({ placeholder, value, onChange }) => {
    return (
        <Wrapper>
            <Input
                onChange={onChange}
                placeholder={placeholder}
                type="text"
                name="input-icon"
                value={value}
            />
            <Label htmlFor="input-icon">
                <Calendar size={20} color="#333" />
            </Label>
        </Wrapper>
    );
};

export default InputIcon;
