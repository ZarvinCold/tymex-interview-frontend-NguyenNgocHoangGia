import React from 'react';
import {Tags, Card, SearchFilterSection} from 'components';
import {
  StyledContentWrapper,
  StyledOverviewPageWrapper,
} from './index.styled';
import background from 'assets/body-background.png';
import bodyBottom from 'assets/body-bottom.svg';
const mockTags = [
  'Art',
  'Music',
  'Photography',
  'Collectibles',
  'Sports',
  'Virtual Worlds',
  'Trading Cards',
  'Utility',
  'Domain Names',
  'Fashion',
  'Gaming',
  'Memes',
  'DeFi',
  'Metaverse',
  'Charity',
  'Education',
  'Science',
  'Technology',
  'History',
  'Nature',
];

const OverviewPage: React.FC = () => {
  return (
    <StyledOverviewPageWrapper
      background={background}
      bottomBackground={bodyBottom}
    >
      <SearchFilterSection />
      <StyledContentWrapper>
        <Tags tags={mockTags} />
        <Card
          image={''}
          title={'abc'}
          category={'tag'}
          price={'23'}
          creator={'aut'}
          creatorAvatar={''}
        />
      </StyledContentWrapper>
    </StyledOverviewPageWrapper>
  );
};

export default OverviewPage;
