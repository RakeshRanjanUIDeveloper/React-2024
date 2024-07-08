import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import AnimalShow from "./components/AnimalShow";
import './App.css'

//Create a component
function getRandomAnimals(){
    const animals = ['cat', 'dog', 'horse', 'elephant', 'rat'];
    return animals[Math.floor(Math.random()*animals.length)];
}
function App(){
    let [animals, setAnimal] = useState([]);

    const handleClick = () => {
       setAnimal([...animals, getRandomAnimals()]) 
    }

    const renderAnimals = animals.map((animal, index) =>{
        return <AnimalShow type={animal} key={index} />
    })
    return (
       /*  <div>
            <h2>Personal Digital Assistant</h2>
            <ProfileCard title="Title One" handle="Handle One" description="Description One" />
            <ProfileCard title="Title Two" handle="Handle Two" description="Description Two" />
            <ProfileCard title="Title Three" handle="Handle Three" description="Description Three" />
        </div> */
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderAnimals}</div>
        </div>
    )
}

export default App;