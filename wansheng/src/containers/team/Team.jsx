import React from 'react'
import Feature from '../../components/feature/feature';
import {zee,scott,momo,mario,serviceBG} from '../../assets/imports';
import './team.css';
import { Box, Grid, Image, Flex, Heading, Text } from '@chakra-ui/core';
import Button from '../../components/field/Button';

const teamData = [
  {
    title: 'Director',
    img: momo,
    name: 'Zee Gao',
  },
  {
    title: 'Director',
    img: momo,
    name: 'Junbo He',
  },
  {
    title: 'Designer',
    img:momo,
    name: 'Hermia Tian',
  },
];

const Team = () => {
  return (
    <div id="team">
      <Box position={"relative"}>
        <Image src ={serviceBG}
          className='ws_team-bgImage' 
          width={['0%', '0%', '0%', '40%', '60%']}
          display={['none', 'none', 'none', 'block', 'block']}
        />
        <Grid className='ws_team-service-container'
          backgroundColor="orange.500"
          templateColumns="repeat(12, 1fr)"
          templateRows="repeat(3, 1fr)"
        >
          <Flex className='ws_team-service-flex' gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']} >
            <Heading as="h3"> Our Professional Services</Heading>
            <Heading as="h4"> We Will Create Modern And First Class Intorior.</Heading>
            <Text as ="p" >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make aa type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
            </Text>
            <Button title={'Try Now'} variant ={1}></Button>
          </Flex>
        </Grid> 
      </Box>
      
      <Flex className="ws__team" mt={['24px', '24px', '24px', '134px', '64px']}>
        <Heading className="ws__team-heading">
          Creative Director
        </Heading>
        <Text className="ws__team-heading-text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</Text>

        <Grid className="ws__team-container"  >
          {teamData.map((item, index) => (
          <Box position="relative" gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']} >
            <Image className='ws__team-container-img' src={item.img}/>
            <Flex className='ws_team-card'>
              <Text fontWeight={"medium"} fontSize="22px">{item.name}</Text>
              <Text color={"orange"} >{item.title}</Text>
            </Flex>

            </Box>
          ))}
        </Grid>
    </Flex>
  </div>
  )
}

export default Team