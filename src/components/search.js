import React, { Component } from 'react';
import './s.css'
class Search extends Component {
 

  render() {
    return (
      
       <form className="form">
     <input type="text" placeholder="Search"/>
       
       <p>
       <input type="checkbox"/>

       Only show products in stock
       
       </p>
       
       
       </form>
      
    );
  }
}
export default Search;