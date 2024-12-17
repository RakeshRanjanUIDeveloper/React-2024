import React from 'react'
import Calculate from './Calculate';
import Display from './Display';
import Button from './Button';
import Profile from './Profile';
import Card from './Card';
import Greeting from './Greeting';
import ProductList from './ProductList';
import products from './ProductData';
import Counter from './Counter';
import UserDetails from './UserDetails';
import ToggleButton from './ToggleButton';
import Login from './Login';

const PracticeJSX = () => {
    const name = "Rakesh Ranjan"
    //let todayDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const todayDate = new Date().toLocaleDateString();
    //const timing = new Date().toLocaleString('en-US', {hour:'numeric', hour12:true})
    const timing = new Date().getHours();
    const myStyling = {
        color: "Green",
        fontWeight:800,
        fontFamily:"GraphikBold",
        fontSize:'20px'
    }
  return (
    <div>
        <h2>My Name is {name}</h2>
        <h2>Today date is {todayDate}</h2>
        <h2>Now time is {timing}</h2>
        <h1>
        {
            timing < 12 ? "Good Morning" : "Good Evening"
        }
        </h1>
        <Calculate />
        <h2 style={{color:"Red", fontWeight:"700"}}>You are awesome Chat GPT</h2>
        <h3 style={myStyling}>Keep learning</h3>
        <Display />
        <Button label="Button One" />
        <Button label="Button Two" />
        <Button label="Button Three" />
        <Profile />
        <Card />
        <Greeting name="Rakesh" number="4" />
        <ProductList products={products} />
        <Counter />
        <UserDetails />
        <ToggleButton />
        <Login />

        {/* https://chatgpt.com/c/67605ed5-6be8-800b-bf73-f94ff8b86b1e */}
    </div>
  )
}

export default PracticeJSX