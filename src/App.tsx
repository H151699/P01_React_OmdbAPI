import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';






class App extends React.Component<any, any> {

  

  constructor(props:any) {
    super(props);
    this.state = {};

    
    const movies = [
      {id: "0", title: "batman", Year_of_release: 1888, type: "movie"},
      {id: "1", title: "wnderwoman", Year_of_release: 2018, type: "movie"}

    ]

    this.state ={rows:[
      <p key="0"> this is my row0</p>,
      <p key="1"> this is my row1</p>,
      <p key="2"> this is my row2</p>

    ]}


    var movieRows:any = []
    movies.forEach((movie)=> {
      console.log(movie.title);

      movieRows.push(<p key = {movie.id}
      > movie title: {movie.title}</p>)
    })

    this.state = {rows: movieRows}

   
    



  }// constructor


  render() {

 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>

          <table>
            <tbody>
              <tr>
                <td>

                </td>
              </tr>
            </tbody>
          </table>

          

        </header>

        {this.state.rows}
        
      </div>
    );
  }
}

export default App;