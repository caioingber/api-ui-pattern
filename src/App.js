import React, { Component } from 'react';
import './App.css';
// import Slider from './Slider'
import Container from './Container'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    for(let i=0; i < 10; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        let meal = {
          title: data.meals[0].strMeal,
          cuisine: data.meals[0].strArea,
          image: data.meals[0].strMealThumb,
          recipe: data.meals[0].strInstructions
        }

        let foods = this.state.recipes
        foods.push(meal)
        this.setState({
          recipes: foods
        })
      })
    }
  }

  render() {
    console.log(this.state.recipes)
    if(!this.state.recipes.length) {
      return null
    } else {
    // let list = this.state.recipes.map(i => <Slider content={i} />)
    return(
    <div className='App'>
      <header>Random Meal Slider API</header>
      <Container content={this.state.recipes}/>
    </div>
    )
    }
  }
}

export default App;
