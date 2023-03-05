import { Avatar, Box, Button, Flex, HStack, Image, ListItem, Tooltip, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import styles from "../Styles/Navbar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/actions';
import logo from "../asset/logo.png";

const Navbar = () => {
    const store = useSelector(store=>store.login)
    console.log(store);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
       if(store.isAuth){
        dispatch(logout())
       }
       else{
        navigate("/login")
       }
    }
    return (
        <Flex
            justifyContent={'space-between'}
            align={'center'}
            width={'100%'}
            className={styles.navbar}
        >
            <Link to={'/'}>
                <Image w='120px' height={'80px'} src={logo} alt='Logo'></Image>
            </Link>
            <HStack>
                <UnorderedList>
                    <Flex 
                        justifyContent={'space-around'}
                        align={'center'}
                        gap='2rem'
                    >   
                    <Flex 
                        display={store.token.role === 'user' ? 'initial' : 'none'}
                        align={'center'}
                        gap='10px'
                    >   
                    <Link to={'/cart'}  >
                        <ListItem 
                            
                            fontSize={'1.4rem'}
                            textTransform={'uppercase'}
                            listStyleType={'none'}>
                        Cart</ListItem>
                    </Link>
                        {/* <AiOutlineShoppingCart
                            fontSize={'1.4rem'}
                        /> */}
                    </Flex>
                    <Link to='/login'>
                     {store.isAuth ? <Tooltip hasArrow   label={`${store.token.email}: Logout`} ><Avatar onClick={handleLogout} name={store.token.name} src={store.token.email} /></Tooltip> :
                        <Button 
                            fontSize={'1.3rem'}
                            fontWeight={'200'}
                            variant={'outline'} 
                            colorScheme='red'>
                           Login</Button>
                    }   
                    </Link>
                    <Link to={'/signup'}>
                        <Button 
                            display={store.isAuth ? 'none' : 'initial'}
                            fontSize={'1.3rem'}
                            fontWeight={'200'}
                            variant={'solid'} 
                            colorScheme='red'>
                            Signup</Button>
                    </Link>
                    </Flex>
                </UnorderedList>
            </HStack>
        </Flex>
    );
}

export default Navbar;
