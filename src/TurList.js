import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class TurList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
//Kompenent yerleşti, kategorileri doldur diyoruz
  componentDidMount(){
    this.getCategories();
  }
  getCategories = ()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));;
  }

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active = {category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        
      </div>
    );
  }
}
