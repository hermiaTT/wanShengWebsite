import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({variant=0,title, onClick})=>{

    return(        
        <ChakraButton className='ws_button'
            alignSelf="flex-start"
            variantColor= {variant==1? "white": "#f39d00"}
            backgroundColor={variant==1? "#fff": "#f39d00"}
            color={variant==1? "#f39d00":"#fff"}
            width="fit-content"    
            onClick ={onClick}         
        >
            {title}
        </ChakraButton>
    
    )
}

export default Button