import { Flex, Text } from '@chakra-ui/react';
import { useMediaQuery } from 'react-haiku';
import { Link, useLocation } from 'react-router-dom';

import reactbitslogo from '../../../assets/logos/reactbits-logo.svg';
import github from '../../../assets/common/icon-github.svg';
import showcase from '../../../assets/common/icon-showcase.svg';
import docs from '../../../assets/common/icon-docs.svg';

import FadeContent from '../../../content/Animations/FadeContent/FadeContent';

import './LandingHeader.css';
import LiquidButton from '../../../ts-default/Components/LiquidButton/LiquidButton';

const LandingHeader = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { pathname } = useLocation();

  return (
    <header className="app-header">
      <nav className="header-content">
        <FadeContent blur>
          <Link className='logo' to="/">
            <LiquidButton label='🩸' width={50} height={50}/>
          </Link>
        </FadeContent>

        <Flex gap="8px" className='menu-items'>
          {!isMobile && (
            <FadeContent blur>
              <Text
                as="a"
                fontWeight={500}
                fontSize="16px"
                href="https://github.com/Rajesh-Royal/liquid-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className='link-github' alt='minimal github octocat logo' /> GitHub
              </Text>
            </FadeContent>
          )}

          {!isMobile && (
            <FadeContent blur>
              <Text
                as={Link}
                fontWeight={500}
                fontSize="16px"
                to="/components/liquid-button"
              >
                <img src={docs} alt='a page with some writing on it' /> Docs
              </Text>
            </FadeContent>
          )}
        </Flex>
      </nav>
    </header>
  );
}

export default LandingHeader;