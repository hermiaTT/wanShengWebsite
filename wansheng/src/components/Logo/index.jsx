import React from 'react'

import { Heading, Text } from '@chakra-ui/react'

const Logo = () => {
  return (
    <>
      <Heading as="h1" size="lg" color="orange.500" textTransform="uppercase">
        <Text display="inline" fontWeight="extrabold">
          Wansheng
        </Text>{' '}
        <Text display="inline" fontWeight="medium">
          Construction
        </Text>
      </Heading>
    </>
  )
}

export default Logo
