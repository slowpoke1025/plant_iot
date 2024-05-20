import React from 'react';
import { Box, Link as ChakraLink, Flex, Tabs, TabList, Tab, TabIndicator, Image, Button, useTab, useMultiStyleConfig } from '@chakra-ui/react';
import { Link, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import logo from "./assets/logo.png"
const App = () => {


  return (
    <Flex h={"100dvh"} flexDirection="column" p="2.5rem" bg="#E4E6D9">


      {/* 
      <Tabs position='relative' colorScheme="teal" align='start' size='lg' onChange={(index) => console.log(index)} >

        <TabList>
          <Box p="5">
            <Image src={logo} h="5rem" />
          </Box>
          <Tab as={Link} to="/">
            Home
          </Tab>
          <Tab as={Link} to="/about" >
            About
          </Tab>
          <Tab as={Link} to="/contact">
            Contact
          </Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='teal.500' borderRadius='1px' />
      </Tabs>   */}

      <Flex as="nav" p={4} pl={6} align="center" borderBottom="1px solid lightgrey" gap="1rem" bg="#FCFCF9">

        <Image src={logo} h="5rem" />

        <ChakraLink
          as={NavLink}
          to="/"
          p={2}
          fontSize="1.1rem"
          fontWeight="bold"
          _activeLink={{ color: '#609c5a' }}>
          Home
        </ChakraLink>
        <ChakraLink as={NavLink} to="/about" p={2} fontSize="1.1rem" fontWeight="bold" _activeLink={{ color: '#609c5a' }}>
          About
        </ChakraLink>
        <ChakraLink as={NavLink} to="/contact" p={2} fontSize="1.1rem" fontWeight="bold" _activeLink={{ color: '#609c5a' }}>
          Contact
        </ChakraLink>
      </Flex>

      <Box p={7} flex="1" bg="#FCFCF9">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Flex >
  );
};

export default App;
