import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import config from '../../gatsby-config';
import { GlobalStyle } from '../css/global';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

function Template({ children }) {
    const meta = config.siteMetadata;

    // This "styled" component has to remain
    // inside *Template* otherwise page navigations
    // would not trigger a scroll to top
    const Main = styled.div`
        flex: 1;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    `;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Root>
            <Header />
            <Main>
                {children}
                <Footer twitterHandle={meta.twitterHandle} />
            </Main>
        </Root>
      </React.Fragment>
    );
}

Template.propTypes = {
    // This is not a typo. It has to be a function:
    // https://github.com/gatsbyjs/gatsby/pull/940#issuecomment-300878300
    children: PropTypes.func
};

export default Template;
