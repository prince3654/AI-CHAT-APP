
import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      {/* <h1>hii </h1> */}
      <Route path="/" component={HomePage} exact/>
      <Route path="/chat" component={ChatPage}/>
      {/* <Button colorScheme='blue'>Button</Button> */}
    </div>
  )
}

export default App;
