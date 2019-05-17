import React from "react";

export default function NutFactor(props) {
  console.log(props.food)
  if(props.food.length!== 0)
  return (
    <section class="performance-facts">
      <header class="performance-facts__header">
        <h1 class="performance-facts__title">Nutrition Facts</h1>
        <p>Serving Size 1/2 cup (about 82g)</p>
        <p>Serving Per Container 8</p>
      </header>
      <table class="performance-facts__table">
        <thead>
          <tr>
            <th colspan="3" class="small-info">
              Amount Per Serving
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">

              <b>Calories </b>
              {props.food.fields.nf_calories}            

            </th>
            <td>Calories from Fat 130</td>
          </tr>
          <tr class="thick-row">
            <td colspan="3" class="small-info">
              <b>% Daily Value*</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Fat </b>
              {props.food.fields.nf_total_fat}g
            </th>
            <td>
              <b> {Math.round((props.food.fields.nf_total_fat)/65*100)}0%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell" />
            <th>Saturated Fat {props.food.fields.nf_saturated_fat}g</th>
            <td>
              <b>{Math.round((props.food.fields.nf_saturated_fat)/20*100)}%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell" />
            <th>Trans Fat {props.food.fields.nf_trans_fatty_acid}g</th>
            <td />
          </tr>
          <tr>
            <th colspan="2">
              <b>Cholesterol </b>
              {props.food.fields.nf_cholesterol}mg
            </th>
            <td>
              <b>{Math.round((props.food.fields.nf_cholesterol)/300*100)}%</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Sodium </b>
              {props.food.fields.nf_sodium}mg
            </th>
            <td>
              <b>{Math.round((props.food.fields.nf_sodium)/2400*100)}%</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Carbohydrate </b>
              {props.food.fields.nf_total_carbohydrate}g
            </th>
            <td>
              <b>{Math.round((props.food.fields.nf_total_carbohydrate)/300*100)}%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell" />
            <th>Dietary Fiber {props.food.fields.nf_dietary_fiber}g</th>
            <td>
              <b>{Math.round((props.food.fields.nf_dietary_fiber)/25*100)}%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell" />
            <th>Sugars {props.food.fields.nf_sugars}g</th>
            <td />
          </tr>
          <tr class="thick-end">
            <th colspan="2">
              <b>Protein </b>
              {props.food.fields.nf_protein}g
            </th>
            <td />
          </tr>
        </tbody>
      </table>

      <table class="performance-facts__table--grid">
        <tbody>
          <tr>
            <td colspan="2">Vitamin A {Math.round((props.food.fields.nf_vitamin_a_dv)/1000*100)}%</td>
            <td>Vitamin C {(props.food.fields.nf_vitamin_c_dv)/1000*100}%</td>
          </tr>
          <tr class="thin-end">
            <td colspan="2">Calcium {Math.round((props.food.fields.nf_calcium_dv)/1000*100)}%</td>
            <td>Iron {Math.round((props.food.fields.nf_iron_dv)/14*100)}%</td>
          </tr>
        </tbody>
      </table>

      <p class="small-info">
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily
        values may be higher or lower depending on your calorie needs:
      </p>

      <table class="performance-facts__table--small small-info">
        <thead>
          <tr>
            <td colspan="2" />
            <th>Calories:</th>
            <th>2,000</th>
            <th>2,500</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">Total Fat</th>
            <td>Less than</td>
            <td>65g</td>
            <td>80g</td>
          </tr>
          <tr>
            <td class="blank-cell" />
            <th>Saturated Fat</th>
            <td>Less than</td>
            <td>20g</td>
            <td>25g</td>
          </tr>
          <tr>
            <th colspan="2">Cholesterol</th>
            <td>Less than</td>
            <td>300mg</td>
            <td>300 mg</td>
          </tr>
          <tr>
            <th colspan="2">Sodium</th>
            <td>Less than</td>
            <td>2,400mg</td>
            <td>2,400mg</td>
          </tr>
          <tr>
            <th colspan="3">Total Carbohydrate</th>
            <td>300g</td>
            <td>375g</td>
          </tr>
          <tr>
            <td class="blank-cell" />
            <th colspan="2">Dietary Fiber</th>
            <td>25g</td>
            <td>30g</td>
          </tr>
        </tbody>
      </table>

      <p class="small-info">Calories per gram:</p>
      <p class="small-info text-center">
        Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
      </p>
    </section>
  );
  else
  return <div></div>
}
