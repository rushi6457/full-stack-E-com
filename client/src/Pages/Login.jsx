import { Box, Button, Center, Flex, FormControl, Heading, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styles from "../Styles/Login.module.css";
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/actions';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Login = () => {

    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const store = useSelector(store=>store.login)
    console.log(store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(user))
        
    }

useEffect(()=>{
    if(store.token !== null && store.token.role){
        if(store.isAuth === true && store.token.role === "user"){
            navigate("/")
        }
        else if(store.isAuth === true && store.token.role === "admin"){
            navigate("/admin")
        }
    }
  
},[store.isAuth,navigate])
   
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
        <Center className={styles.login}>
            <form
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
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    placeholder='Enter Email'></Input>     
                <Input 
                    name='password'
                    value={user.password}
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
            </form>
             <ToastContainer/>
        </Center>
    );
}

export default Login;
