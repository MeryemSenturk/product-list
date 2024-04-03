import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({item}) {
  return (
    
    <Card className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-5">
      <Card.Header className="bg-secondary text-uppercase">
        {item.price}$ 
        <button>🖤</button>

        </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={item.image} />
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
