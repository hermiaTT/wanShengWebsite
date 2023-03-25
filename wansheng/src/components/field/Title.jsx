import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
const Title = ({title,description}) =>{
    return (
        <div className='ws_heading-container'>
            <Heading className="wrapper ws_heading">
            {title}
            </Heading>
            <Text className="ws_heading-text">{description}</Text>
        </div>
    )
}

export default Title