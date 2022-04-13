import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg1};
    padding: 10px 20px;
    cursor: pointer;
    ${(props) =>
        props.light &&
        `
        background: none;
        color: ${props.theme.colors.grey};
    `}
    ${(props) =>
        props.grey &&
        `
        background: ${props.theme.colors.grey};
    `}
    ${(props) =>
        props.disabled &&
        `
        opacity: 0.5;
        cursor: auto;
    `}
`;

const Button = ({ children, light, onClick, grey, disabled }) => {
    const onButtonClick = () => {
        if (!disabled) {
            onClick();
        }
    };

    return (
        <Wrapper
            onClick={() => onButtonClick()}
            disabled={disabled}
            light={light}
            grey={grey}
        >
            {children}
        </Wrapper>
    );
};

export default Button;
