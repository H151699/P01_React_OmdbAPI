import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class Mvtable extends React.Component<any, any>{

    render(){
        
        return(
            <table key={this.props.mv.id}>
        <thead>
          <tr>
            <td> ID </td>
            <td> Title </td>
            <td> Year </td>
            <td> Runtime </td>
            <td> Genre </td>
            <td> Director </td>
            <td> Language </td>
            <td> Released </td>
            <td> Poster </td>

          </tr>

        </thead>
        <tbody>
          <tr>
            <td>{this.props.mv.id}</td>
            <td>{this.props.mv.title}</td>
            <td>{this.props.mv.year} </td>
            <td>{this.props.mv.runtime}</td>
            <td>{this.props.mv.Genre}</td>
            <td>{this.props.mv.director}</td>
            <td>{this.props.mv.Language}</td>
            <td>{this.props.mv.released}</td>
            <td><img alt="poster" width="50" src={this.props.mv.poster_src}/></td>
          </tr>
        </tbody>

        </table>
        )
       

    }
}

export default Mvtable