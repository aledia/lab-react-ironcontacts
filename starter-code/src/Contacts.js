import React, { Component } from 'react'
import contacts from './contacts.json';



class Contacts extends Component {
 


  render() {
    return (
      
          <tr className="contact">
            <td><img  src={this.props.pictureUrl} height="100px"/></td>
            <td>{this.props.name}</td>
            <td> {this.props.popularity}</td>
            <td><button className="deleteBtn" onClick={this.props.deleteContact}>Delete </button></td> 
          </tr>
            
      
    )
  }
}
export default  Contacts