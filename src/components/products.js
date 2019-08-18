import React, { Component } from 'react';
import './s.css'
class Product extends Component {


  render() {
   
    const showprod=this.props.show.map((item)=>{
      return(
     
      
      <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      </tr>
     
      
    );})
  
  return (
  <div className="products">
  <tr>
  <th>Name</th>
   <th>Price</th>
  
   </tr>
  <tbod>
{showprod}
  </tbod>
  </div>)
  
}}
export default Product;