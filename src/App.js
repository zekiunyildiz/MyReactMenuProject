import React, { Component } from "react";
import Navi from "./Navi";
import YemekList from "./YemekList";
import TurList from "./TurList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import SepetDetay from "./SepetDetay";
import NotFound from "./NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      //defined
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.warning(product.productName + " Sepete Eklendi.");
  };

  removeFromCart = product => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.success(product.productName + " Sepetten Silindi.");
  };

  render() {
    let turInfo = { title: "Tür" };
    let yemekInfo = { title: "Yemek Listesi" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <TurList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={turInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
              <Route
                  exact
                  path="/"
                  render={(props) => (
                    <YemekList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={yemekInfo}
                    />
                  )}
                />


                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <SepetDetay
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
