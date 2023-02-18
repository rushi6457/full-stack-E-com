import { Box, Button, Flex, HStack, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import styles from "../Styles/Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <Flex
            justifyContent={'space-between'}
            align={'center'}
            border={'1px solid'}
            width={'100%'}
            // bg={'black'}
            // color='white'
            className={styles.navbar}
        >
            <Link to={'/'}>
                <Image src='' alt='Logo'></Image>
            </Link>
            <HStack>
                <UnorderedList>
                    <Flex 
                        justifyContent={'space-around'}
                        align={'center'}
                        gap='2rem'
                    >   
                    <Flex 
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
                        <AiOutlineShoppingCart
                            fontSize={'1.4rem'}
                        />
                    </Flex>
                    <Link to='/login'>
                        <Button 
                            fontSize={'1.3rem'}
                            fontWeight={'200'}
                            variant={'outline'} 
                            colorScheme='red'>
                            Login</Button>
                    </Link>
                    <Link to={'/signup'}>
                        <Button 
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
