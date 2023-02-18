import { Box, Button, Center, Flex, FormControl, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from "../Styles/Login.module.css";
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im';

const Login = () => {

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) =>{

    }
    const handleSubmit = (e) =>{
        
    }
    return (
        <Center className={styles.login}>
            <FormControl
                onSubmit={handleSubmit}
                paddingEnd={'1.2rem'}
                paddingStart={'1.2rem'}
                >
            <Heading 
                color={'green'}
                textTransform={'uppercase'}
                padding={'1rem'}
            >User Login</Heading>
            <VStack 
                padding={'20px'}
                gap={'10px'}>
                <Input 
                    onChange={handleChange}
                    placeholder='Enter Email'></Input>     
                <Input 
                    onChange={handleChange}
                    placeholder='Enter Password'></Input>
                <Button 
                    type='submit'
                    fontSize={'2xl'}
                    fontWeight={'400'}
                    variant={'solid'}
                    colorScheme='red'
                    w='100%' >Login</Button>
               <Button variant={'solid'}colorScheme='gray'  width={'100%'}><FcGoogle fontSize={'1.5rem'} />Login with Google</Button>
                <Button variant={'solid'} colorScheme='facebook' width={'100%'}><ImFacebook fontSize={'1.5rem'} />Login with Facebook</Button>
            </VStack>    
            </FormControl>
        </Center>
    );
}

export default Login;
