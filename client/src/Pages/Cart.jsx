import { Button, Flex, Grid, GridItem, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
   const store = useSelector(store=>store.login)
    const [data,setData] = useState([])
    const [count,setCount] = useState(1)
     const toast = useToast()
    const getData = async() =>{
        let res = await axios.get(`https://e-com-78xd.onrender.com/cart/cartdata`)
       return res.data
    }
    
   useEffect(()=>{
   getData()
    .then((res)=>setData(res))
   },[data])

const changeQuantityIncrease = (id,e) =>{

    data.map((el)=>{
        if(el._id === id){
          setCount(count+1)
        }
       
    })
}
const handleDelete = async(id) =>{
  //deletecart
  
  let res = await axios.delete(`https://e-com-78xd.onrender.com/cart/deletecart/${id}`)
    console.log(res);
   setData(data.filter((el)=>el.id !== id))
    return (
        toast({
          title: "Item removed from cart successfully",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
       )
}
const changeQuantityDecrease = (id) =>{
      data.map((el)=>{
        if(el._id === id){
          setCount(count-1)
        }
       
    })
}

    return (
    <TableContainer width={'90%'}margin={'auto'} mt='8'>
  <Table variant='simple' >
    <Thead bgColor={'black'} textColor={'white'}>
      <Tr>
        <Th fontSize={'1.1rem'} textColor={'white'}>Image</Th>
        <Th fontSize={'1.1rem'} textColor={'white'}>Title</Th>
        <Th fontSize={'1.1rem'} textColor={'white'} isNumeric>Price</Th>
        <Th fontSize={'1.1rem'} textColor={'white'} isNumeric>Proceed To Payment</Th>
        <Th fontSize={'1.1rem'} textColor={'white'} isNumeric>Remove</Th>
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
         <Td>
          <Button colorScheme='red' marginLeft={'45%'} onClick={() => handleDelete(el._id)}>Remove Item</Button>
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
