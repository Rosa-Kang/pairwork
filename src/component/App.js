import React, { Component } from "react";
import axios from "axios";
import Recipe from "../component/Recipe";
import NutFactor from "../component/NutFactor";
import Calculation from "../component/Calculation";
import Header from "../component/Header";
import "../styles/App.css";

class App extends Component {
  state = {
    foods: [],
    food: []
  };

  render() {
    const handler = event => {
      const query = event.target.query.value;

      let config = {
        headers: {
          "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
          "X-RapidAPI-Key": "896a95c876msh8612c58cf9b9e01p17995ejsn7a0921b19462"
        }
      };
      const nutUrl = `https://nutritionix-api.p.rapidapi.com/v1_1/search/${query}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_saturated_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_potassium%2Cnf_total_carbohydrate%2Cnf_dietary_fiber%2Cnf_sugars%2Cnf_protein%2Cnf_vitamin_a_dv%2Cnf_vitamin_c_dv%2Cnf_calcium_dv%2Cnf_iron_dv%2C`;
      event.preventDefault();
      axios.get(nutUrl, config).then(response => {
        this.setState({
          foods: response.data
        });
        const call = this.state.foods.hits.find(food => {
          return food.fields.item_name.toLowerCase() === query.toLowerCase();
        });
        this.setState({
          food: call
        });
        console.log(call);
        console.log(this.state.food.fields.nf_calories);
      });
    };
    return (
      <div className="App">
        <Header />
        <form onSubmit={handler}>
          <textarea name="query" />
          <button>Caculate Callories</button>
        </form>
        <Calculation />
        <Recipe />
        <NutFactor food={this.state.food} />
      </div>
    );
  }
}

export default App;
