import { AbsoluteCenter, Box, Button, Center, Container, Flex, Input, Spinner, Text, Textarea, VStack, useToast } from '@chakra-ui/react';
import React,{useState} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/product/productActions';
import {ArrowLeftIcon,ArrowRightIcon} from "@chakra-ui/icons";
import { Link } from 'react-router-dom';

const AdminAddProducts = () => {

    const [product,setProduct] = useState({
        image:"",
        title:'',
        description:'',
        price:''
    })
    const dispatch = useDispatch()
    const toast = useToast()
    const store= useSelector(store=>store.product)
    console.log(store);
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addProduct(product))
          toast({
          title: 'Product Added Successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
    }

    if(store.isAddLoading){
        return (
                <Spinner
                    mt='10%'
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
        )
    }
    return (
        
           <Box border='1px solid' h='85vh'bgColor='gray'>
            <Flex justifyContent={'space-between'} margin={'20px'}>
                <Link to='/admin'>
                <Button  padding={'20px'} colorScheme='red'  alignSelf={'initial'} variant={'solid'}><ArrowLeftIcon/></Button>
                </Link>
                <Link to='/products'>
                <Button  padding={'20px'} colorScheme='red'  alignSelf={'initial'} variant={'solid'}><ArrowRightIcon/></Button>
                </Link>
            </Flex>
            <AbsoluteCenter axis='both' bgColor='white' w='40%'margin={'auto'} padding={'1%'} boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'borderRadius={'1rem'}>
                <Container>
                    <Text fontSize={'2rem'}>Product Form</Text>
                    <form onSubmit={handleSubmit}>
                        <VStack>
                            <Input name='image' value={product.image} onChange={handleChange} type='text' placeHolder={'Enter Image URL'}></Input>
                            <Input name='title' value={product.title} onChange={handleChange} type='text' isRequired='true' placeHolder={'Enter Product Title'}></Input>
                            <Input name='price' value={product.price} onChange={handleChange} placeHolder={'Enter Product Price'} type='number'></Input>
                            <Textarea name='description' value={product.description} onChange={handleChange} type='text' placeholder='Enter Product Description'></Textarea>
                            <Button type='submit' colorScheme='facebook' alignSelf={'flex-start'}>Add Product</Button>
                        </VStack>
                    </form>
                </Container>
            </AbsoluteCenter>
           </Box>
    );
}

export default AdminAddProducts;
