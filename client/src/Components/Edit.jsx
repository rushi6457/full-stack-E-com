import { Button,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure, } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

const Edit = ({data,id}) => {
    
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [price,setPrice] = useState(null)
     const handleChange = (e) =>{

        setPrice({
            ...price
        })
        console.log(price);
    }
     const handleEdit = () =>{
        console.log(id);
        axios.put(` https://e-com-78xd.onrender.com/admin/updateproduct/${id}`,price)
        .then((res) =>console.log(res))
    }
    
    return (
        <div>
        <Button onClick={onOpen} variant={'solid'} colorScheme='blue'>EDIT</Button>  

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
            <Button onClick={handleEdit} variant='outline' colorScheme='blue'>Change Price</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
        </div>
    );
}

export default Edit;
