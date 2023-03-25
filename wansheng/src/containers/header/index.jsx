import React from 'react';
import header from '../../assets/header-bg.png';
import {Flex, Grid,Heading} from '@chakra-ui/react'

//可以改成想要的样式
const Header = () => {
  return (
    <Grid
      backgroundImage= {header} className = "ws__header"
      height={['60vh', '60vh', '60vh', '70vh']}
    >
      <Flex className='ws__header-content'
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      >
        <Heading  as="h1">
          WanSheng Construction
        </Heading>
        <Heading as="h3" >
          Ideas & Inspirations
        </Heading>
      </Flex>
    </Grid>
  )
}

export default Header