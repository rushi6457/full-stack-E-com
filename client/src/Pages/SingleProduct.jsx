import { Box, Button, Flex, Heading, Image, Select, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "../Styles/Single.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cart/cartActions';
const SingleProduct = () => {
    const ref = useParams()
    const user = useSelector(store =>store.login)
    console.log(user);
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const [data,setData] = useState([])
    const [count, setCount] = useState(1);
 
    const getProduct = async() =>{
        let res = await axios.get(`http://localhost:5000/product/${ref.id}`)
       return res.data;
    }
  

    useEffect(()=>{
        getProduct()
        .then((res)=>setData(res.product))    
    },[])
    
       const [cartData,setCartData] = useState({
        userId:user.token.userId,
        productId:ref.id,
      
    })
 
    const handleAddCart = (e) =>{
     
        dispatch(addToCart(cartData))
        // navigate("'/cart")
    }
 
    
    return (
        <Box
               w='90%'
               margin='auto'
               marginTop={'5%'}
               className={styles.single}
        >
            <Flex
                justifyContent={'space-between'}
                align={'center'}
                gap={'50px'}
                padding={'10px'}
                w='90%'
            >
                <Image 
                    borderRadius={'10px'}
                    w='40%' 
                    height={'100%'}  
                    src={data.image}></Image>
                <VStack textAlign={'justify'}>
                    <Heading  textAlign={'justify'} textColor={'red'}>{data.title}</Heading>
                    <Text textAlign={'justify'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus minima recusandae, esse accusamus explicabo hic, odit, quibusdam dolorem voluptas animi consectetur a sequi sit. Reiciendis quam perferendis quia quisquam.
                    Deleniti doloribus saepe vero nobis dolorum tempora maxime eligendi, distinctio minima nulla at incidunt doloremque provident temporibus delectus blanditiis! Veritatis distinctio dolorem qui repellat dignissimos cum maxime sequi porro nulla?</Text>
                    <Text fontSize={'2rem'} textColor={'green'} textAlign={'justify'}>{`Price : $${data.price}`}</Text>
                    <Flex justifyContent={'space-between'}gap={'10%'} w='100%' >
                        <Flex gap={'20px'}>
                         
                            {/* <Button 
                                borderRadius={'3px'}
                                onClick={()=>setCount(count+1)}
                                fontWeight={'300'}
                                fontSize={'1.7rem'} 
                                variant={'outline'} 
                                colorScheme='red'>+</Button>
                            <Button 
                                borderRadius={'3px'}
                                fontWeight={'300'}
                                fontSize={'1.7rem'} 
                                variant={'outline'} 
                                colorScheme='red'>{count}</Button> */}
                            {/* <Button 
                                borderRadius={'3px'}
                                disabled ={count === 1}
                                onClick={()=>setCount(count-1)}
                                fontWeight={'300'}
                                fontSize={'1.7rem'} 
                                variant={'outline'} 
                                colorScheme='red'>-</Button> */}
                            
                        </Flex>
                        <Button 
                            onClick={handleAddCart}
                            borderRadius={'0px'}
                            w='100%' 
                            variant={'solid'} 
                            colorScheme='red'>Add To Cart</Button>
                    </Flex>
                </VStack>
            </Flex>
        </Box>
    );
}

export default SingleProduct;
