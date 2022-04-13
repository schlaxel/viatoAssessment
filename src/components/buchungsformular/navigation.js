import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 0 20px 0;
`;

const Elem = styled.a`
    margin-right: 20px;
    padding: 5px;
    ${(props) =>
        props.active &&
        `
        border-bottom: solid 2px;
        border-bottom-color: ${props.theme.colors.primary};
        font-weight: 700;
    `}
`;

const Navigation = ({ step }) => {
    return (
        <Wrapper>
            <Elem active={step === 0}>1. Ihre Reiseplanung</Elem>
            <Elem active={step === 1}>2. Verfügbare Zimmer</Elem>
            <Elem active={step === 2}>3. Kontaktdaten</Elem>
        </Wrapper>
    );
};

export default Navigation;
