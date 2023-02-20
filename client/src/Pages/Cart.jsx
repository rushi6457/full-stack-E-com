import { Grid, GridItem, Image } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {

    const [data,setData] = useState([])

    const getData = async() =>{
        let res = await axios.get(`http://localhost:5000/getcart`)
       return res.data
    }
   useEffect(()=>{
     getData()
     .then((res)=>setData(res.cart))
   },[])
   console.log(data);
    return (
        <div>
           <Grid>
            {
                data.map((el)=>{
                    return (
                        <GridItem>
                            <Image src={el.image}/>
                        </GridItem>
                    )
                })
            }
           </Grid>
        </div>
    );
}

export default Cart;
