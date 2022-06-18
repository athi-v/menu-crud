import { Form , Button} from "react-bootstrap";

function App() {
  return (
    <div>
<h1>Coming Soon</h1>
<Button variant='primary' >Ok</Button>    
<Form.Label>Email</Form.Label>
<Form.Control type='email' size='md' />
    </div>
  );
}

export default App;
