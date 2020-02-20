import React, { Component } from 'react';
import './App.css';
import Slider from './Slider'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      cuisine: "",
      image: "",
      recipe: "",
    }
  }
  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.meals[0].strMeal,
          cuisine: data.meals[0].strArea,
          image: data.meals[0].strMealThumb,
          recipe: data.meals[0].strInstructions
        })
      })
  }

  render() {
    console.log(this.state)
   return(<Slider />)
  }
}

export default App;
