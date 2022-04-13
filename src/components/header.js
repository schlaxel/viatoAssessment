import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const H = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`;

const Grey = styled.span`
    color: ${({ theme }) => theme.colors.grey};
`;

const Elem = styled.div`
    display: flex;
    align-items: flex-end;
`;

const Platzhalter = styled.p``;

const Header = () => {
    return (
        <Wrapper>
            <Elem>
                <H>
                    Viato Testhotel <Grey>online buchen</Grey>
                </H>
            </Elem>
            <Elem>
                <Platzhalter>Kontakt / Hilfe</Platzhalter>
            </Elem>
        </Wrapper>
    );
};

export default Header;
