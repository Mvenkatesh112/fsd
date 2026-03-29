import { Nav, Navbar } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" >
          <Navbar.Brand href="#home">CMRIT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </div>
  );
} 
export default App;
