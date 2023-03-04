import { Button, Center } from '@chakra-ui/react';
import React, { useState } from 'react';

const Pagination = ({current, total, onChange,data}) => {
    console.log(data)
    const previous = <Button isDisabled={current===1} variant={'outline'} colorScheme={'blue'} onClick={() => onChange(current - 1)}>PREV</Button>;
  const currentPage = (
    <Button variant={'outline'} colorScheme={'blue'} onClick={() => onChange(current)}>{current}</Button>
  );
  const next = <Button variant={'outline'} colorScheme={'blue'} onClick={() => onChange(current + 1)}>NEXT</Button>;
    return (
        <div>
            <Center gap='4' margin={'10'}>
                {/* <Button disabled={page===1} onClick={()=>setPage(page-1)}  variant={'outline'} colorScheme={'blue'} >PREV</Button>
                <Button  variant={'outline'} colorScheme={'blue'} >{page}</Button>
                <Button onClick={()=>setPage(page+1)}  variant={'outline'} colorScheme={'blue'} >NEXT</Button> */}
                  {previous}
                    {currentPage}
                    {next}
            </Center>
        </div>
    );
}

export default Pagination;