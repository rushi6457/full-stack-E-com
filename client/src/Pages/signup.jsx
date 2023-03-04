import { Box, Button, Center, Flex, FormControl, Heading, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styles from "../Styles/Signup.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/auth/actions';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Signup = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const store = useSelector(store =>store.signup)
    console.log(store);
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(signup(user))
        // navigate("/login")
    }
     const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }
    useEffect(()=>{
        if(store.message.message === "User already exists"){
        toast.error(store.message.message,toastOptions)
        }
        else if(store.message.message === "User Signup successful"){
              toast.success(store.message.message,toastOptions)
        }
    },[store.message.message])

    if(store.isLoading){
        return (
            <Spinner
                marginTop={'20%'}
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        )
    }
    
    return (
         <Center className={styles.signup}>
            <form
                onSubmit={handleSubmit}
                paddingEnd={'1.2rem'}
                paddingStart={'1.2rem'}
                >
            <Heading 
                color={'green'}
                textTransform={'uppercase'}
                padding={'1rem'}
            >User Signup</Heading>
            <VStack 
                gap='10px'
                padding={'20px'}>
                <Input 
                    onChange={handleChange}
                    name='name'
                    value={user.name}
                    placeholder='Enter Name'></Input>     
                <Input 
                    onChange={handleChange}
                    name='email'
                    value={user.email}
                    placeholder='Enter Email'></Input>     
                <Input 
                    onChange={handleChange}
                    name='password'
                    value={user.password}
                    placeholder='Enter Password'></Input>
                <Button 
                    type='submit'
                    fontSize={'2xl'}
                    fontWeight={'400'}
                    variant={'solid'}
                    colorScheme='red'
                    mt='10'
                    w='100%' >Signup</Button>
              <Button variant={'solid'}colorScheme='gray'  width={'100%'}><FcGoogle fontSize={'1.5rem'} />Login with Google</Button>
                <Button variant={'solid'} colorScheme='facebook' width={'100%'}><ImFacebook fontSize={'1.5rem'} />Login with Facebook</Button>
            </VStack>    
            </form>
        <ToastContainer/>
        </Center>
    );
}

export default Signup;
