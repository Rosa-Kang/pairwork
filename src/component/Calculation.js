import React, { Component } from "react";

export default class Calculation extends Component {
  render() {
    return (
      <div>
        <table style="width:100%">
          <tr>
            <th>Qty</th>
            <th>Unit</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Weight</th>
            <th>Food Group</th>
          </tr>
          <tr>
            <td>{.image}</td>
            <td>{.qty}</td>
            <td>{.unit}</td>
            <td>{.food}</td>
            <td>{.clories}</td>
            <td>{.weight}</td>
            <td>{.foodgroup}</td>
         </tr>
        </table>
      </div>
    );
  }
}
