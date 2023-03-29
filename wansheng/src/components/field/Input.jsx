import React from 'react';
import { Flex, Input } from '@chakra-ui/react';

const InputWS = ({title, label, onChange})=>{
    return(
    <Flex className='ws_input-container'>
        <div className='ws_input-title'>{title}</div>
        <Input className='ws_input-input' placeholder ={label} onChange={(e)=>{onChange(e)}}/>
    </Flex>)
}

export default InputWS;