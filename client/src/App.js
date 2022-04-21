import logo from './logo.svg';
import './App.css';
import { CallApi } from './hooks';

function App() {

  const data = CallApi();

  console.log(data);

  const DisplayAnimals = data.map(
    (animal) => {
      return (
        <tr>
          <td>{animal.name}</td>
          <td>{animal.species}</td>
        </tr>
      )
    }
  )

  return (
    <div className="App">
      <table className="table table-striped">
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
      </table>
    </div>
  );
}

export default App;
