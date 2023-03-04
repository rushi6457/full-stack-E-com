import { Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    

    useEffect(()=>{
        axios.get(`https://e-com-78xd.onrender.com/user/users`)
        .then((res) =>console.log(res))
    },[])
    return (
        <div>
           <Flex justifyContent={'space-between'}margin={'20px'} alignItems={'center'}>
            <Link to='/addproducts'>
                <Button>Add products</Button>
            </Link>
            <Link>
                <Button>Check users</Button>
            </Link>
           </Flex>
        </div>
    );
}

export default Admin;
