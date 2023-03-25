import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/react'
// import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import Logo from '../../components/Logo';


const Footer = () => (

  <Grid as="footer" className='ws_footer'>
    <Flex className='ws_footer-section'  pl={['8', '8', '8', '24', '24']}
      gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']} >
      <Logo/>
      <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
        Wansheng Construction since 2022
      </Text>
      <Flex flexDirection="row" justifyContent="space-between" alignItems="center" mt="8" >
        <Box as={FaFacebookF} />
        <Box as={FaTwitter}  />
        <Box as={FaGoogle} />
        <Box as={FaInstagram} />
        <Box as={FaYoutube} />
      </Flex>
    </Flex>

    <Flex className='ws_footer-section'
      gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
      paddingX="8"
      mt={['12', '12', '12', '0', '0']}
    >
      <Text as="h1">
        Projects
      </Text>
      <Text mb="6px">WHMCS-bridge</Text>
      <Text mb="6px">Search Domain</Text>
      <Text mb="6px">My Account</Text>
      <Text mb="6px">Shopping Cart</Text>
      <Text>Our Shop</Text>
    </Flex>

    <Flex className='ws_footer-section'
      gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
      paddingX={['8', '8', '8', '2', '2']}
      mt={['12', '12', '12', '0', '0']}
    >
      <Text as="h1" >
        Contact Us
      </Text>
      <Text mb="6px">Address: 6688 Peason Way</Text>
      <Text mb="6px">Phone: +1 778-855-5154</Text>
      <Text>Email: wanshengjianshe@gmail.com</Text>
    </Flex>

    <Flex className='ws_footer-section'
      gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', '5 / 6']}
      paddingX={['8', '8', '8', '2', '2']}
      mt={['12', '12', '12', '0', '0']}
    >
      <Text as="h1">
        Newsletter
      </Text>
      <Text mb="6px">
        Wansheng Construction is building magic here{' '}
      </Text>
    </Flex>
</Grid>
  
);

export default Footer;