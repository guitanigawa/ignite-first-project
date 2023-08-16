import Container from "./components/Container";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
    
  return (
    <>
      <Header/>
      
      <Container>
         <Sidebar/>
      </Container>
    </>
  )
}


