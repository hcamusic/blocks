import React from 'react';
import { Box, Flex, Card } from 'rebass/styled-components';
import styled from 'styled-components';
import './_sponsor-card.scss';

const TitleBox = styled(Box)`
  height: 100%;
  width: 100%;
  background: #4b2c5a;
`;

const CardLink = styled.a`
  &:hover {
    text-decoration: none;

    ${TitleBox}: {
      //TODO: This doesn't work
      opacity: 0.7;
    };
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
      <Card mb={3} px={3}>
        {img ? (
          <CardImg p={3}>
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
