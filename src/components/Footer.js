import React from 'react';
import styled from 'styled-components';

import { colors, fonts, linkStyle, sizes } from '../css/variables';
import Container from './Container';
import OutgoingLink from './OutgoingLink';

const Root = styled.div`
    padding: ${sizes.l} 2rem;
    background-color: ${colors.highlight};
    border-top: 1px solid ${colors.border};

    @media (min-width: 500px) {
        padding: ${sizes.l} ${sizes.xl};
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li + li {
        margin-top: 1rem;
    }

    a {
        ${linkStyle};
    }
`;

const Info = styled.div`
    margin-bottom: 2.5rem;
`;

const Anchor = styled(OutgoingLink)`
    ${fonts.heading};
`;

function Footer(props) {
    const siteDescription
        = `Dijital Psikoloji – psikolojik prensiplerin ve müşteri deneyimini arttırmak için`
        + ` esinlenilebilecek örneklerin bulunduğu, kullanıcılar ile bağlantı oluşturmanızı`
        + ` sağlayacak ücretsiz bir kütüphanedir`;

    return (
        <Root>
            <Container>
                <Info>
                    {siteDescription}. {' '}
                    <p>
                    <OutgoingLink to={`https://twitter.com/${props.twitterHandle}`}>
                        Daniel Stefanovic
                    </OutgoingLink> derlendi ve MIT lisansına tabidir. {' '}
                    </p>
                    <p>
                    <OutgoingLink to={`https://buraktokak.com`}>
                        Burak Tokak
                    </OutgoingLink> tarafından Türkçeleştirildi ve eklemeler yapıldı, bu değişiklikler de MIT lisansına tabidir.
                    </p>
                </Info>

                <ul>
                    <li>
                        <Anchor
                            to={`http://twitter.com/share?text=${encodeURIComponent(
                                siteDescription
                            )}&url=https://dijitalpsikoloji.com`}>
                            {`Twitter'da Paylaş`}
                        </Anchor>
                    </li>
                </ul>
            </Container>
        </Root>
    );
}

export default Footer;
