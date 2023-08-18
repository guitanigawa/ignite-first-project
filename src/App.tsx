import Container from "./components/Container";
import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

export default function App() {
    
  return (
    <>
      <Header/>
      
      <Container>
         <Sidebar/>
         <Post/>
      </Container>
    </>
  )
}


