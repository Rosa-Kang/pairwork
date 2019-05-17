import React, { Component } from "react";
import handler from "../component/App";

export default class Form extends Component {
  render() {
    return (
      <form className="form" onSubmit={handler}>
        <textarea className="textarea" name="query" rows="8" cols="50" />
        <button className="button">Caculate Callories</button>
      </form>
    );
  }
}
