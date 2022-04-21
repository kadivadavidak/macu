import logo from './logo.svg';
import './App.css';
import { CallApi } from './hooks';
import Table from 'react-bootstrap/Table';

function App() {

  const data = CallApi();

  console.log(data);

  const DisplayAnimals = data.map(
    (animal) => {
      return (
        <tr key={animal.id}>
          <td>{animal.name}</td>
          <td>{animal.age}</td>
          <td>{animal.species}</td>
        </tr>
      )
    }
  )

  return (
    <div className="App">
      <Table striped hover>
        <thead>
          <tr>
          <th>Name/Age</th>
          <th></th>
          <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {DisplayAnimals}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
