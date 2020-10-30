import react from 'react';
import SponsorCard from '../components/sponsor-card';
import { Flex, Box, Text } from 'rebass/styled-components';

const sponsorList = {
  'Platinum Sponsors': [
    {
      title: 'EOMC - Our goal is to keep your employees healthy and productive',
      img: {
        src: 'https://hcamusic.org/images/eomc-logo.png',
        alt: '',
      },
    },
    {
      title: 'Doc Adams Music',
      website: 'http://www.docadamsmusic.com/',
      img: {
        src: 'https://hcamusic.org/images/DocAdamsMusic.jpg',
        alt: '',
      },
    },
  ],
  'Gold Sponsors': [
    {
      title: 'Rosewood Wealth Management',
      website: 'https://rosewoodwealthmanagement.com/',
      img: {
        src: 'https://hcamusic.org/images/RosewoodWealthMgt.jpg',
        alt: '',
      },
    },
    {
      title: 'MyBrainDr',
      website: 'https://mybraindr.com/',
      img: {
        src: 'https://hcamusic.org/images/MyBrainDr.jpg',
        alt: '',
      },
    },
    {
      title: 'Huston Law Firm',
      website: 'https://www.carolinaestatecounsel.com/',
      img: {
        src: 'https://hcamusic.org/images/CarolinaEstateCounsel.png',
        alt: '',
        bg: 'rgb(38, 65, 148)',
      },
    },
    {
      title: 'Allenton Management',
      website: 'https://allenton.com/',
      img: {
        src: 'https://hcamusic.org/images/AllentonMgt.jpg',
        alt: '',
      },
    },
    {
      title: 'Aluminum Company of NC',
      website: 'https://www.aluminumcompany.com/',
      img: {
        src: 'https://hcamusic.org/images/AluminumCompany.jpg',
        alt: '',
      },
    },
    {
      title: 'Adams Chetwood Wealth Management Group',
      website: 'https://adamschetwood.com/',
      img: {
        src: 'https://hcamusic.org/images/AdamsChetwoodWealthMgt.png',
        alt: '',
      },
    },
  ],
  'Silver Sponsors': [
    {
      title: 'Susanne Jackson Dentistry',
      website: 'https://susannejacksondds.com/',
      img: {
        src: 'https://hcamusic.org/images/SusanneJacksonDentistry.png',
        alt: '',
      },
    },
    {
      title: 'Raleigh Dental Excellence',
      website: 'https://www.raleighdentalexcellence.com/',
      img: {
        src: 'https://hcamusic.org/images/RaleighDentalExcellence.png',
        alt: '',
      },
    },
    {
      title: 'Triangle Restoration Dentistry',
      website: 'https://www.trianglerestorationdentistry.com/',
      img: {
        src: 'https://hcamusic.org/images/TriangleRestorationDentistry.png',
        alt: '',
      },
    },
    {
      title: 'Walker Auto and Truck',
      website: 'https://www.walkerautostores.com/',
      img: {
        src: 'https://hcamusic.org/images/WalkerAutoTruck.png',
        alt: '',
      },
    },
  ],
};

function SponsorBlock() {
  return (
    <>
      {Object.entries(sponsorList).map(([level, sponsors]) => (
        <>
          <Box my={4} ml={3} key={level}>
            <h2>{level}</h2>
          </Box>
          <Flex flexWrap="wrap">
            {sponsors.map(sponsor => (
              <Box width={[1, 1 / 2, 1 / 3]} key={sponsor.title} pb={4} px={3}>
                <SponsorCard {...sponsor} />
              </Box>
            ))}
          </Flex>
        </>
      ))}
    </>
  );
}

export default SponsorBlock;
