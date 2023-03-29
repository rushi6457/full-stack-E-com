import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import styles from "../Styles/Admin.module.css"
const Admin = () => {
    const [product,setProduct] = useState([])
    const [userName,setUserName] = useState([])
    const [userEmail,setUserEmail] = useState([])
    const [dataa,setDataa] = useState([])
    useEffect(()=>{
        axios.get(`https://e-com-78xd.onrender.com/cart/cartdata`)
        .then((res) =>setDataa(res.data))
    },[])
    
    const uniqueNames = [...new Set(dataa.map(item =>item?.userId?._id))];
    const unique = [...new Set(dataa.map(item =>item?.productId?._id))];

const data = {
  labels: ['Unique Users','Unique Products'],
  datasets: [
    {
      label: 'Unique Users',
      data: [uniqueNames.length,unique.length],
      backgroundColor: [
        '#2828FF',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        '#2828FF',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    
    },
  ],
 
};
    return (
        <div>
           <Flex justifyContent={'space-between'} margin={'10px'} alignItems={'center'}>
            <Link to='/addproducts'>
                <Button colorScheme='linkedin' variant={'outline'}>Add products</Button>
            </Link>
            <Heading textColor={'blue'}>Admin Panel</Heading>
            <Link to='/users'>
                <Button colorScheme='linkedin'>Check users</Button>
            </Link>
           </Flex>

        <Flex align={'center'} justifyContent={'space-between'} width='100%' margin={'auto'} className={styles.admin}>
            <Container marginRight={'50px'}>
           <TableContainer>
            <Table variant='simple' size={'sm'}>
                <Thead>
                <Tr>
                    <Th >User Email</Th>
                    <Th >User Name</Th>
                    <Th >Cart Product Title</Th>
                    <Th >Product Price</Th>
                </Tr>
                </Thead>
              {dataa?.map((el)=>{
                return (
                <Tbody key={el._id}>
                <Tr>
                    <Td>{el.userId?.email}</Td>
                    <Td>{el.userId?.name}</Td>
                    <Td>{el.productId?.title}</Td>
                    <Td>{`₹ ${el.productId?.price}`}</Td>
                </Tr>
               
                </Tbody>
                )
              })}
                
            </Table>
        </TableContainer>
        </Container>
        <Container>
        <Pie  data={data}/>
        </Container>
    </Flex>
        </div>
    );
}

export default Admin;
