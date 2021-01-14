import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class YemekList extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.info.title} - {this.props.currentCategory}
        </h2>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Yemek Adı</th>
              <th>Ölçü</th>
              <th>Birim</th>
              <th>Stok Adedi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="warning"
                  >
                    Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
