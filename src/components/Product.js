import React from "react";
import { Card } from "react-bootstrap";

export default function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
        <div className="dd">{product.name}</div>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              {" "}
              {product.rating} from {product.numReviews}
            </div>
          </Card.Text>
          <Card.Text as="h3">{product.price}</Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
}
