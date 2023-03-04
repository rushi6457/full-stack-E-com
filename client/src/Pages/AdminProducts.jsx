import { Box, Button,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure, Flex, Grid, GridItem, Image, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Edit from '../Components/Edit';

const AdminProducts = () => {
    const [data, setData] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    let limit = 20;
    const [price,setPrice] = useState('')
    const [page,setPage] = useState(1)

    useEffect(()=>{
        axios.get(`https://e-com-78xd.onrender.com/admin/allproducts?skip=${page-1 * limit}&limit=${limit}`)
        .then((res)=> setData(res.data.data) )
       
    },[data])

    
    //  const handleChange = (e) =>{
    //     setPrice({
    //         ...price
    //     })
    // }
    // console.log(price);
     const handleEdit = (id) =>{
        console.log(id);
        axios.put(` https://e-com-78xd.onrender.com/admin/updateproduct/${id}`,price)
        .then((res) =>console.log(res))
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
    return (
        <div>
           <Grid gridTemplateColumns={'repeat(4,1fr)'} gap={'20px'} w='90%' margin='auto' paddingTop={'50px'}>
            {
            data.map((el)=>{
                return (
                <GridItem key={el._id} textAlign={'justify'} border={'1px solid'} padding={'15px'}>
                    <Image  src={el.image}></Image>
                    <Text fontSize={'1.6rem'}>{el.title}</Text>
                    <Text>{el.description}</Text>
                    <Text fontSize={'1.4rem'}>{`₹${el.price}`}</Text>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                             <Button onClick={onOpen} variant={'solid'} colorScheme='blue'>EDIT</Button>  
                                <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader>New Price</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                <Input name='price' onChange={(e)=>setPrice(parseInt(e.target.value))}></Input>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                    </Button>
                                    <Button onClick={()=>handleEdit(el._id)} variant='outline' colorScheme='blue'>Change Price</Button>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>  
                        </Box>
                        {/* <Edit id={el._id} data={el.price}/> */}
                        <Button onClick={()=>handleDelete(el._id)} variant={'solid'} colorScheme='red'>DELETE</Button>
                    </Flex>
                </GridItem>
                )
            })
            }
           </Grid>
        </div>
    );
}

export default AdminProducts;
