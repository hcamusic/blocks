import React from 'react';
import { space } from 'styled-system';
import { Box, Text } from 'rebass/styled-components';
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
  text-decoration: underline;
  color: white;

  &:hover {
    color: white;
    opacity: 0.7;
  }
`;

const CardImg = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10em;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

function SponsorCard({ title, website, img }) {
  return (
    <Card>
      {img ? (
        <CardImg px={1} py={2} bg={img.bg}>
          <Img src={img.src} alt={img.alt} />
        </CardImg>
      ) : null}
      <TitleBox>
        <Text py={3} px={3} fontSize={2}>
          <CardLink href={website}>{title}</CardLink>
        </Text>
      </TitleBox>
    </Card>
  );
}

export default SponsorCard;
