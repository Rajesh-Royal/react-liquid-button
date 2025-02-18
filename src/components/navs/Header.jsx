import { Link } from 'react-router-dom';
import { Box, Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Icon, IconButton, Image, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import { ArrowForwardIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { TiStarFullOutline } from "react-icons/ti";
import { useStars } from '../../hooks/useStars';

import Logo from '../../assets/logos/reactbits-logo.svg';

import BlurText from '../../content/TextAnimations/BlurText/BlurText';
import FadeContent from '../../content/Animations/FadeContent/FadeContent';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const stars = useStars();

  return (
    <Box zIndex={100} className='main-nav'>
      <Flex className='nav-items' h={20} alignItems="center" justifyContent="space-between">
        <Link to="/" className='logo'>
          <Image src={Logo} alt="Logo" />
        </Link>

        {/* Hamburger menu button for small screens */}
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onOpen}
        />

        {/* Links for larger screens */}
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center" gap={8}>
          <FadeContent blur>
            <Button as="a" href='https://github.com/Rajesh-Royal/liquid-button' rel='noreferrer' target='_blank' bg="white" color="black" padding="0 .6em" fontSize="xs" h={8} _hover={{ bg: 'white', transform: 'scale(0.95)' }}>
              <Text ml={1}>Star on GitHub</Text>
              <Icon ml={2} mr={0.5} as={TiStarFullOutline} />
              {stars ? <BlurText delay={20} text={String(stars)} /> : <Box><Spinner boxSize={2} /></Box>}
            </Button>
          </FadeContent>
        </Flex>
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay display={{ md: 'none' }}>
          <DrawerContent bg="black" h={'100%'}>
            <DrawerBody px={0} py={0}>
              <Flex direction="column">
                <Flex alignItems="center" justifyContent="space-between" h={'57px'} mb={6} borderBottom={"1px solid #ffffff1c"} px={6}>
                  <Image src={Logo} alt="Logo" height="25px" />
                  <IconButton
                    size="md"
                    icon={<CloseIcon boxSize={3} />}
                    aria-label="Close Menu"
                    display={{ md: 'none' }}
                    onClick={onClose}
                  />
                </Flex>
                <Flex direction="column" px={6}>
                  <p>Useful Links</p>
                  <Link to="https://github.com/Rajesh-Royal/liquid-button" target='_blank' display="block" mb={2} onClick={onClose}>
                    GitHub <ArrowForwardIcon boxSize={7} transform={"rotate(-45deg)"} position="relative" top="-1px" />
                  </Link>
                  <Divider />
                  <p>Other</p>
                  <Link to="https://github.com/Rajesh-Royal" target='_blank' display="block" mb={2} onClick={onClose}>
                    Who made this?<ArrowForwardIcon boxSize={7} transform={"rotate(-45deg)"} position="relative" top="-1px" />
                  </Link>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default Header;