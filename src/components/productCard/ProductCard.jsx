import { useState } from "react";
// import Button from "react-bootstrap/Button";
import {Card, Button} from "react-bootstrap";
import {FaHeart} from "react-icons/fa"
import "./ProductCard.scss"

function ProductCard({item}) {

  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked(!liked)
  }

  return (
    <Card className=" productcard col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4 mx-auto">
      <Card.Header className="bg-secondary d-flex justify-content-between">
        <p className="mb-1" style={{ fontSize: "20px", fontWeight: "bold" }}>
          {item.price}$
        </p>

        <button onClick={handleLikeClick} type="button" class="btn btn-light">
          <FaHeart color={liked ? "red" : "black"} />
        </button>
        
      </Card.Header>
      <Card.Body>
        <Card.Img className="img" variant="top" src={item.image} />
        <div className="title bg-secondary">
          <p>{item.title}</p>

        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
