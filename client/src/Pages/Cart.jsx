import { Button, Flex, Grid, GridItem, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
   const store = useSelector(store=>store.login)
    console.log(store);
    const [data,setData] = useState([])
    const [count,setCount] = useState(1)

    const getData = async() =>{
        let res = await axios.get(`https://e-com-78xd.onrender.com/cart/cartdata`)
       return res.data
    }
    
   useEffect(()=>{
   getData()
    .then((res)=>setData(res))
   },[])

const changeQuantityIncrease = (id,e) =>{
    console.log(count);

    data.map((el)=>{
        if(el._id === id){
          setCount(count+1)
        }
       
    })
}
const changeQuantityDecrease = (id) =>{
      data.map((el)=>{
        if(el._id === id){
          setCount(count-1)
        }
       
    })
}
    console.log(data);

    return (
    <TableContainer width={'90%'}margin={'auto'} mt='8'>
  <Table variant='simple' >
    <Thead bgColor={'black'} textColor={'white'}>
      <Tr>
        <Th fontSize={'1.1rem'} textColor={'white'}>Image</Th>
        <Th fontSize={'1.1rem'} textColor={'white'}>Title</Th>
        {/* <Th>Quantity</Th> */}
        <Th fontSize={'1.1rem'} textColor={'white'} isNumeric>Price</Th>
        <Th fontSize={'1.1rem'} textColor={'white'} isNumeric>Proceed To Payment</Th>
      </Tr>
    </Thead>
    {
        data && data?.map((el)=>{
  return (
     store.token.email===el.userId.email ?
    <Tbody key={el._id}>
      <Tr>
        <Td><Image width='100px' src={el.productId.image}></Image></Td>
        <Td>{el.productId.title}</Td>
        <Td isNumeric>{`₹ ${el.productId.price}`}</Td>
        <Td isNumeric>
            <Link to={`/payment/${el._id}`}>
                <Button colorScheme='green'>Proceed to payment</Button>
            </Link>
        </Td>
      </Tr>
    </Tbody>
    : null
            )
        })
      }
    
  </Table>
</TableContainer>
    );
}

export default Cart;
