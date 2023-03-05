import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, WrapItem, Avatar, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ArrowLeftIcon,ArrowRightIcon} from "@chakra-ui/icons";

const AdminUsers = () => {
    const [data, setData] = useState([]);
   const [users,setUsers] = useState([])
   let a = []
    useEffect(()=>{
        axios.get(`https://e-com-78xd.onrender.com/cart/cartdata`)
        .then((res) =>setData(res.data))
    },[])

   
//     let a = data.map((el)=>el.userId)
//    users.push(a)
//    let b = data.map((el)=>el.productId)
//    products.push(b)
//    console.log(b);
   const uniqueNames = [...new Set(data.map(item =>item.userId.email))];
    console.log(uniqueNames)
   useEffect(()=>{
    // uniqueNames.map((el)=>{
        // axios.get(`http://localhost:5000/user/singleuser/${uniqueNames}`)
        // .then((res) =>console.log(res))
    // })
    
    },[])
    // console.log(users)
   /*
return (
            setUsers({
            ...item,
             email:item.userId.email,
             name: item.userId.name,
             role: item.userId.role
        })
        )

   */
    // console.log(users); 

   
    return (
        <div>
         <Flex justifyContent={'space-between'} margin={'20px'} >
                <Link to='/admin'>
                <Button  padding={'20px'} colorScheme='red'  alignSelf={'initial'} variant={'solid'}><ArrowLeftIcon/></Button>
                </Link>
                <Link to='/products'>
                {/* <Button  padding={'20px'} colorScheme='red'  alignSelf={'initial'} variant={'solid'}><ArrowRightIcon/></Button> */}
                </Link>
            </Flex>
        <Heading fontFamily={'cursive'} paddingTop={'30px'}>All Users</Heading>
        <SimpleGrid w='90%' margin={'auto'} mt='5%' spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
            
            {
                uniqueNames.map((el)=>{
                    return (
                        <Card>
                            <CardHeader>
                                <WrapItem>
                                    <Avatar name={el} src={el} />
                                </WrapItem>
                            <Heading size='md' fontFamily={'mono'} fontSize='4xl'>User Detail Card</Heading>
                            </CardHeader>
                            <CardBody>
                            <Text fontWeight={'500'} letterSpacing={'2px'}>User Email : {el}</Text>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
  
                    )
                })
            }
</SimpleGrid>
</div>
    );
}

export default AdminUsers;
