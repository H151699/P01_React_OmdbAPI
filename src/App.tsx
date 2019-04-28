import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Mvtable from './MvTable';
import $ from 'jquery'
import * as PropTypes from 'prop-types'
import { resolveSoa } from 'dns';






class App extends React.Component<any, any> {

  

  constructor(props:any) {
    super(props);
    this.state = {};

    /*
   
    
    const movies = [
      {id: "0", title: "batman", year: 1888, released: "movie", runtime:"136 min", Genre:"Action, Adventure, Comedy, Sci-Fi", 
        director:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",Language:"English", poster_src:"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" },
      
      {id: "1", title: "wonderwoman", year: 1888, released: "movie", runtime:"136 min", Genre:"Action, Adventure, Comedy, Sci-Fi", 
        director:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",Language:"English", poster_src:"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" },
      

    ]
    this.state={
      headRows:[
        'title',
        
      ]
    }

    this.state ={rows:[
      <p key="0"> this is my row0</p>,
      <p key="1"> this is my row1</p>,
      <p key="2"> this is my row2</p>

    ]}


    var movieRows:any = []
    movies.forEach((movie)=> {
      //console.log(movie.title);

    const movieRow = <Mvtable mv={movie} /> // pass movie : mv to the component:Mvtable

      // const movieRow = <table key={movie.id}>
      //   <thead>
      //     <tr>
      //       <td> ID </td>
      //       <td> Title </td>
      //       <td> Year </td>
      //       <td> Runtime </td>
      //       <td> Genre </td>
      //       <td> Director </td>
      //       <td> Language </td>
      //       <td> Released </td>
      //       <td> Poster </td>

      //     </tr>

      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td>{movie.id}</td>
      //       <td>{movie.title}</td>
      //       <td>{movie.year} </td>
      //       <td>{movie.runtime}</td>
      //       <td>{movie.Genre}</td>
      //       <td>{movie.director}</td>
      //       <td>{movie.Language}</td>
      //       <td>{movie.released}</td>
      //       <td><img alt="poster" width="50" src={movie.poster_src}/></td>
      //     </tr>
      //   </tbody>

      //   </table>
      // movieRows.push(<p key = {movie.id}> movie title: {movie.title}</p>)
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}

   *comment out dummy data/
    
/*********************************************************************************************************************** */
    this.search();
    

  }// constructor

  
  // componentDidMount(){
  //   fetch('http://www.omdbapi.com/?t=woman&apikey=e83ce568')
  //   .then(res => {
  //     return res.json();
  //   }).then(data => {
     

  //     let movie = data.res.map((m:any) => {

  //     })

  //   })
  // }


  search(){
    console.log("search")
    const urlString = "http://www.omdbapi.com/?i=tt0944947&Season=1&apikey=e83ce568"
    

    $.ajax({

      url: urlString,
      success:(searchRes) => {
         console.log(" fetched data successfully");
         console.log(searchRes);
         console.log(searchRes.title)

        const res = searchRes.res
        //console.log(res[10]);
       
        var movies:any = []
        

        if(!res){
          return
        }else 

        res.forEach((m:any) => {

          console.log(m.title)
          
          const movie = <Mvtable mv = {m} />

          movies.push(movie)

          
        })
        
    
        this.setState({rows: movies})
       

         
        
      },
      error:(xhr, status, err) =>{
        console.log("Failed to fetch data")
      }

    })
  }









  render() {

 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            OMDB MOVIE API
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