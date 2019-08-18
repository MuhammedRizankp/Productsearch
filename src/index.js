import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Search from './components/search.js';
import Product from './components/products.js';


class App extends Component {
 render() {
  const products=[
    {name:"Acer",price:"$999",category:"laptops",instock:true},
    {name:"Dell",price:"$899",category:"laptops",instock:true},
    {name:"Macbook",price:"$1200",category:"laptops",instock:false},
    {name:"Asus",price:"$949",category:"laptops",instock:true},
    {name:"Lenovo",price:"$799",category:"laptops",instock:false},
    {name:"iphoneX",price:"$1000",category:"mobile",instock:true},
    {name:"Samsung",price:"$110",category:"mobile",instock:true},
    {name:"Honor",price:"$150",category:"mobile",instock:true},
    {name:"Redmi",price:"$200",category:"mobile",instock:false}];
 

 
    return (
      <div>
       <Search/>
       <Product show={products} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
