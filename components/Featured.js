import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222222;
  color: #ffffff;
  padding: 50px 0px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Disc = styled.p`
  color: #aaaaaa;
  font-size: 0.8rem;
`;

const ColumsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Disc>{product.description}</Disc>
              <ButtonsWrapper>
                <ButtonLink
                  href={`/products/` + product._id}
                  outline={1}
                  white={1}
                  size="l"
                >
                  Read More
                </ButtonLink>
                <Button onClick={addFeaturedToCart} primary={1} size="l">
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://mandara-ecommerce.s3.amazonaws.com/1693852166533.jpg"
              alt=""
            />
          </Column>
        </ColumsWrapper>
      </Center>
    </Bg>
  );
}
