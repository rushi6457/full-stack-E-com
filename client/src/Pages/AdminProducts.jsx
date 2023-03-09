import { Box, Button,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure, Flex, Grid, GridItem, Image, Text, useToast, Heading, Select } from '@chakra-ui/react';
  import {ArrowLeftIcon,ArrowRightIcon} from "@chakra-ui/icons";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Edit from '../Components/Edit';
import Pagination from '../Components/Pagination';
import { Link } from 'react-router-dom';
import styles from "../Styles/ProductAdd.module.css"
const AdminProducts = () => {
    const [data, setData] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sort,setSort] = useState('asc')
    const toast = useToast()
    const [price,setPrice] = useState('')
    const [page,setPage] = useState(1)
    let limit = 8
    useEffect(()=>{
        axios.get(`https://e-com-78xd.onrender.com/admin/allproducts?page=${page}&limit=${limit}&sort=${sort}`)
        .then((res)=> setData(res.data.data) )
       
    },[data,page,sort])

 
     const handleChange = (e) =>{
        setPrice({
            ...price,
            [e.target.name]:e.target.value
        })
    }
   
     const handleEdit = async(id,el) =>{
        await axios.put(`https://e-com-78xd.onrender.com/admin/updateproduct/${id}`,price)
        .then((res) =>console.log(res.data))
         setPrice('')
         return (
        toast({
          title: "Price edited successfully",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
       )
      
    }
    const handleDelete = async(id) =>{
        await axios.delete(`https://e-com-78xd.onrender.com/admin/deleteproduct/${id}`)
        
        setData(data.filter((el)=>el.id !== id))
        return (
        toast({
          title: "Product deleted successfully",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
       )
    }
    const handleSort = (e) =>{
       setSort(e.target.value)
    }
    return (
        <div>
             <Flex justifyContent={'space-between'} margin={'20px'}>
                <Link to='/admin'>
                <Button  padding={'20px'} colorScheme='red'  alignSelf={'initial'} variant={'solid'}><ArrowLeftIcon/></Button>
                </Link>
                 <Heading>All Products</Heading>
                <Link to='/products'>
                    <Select onChange={handleSort}>
                        <option value="">Sort by price</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </Select>
                </Link>
            </Flex>
           
           <Grid className={styles.proGrid} paddingTop={'50px'}>
            {
            data?.map((el)=>{
                return (
                <GridItem key={el._id} textAlign={'justify'} borderRadius={'1rem'} padding={'15px'} 
                boxShadow= 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
                >
                    <Image width={'200px'} src={el.image}></Image>
                    <Text fontSize={'1.6rem'}>{el.title}</Text>
                    <Text>{el.description}</Text>
                    <Text fontSize={'1.4rem'}>{`₹${el.price}`}</Text>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                             <Button onClick={onOpen} variant={'solid'} colorScheme='blue' key={el._id}>EDIT</Button>  
                                <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader>New Price</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                <Input name='price' onChange={handleChange}></Input>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                    </Button>
                                    <Button onClick={()=>handleEdit(el._id,el)} variant='outline' colorScheme='blue'>Change Price</Button>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>  
                        </Box>
                        <Button onClick={()=>handleDelete(el._id)} variant={'solid'} colorScheme='red'>DELETE</Button>
                    </Flex>
                </GridItem>
                )
            })
            }
           </Grid>
           <Pagination data={data} onChange={(page) => setPage(page)} current={page} />
        </div>
    );
}

export default AdminProducts;
