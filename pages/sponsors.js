import react from 'react';
import SponsorCard from '../components/sponsor-card';
import { Flex, Box } from 'rebass/styled-components';

const sponsorList = {
  'Platinum Sponsors': [
    {
      title: 'Doc Adams Music',
      website: 'http://www.docadamsmusic.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/DocAdamsMusic.jpg',
        alt: '',
      },
    },
  ],
  'Gold Sponsors': [
    {
      title: 'Rosewood Wealth Management',
      website: 'https://rosewoodwealthmanagement.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/RosewoodWealthMgt.jpg',
        alt: '',
      },
    },
    {
      title: 'MyBrainDr',
      website: 'https://mybraindr.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/MyBrainDr.jpg',
        alt: '',
      },
    },
    {
      title: 'Huston Law Firm, PLLC',
      website: 'https://www.hustonlawfirm.com/',
      // img: {
      //   src: "",
      //   alt: ""
      // }
    },
    {
      title: 'Allenton Management',
      website: 'https://allenton.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/AllentonMgt.png',
        alt: '',
      },
    },
    {
      title: 'Aluminum Company of NC',
      website: 'https://www.aluminumcompany.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/AluminumCompany.jpg',
        alt: '',
      },
    },
    {
      title: 'Adams Chetwood Wealth Management Group',
      website: 'https://adamschetwood.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/AdamsChetwoodWealthMgt.png',
        alt: '',
      },
    },
  ],
  'Silver Sponsors': [
    {
      title: 'Susanne Jackson Dentistry',
      website: 'https://susannejacksondds.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/SusanneJacksonDentistry.svg',
        alt: '',
      },
    },
    {
      title: 'Raleigh Dental Excellence',
      website: 'https://www.raleighdentalexcellence.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/RaleighDentalExcellence.png',
        alt: '',
      },
    },
    {
      title: 'Triangle Restoration Dentistry',
      website: 'https://www.trianglerestorationdentistry.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/TriangleRestorationDentistry.webp',
        alt: '',
      },
    },
    {
      title: 'Walker Auto and Truck',
      website: 'https://www.walkerautostores.com/',
      img: {
        src:
          'https://hcamusic.org/sites/hcamusic.org/files/img_sponsors/WalkerAutoTruck.png',
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
          <Box my={4} key={level}>
            <h3>{level}</h3>
          </Box>
          <Flex flexWrap="wrap">
            {sponsors.map(sponsor => (
              <Box width={[1 / 3]} key={sponsor.title}>
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
