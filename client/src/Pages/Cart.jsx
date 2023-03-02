import { Grid, GridItem, Image } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {

    const [data,setData] = useState([])
    const [id,setId] = useState({})
    let ids = []
    const getData = async() =>{
        let res = await axios.get(`http://localhost:5000/getcart`)
       return res.data
    }
    const cartData = async() =>{
    getData()
     .then((res)=>res.cart.map((el)=>ids.push(el.productId)))
    }
    console.log(ids);
   useEffect(()=>{
   cartData()
   },[])
 
    return (
        <div>
           {/* <Grid>
            {
                data.map((el)=>{
                    return (
                        <GridItem>
                            <Image src={el.image}/>
                        </GridItem>
                    )
                })
            }
           </Grid> */}
        </div>
    );
}

export default Cart;
