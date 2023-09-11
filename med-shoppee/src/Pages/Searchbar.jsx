import React, { useState,useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  useToast,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();
  const {data,setdata}=useContext(AuthContext)

console.log(data)
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search logic and update results here

    toast({
      title: "Search Resullts",
      status: "success",
      duration: 2000,
      isClosable: true,
      render:()=>(
        <Box color="white" bg="orange"  p="20px" >{data.filter((e)=>setdata(e.data))}</Box>
    )
    
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic and update results here
    toast({
      title: "Search submitted.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
   <>
    <Flex >
    <Box as="form" onSubmit={handleSubmit} width="80%" margin="auto" marginTop={0} >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          margin="2%"
          children={<SearchIcon color="orange.300"   /> }
        />
        <Input
          type="text"
          placeholder="Search for Medicines and Health Products"
          value={searchTerm}
          bg={'gray.100'}
          onChange={handleSearch}
          margin="2%"
         
        />
        <IconButton
          aria-label="Search"
          width="15%"
          icon={<SearchIcon />}
          colorScheme="orange"
          margin="2%"
          type="submit"
          
        />
      </InputGroup>
    </Box>
    <Box>
      {data?<Box height={'20vh'}>
           <h1>{data.name}</h1>
      </Box>:""}
    </Box>
    </Flex>
   </>
  );
};

export default SearchBar;