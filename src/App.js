import { useState, useEffect } from 'react';

// import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]//Array destructuring
  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
    console.log("effect fired");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); //(callback ,dependencies array)

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField]);

  const onSearchChange = (event) => {

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }



  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        placeholder='search-monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />

    </div>
  );
}


// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // console.log("constructor");
//   }

//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users }
//           }
//         ));
//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
//     // console.log("render from AppJS");

//     const { monsters, searchField } = this.state;//De-structuring
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>



//         <SearchBox className='monsters-search-box' placeholder='search-monsters' onChangeHandler={onSearchChange} />

//         <CardList monsters={filteredMonsters} /> 

//       </div>
//     );
//   }
// }

export default App;
