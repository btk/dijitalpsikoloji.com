import React from 'react';
import styled from 'styled-components';

import { colors, fonts, linkStyle, sizes } from '../css/variables';
import sponsorImg from '../../public/sponsor.png';
import OutgoingLink from './OutgoingLink';
import Container from './Container';

const Root = styled.div`
    padding: 0 2rem ${sizes.l};

    @media (min-width: 500px) {
        padding: 0 ${sizes.xl} ${sizes.l};
    }
`;

const Box = styled.div`
    margin: 1rem 0 0;

    a {
        display: flex;
        align-items: center;
        padding: 2rem 3rem;
        border: 1px solid ${colors.border};
        color: ${colors.heading};
    }

    img {
        width: 3rem;
        height: 3rem;
        margin-right: 2rem;
    }

    strong {
        color: ${colors.heading};
    }
`;

function Sponsor() {
    return (
        <Root>
            <Container>
                <h3>Sponsor</h3>
                <Box>
                    <OutgoingLink
                        to={`https://nolt.io/?utm_source=DigitalPsychology&utm_medium=referral&utm_campaign=footer`}>
                        <img src={sponsorImg} />
                        <span>
                            <strong>Nolt</strong> – A free, fast & beautiful way to collect and organize user
                            feedback.
                        </span>
                    </OutgoingLink>
                </Box>
            </Container>
        </Root>
    );
}

export default Sponsor;
