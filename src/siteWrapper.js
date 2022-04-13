import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle`
    /* reset CSS */
    ${reset}

    /* other styles */
    html {
        font-family: ${({ theme }) => theme.fonts.normal};
        color: ${({ theme }) => theme.colors.black};
    }
    h1, h2, h3, h4, h5 {
        font-family: ${({ theme }) => theme.fonts.bold};
        font-weight: 500;
    }
    h1 {
        font-size: 2.5em;
    }
`;

const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    border: solid 1px ${({ theme }) => theme.colors.grey};
    flex: 1;
`;

const OuterWrapper = styled.div`
    min-height: 100vh;
    display: flex;
`;

const SiteWrapper = ({ children }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <OuterWrapper>
            <Wrapper>{children}</Wrapper>
        </OuterWrapper>
    </ThemeProvider>
);

export default SiteWrapper;
