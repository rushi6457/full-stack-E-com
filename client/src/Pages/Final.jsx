import { Button, Center, Container, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, Text, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from "../Styles/Final.module.css";
import { useNavigate } from 'react-router-dom';

const Final = () => {
    const [userInfo,setUserInfo] = useState({
        address:'',
        pincode:''
    })
    const toast = useToast()
    const data = JSON.parse(localStorage.getItem('info'))
    const navigate = useNavigate()    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUserInfo({
            ...userInfo,
            [e.target.name]:e.target.value
        })
    }
    const handleClick = () =>{
    if(userInfo.address === '' || userInfo.pincode === ''){
        return (
             toast({
          title: "Please provide all information",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        )
    }
    else if(userInfo.pincode.length != 6){
         return (
             toast({
          title: "Please enter correct 6 digit pincode",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        )
    }
    else{
         navigate("/")
          return (
         toast({
          title: "Order placed successfully",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      )
     
    }
    
    }
    return (
  
    <Flex width='90%' justifyContent={'space-between'} alignItems={'center'} margin={'auto'} className={styles.mainFlex}>
        <VStack textAlign={'justify'} padding={'1%'} className={styles.firstChild}>
            <Image width={'200px'} src={data[0].productId.image}></Image>
            <Text fontSize={'1.6rem'} textAlign={'center'}>{data[0].productId.title}</Text>
            <Text >{data[0].productId.description}</Text>
            <Text fontSize={'1.4rem'}>{`Quantity: ${data[1]}`}</Text>
            <Text fontSize={'1.4rem'}>{`Total Amount: ₹${data[0].productId.price * data[1]}`}</Text>
        </VStack>
        <Container padding={'2%'} pt={'3%'}pb='3%' className={styles.secondChild}>
                <Heading fontFamily={'mono'}>User information form</Heading>
                <FormControl>
                    <FormLabel fontFamily={'cursive'}>User Name</FormLabel>
                    <Input type='text' value={data[0].userId.name}></Input>
                    <FormLabel fontFamily={'cursive'}>User Email</FormLabel>
                    <Input type='text' value={data[0].userId.email}></Input>
                    <FormLabel fontFamily={'cursive'}>Address</FormLabel>
                    <Input onChange={handleChange}  type='text'name='address' value={userInfo.address}></Input>
                    <FormLabel fontFamily={'cursive'}>Pincode</FormLabel>
                    <Input onChange={handleChange} type='number' name='pincode' value={userInfo.pincode}></Input>
                    <Button onClick={handleClick} variant={'solid'} colorScheme='green' fontFamily={'mono'} fontSize={'1.2rem'} mt='4' alignSelf={'flex-start'}>Submit</Button>
                </FormControl>
        </Container>
    </Flex>
    );
}

export default Final;
