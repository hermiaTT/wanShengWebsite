import React from 'react';
import Feature from '../../components/feature/index.jsx';
import {Box, Flex, Grid, Heading, Text, Image } from '@chakra-ui/react';
// import { useTranslation } from 'react-i18next';
import {rocket, power, stack, aboutUsBG} from '../../assets/imports';
import Button from '../../components/field/Button';
const Intro = () => {
  // const {t, i18n } = useTranslation();
  return (
    <div  id="intro">
      <Flex className='ws__intro section__margin'>
        <Heading as="h3" className='ws__intro-feature wrapper'>
          All the more reasons to get your dream home  now
        </Heading>
        <Flex className=' ws__intro-container'>
          <Feature className=' wrapper'
            hidden = {true} 
            title= 'Free consultation'
            img = {rocket}
            text="对每位客户的家给予精心、细致的防护，确保家装施工过程稳妥可靠 | 工程中的每个环节、工艺都有严格的施工规范和验收标准，确保每个环节到位可靠 | 施工现场材料的堆放、保管、防护制定了有效的管理制度，确保施工质量始终如一。" />
          <Feature className=' wrapper'
            hidden = {true} 
            title="Customized Service" 
            img = {power}
            text="设计师为你精准做出装修方案，保证你的每一个细节都符合政府要求。不需再担心政府审批，我们为你全部搞定。" />
          <Feature className=' wrapper'
            hidden = {true} 
            title="Business Project" 
            img = {stack}
            text="工程公司均拥有WCB劳工保险,五百万工程保险，项目总监全程监理保证现场工地质量，解决客户问题。一流服务和专业技术，让你的工程更有保障。" />
        </Flex>
        <Button title={" Consult online now"}></Button>
      </Flex>
      
      <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
        <Flex className='ws_intro-about-US' 
              gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
              paddingX={['8', '8', '8', '24', '24']}
              marginX="auto">
          <Heading className=' wrapper' as ="h3">
            About Us
          </Heading>
          <Text className=' wrapper' as="p" >
          万盛建筑公司是温哥华领先的室内装修公司，以专业装修人员为背景， 提供优质的装修服务，服务覆盖到装修领域的方方面面，为您解决一切室内外装修与家居维护难题，为您提供省钱省力又省心的一站式服务体验！我们秉承“诚信、创新、实干”的理念，坚持“规范化、专业化、优质化”的发展道路，信守“客户为尊，诚信为本”的经营之道，恪守“接一项案子，树一座丰碑，交一方朋友，留一片信誉”的服务精神，并积极整合现有资源，不断吸纳先进服务理念，力争打造万盛建筑为之骄傲的辉煌！
          </Text>
          <Button title={"Learn More"}></Button>

        </Flex>
          <Box gridColumn="4 / 7">
            <Image className=' wrapper' src={aboutUsBG}
                          display={['none', 'none', 'none', 'block', 'block']}
                          width="100%"
                        />
          </Box>
      </Grid>
    </div>
  )
}

export default Intro