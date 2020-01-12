import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

const TitleBox = styled(Box)`
  width: 100%;
  background: #4b2c5a;
  flex-grow: 1;
`;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
`;

const CardLink = styled.a`
  &:hover {
    text-decoration: none;

    ${Card} {
      opacity: 0.7;
    }
  }
`;

const CardImg = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7em;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

const Title = styled(Box)`
  color: white;
`;

function SponsorCard({ title, website, img }) {
  return (
    <CardLink href={website}>
      <Card>
        {img ? (
          <CardImg px={1} py={2} bg={img.bg}>
            <Img src={img.src} alt={img.alt} />
          </CardImg>
        ) : null}
        <TitleBox>
          <Title px={3} py={4}>
            {title}
          </Title>
        </TitleBox>
      </Card>
    </CardLink>
  );
}

export default SponsorCard;
