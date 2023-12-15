import React from 'react'
import{Container,Box,Text,TabPanel,TabPanels,Tabs,Image,Tab,TabList} from '@chakra-ui/react'
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'
function HomePage() {
  return (
   <Container maxW="xl" centerContent>
        <Box 
         d="flex"
        justifyContent="center"
        p={3}
        as='b'
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
            <Text fontSize="4xl" fontFamily="Work sans">Let's Chat</Text>
        </Box>
        <Box
        bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs defaultIndex={1}>
 
  
  <TabList mb='1em'>
    <Tab width="50%">Login</Tab>
    <Tab width="50%">SignUp</Tab>
  </TabList>
   <TabPanels>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png'
      />
      <Login/>
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://images5.alphacoders.com/810/thumbbig-810547.webp'
      />
      
      <Signup/>
    </TabPanel>
    <TabPanel></TabPanel>
  </TabPanels>
</Tabs>

        </Box>
   </Container>
  )
}

export default HomePage
