import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const ref = useParams()
    const [data,setData] = useState([])
    const [count,setCount] = useState(1);
    const getProduct = async() =>{
        let res = await axios.get(`https://e-com-78xd.onrender.com/cart/getcart/${ref.id}`)
       
       return res;
    }
  

    useEffect(()=>{
        getProduct()
        .then((res)=>setData(res.data))    
    },[])
    return (
        <div>
            <Flex justifyContent={'space-around'}>
                <VStack 
                    boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                    borderRadius={'1rem'}
                    width='30%'
                    margin={'2%'} 
                    padding={'1%'} 
                    textAlign={'justify'}>
                    <Image w='70%' src={data?.productId?.image}></Image>
                    <Heading>{data?.productId?.title}</Heading>
                    <Text>{data?.productId?.description}</Text>
                    <Flex justifyContent={'space-between'} alignItems={'center'}  w='100%'>
                        <Flex gap={'5px'}>
                            <Button isDisabled={count==10} colorScheme='red' onClick={()=>setCount(count+1)}>+</Button>
                            <Button colorScheme='red'>{count}</Button>
                            <Button isDisabled={count==1} colorScheme='red' onClick={()=>setCount(count-1)}>-</Button>
                        </Flex>
                        <Text fontSize={'2xl'}>{`₹${data?.productId?.price}`}</Text>
                    </Flex>
                </VStack>
                <VStack 
                    boxShadow='#161515 -5px 5px, #161515 -10px 10px, #161515 -15px 15px, #161515 -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px'
                    width='30%'
                    padding='2%'
                    bgColor={'gray.500'}
                    borderRadius={'4%'}
                    height={'max-content'}
                    margin={'2%'} 
                   >
                    <Flex 
                        w='100%' 
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        fontSize={'1.5rem'}
                        gap='20px' 
                        fontWeight={'700'}>
                        <Box
                            padding={'5%'}
                            bgColor={'#31A666'}
                            borderRadius={'10px'}  
                            color={'white'}>
                        <Text>Quantity </Text><Text>{count}</Text>
                        </Box>
                        <Box 
                        padding={'5%'}
                        bgColor={'#D7D6EA'}
                        color='black'
                        borderRadius={'10px'} 
                        fontSize={'1.5rem'} 
                        fontWeight={'700'}><Text>Product Price</Text><Text>{data?.productId?.price}</Text></Box>
                    </Flex>
                  
                    <Box 
                        padding={'5%'}
                        borderRadius={'10px'} 
                        border={'1px solid'} 
                        w='100%' 
                        color='white'
                        bgColor={'#A03D2D'}
                        justifyContent={'space-between'}
                        fontSize='2rem'
                        fontWeight={'800'}><Text>Total Price</Text>
                        <Text>{count * data?.productId?.price}</Text>
                    </Box>
                </VStack>
            </Flex>
        </div>
    );
}

export default Payment;
