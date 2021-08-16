import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../context/Shop/shopProvider';
import useBasketSaleTotal from '../../hooks/useBasketSaleTotal';

const BasketCheckout = ({ basketItems }) => {
  const { handleAddOneItem, handleRemoveOneItem, checkoutOrderNumber } =
    useContext(ShopContext);

  const [totalSaleAmount] = useBasketSaleTotal(basketItems);

  useEffect(() => {
    document
      .getElementsByTagName('section')[0]
      .scrollIntoView({ alignToTop: true });
  }, []);

  return (
    <Container>
      <BasketHeading>Basket Info.</BasketHeading>
      <Headings>
        <Heading>Product</Heading>
        <Heading>Description</Heading>
        <Heading>Quantity</Heading>
        <Heading>Total</Heading>
      </Headings>
      <PurchasesContainer>
        {basketItems.map((item) => (
          <PurchaseWrapper key={item.id}>
            <PurchaseImage src={item.img} />
            <PurchaseName>{item.productName}</PurchaseName>
            <PurchaseQuantity>
              <span onClick={() => handleAddOneItem(item)}>+</span>{' '}
              {item.quantity}{' '}
              <span onClick={() => handleRemoveOneItem(item)}>-</span>
            </PurchaseQuantity>
            <PurchasePrice>£{item.price * item.quantity}</PurchasePrice>
          </PurchaseWrapper>
        ))}
      </PurchasesContainer>
      <TestDiv>
        <OrderNumberContainer>
          <p>
            Order #: <span>{checkoutOrderNumber}</span>
          </p>
        </OrderNumberContainer>
        <BasketTotalContainer>
          <BasketTotalWrapper>
            <BasketSubTotal>
              <p>Subtotal:</p>
              <p>£{totalSaleAmount}</p>
            </BasketSubTotal>
            <BasketShipping>
              <p>Delivery:</p>
              <p>FREE</p>
            </BasketShipping>
            <BasketTotalAmount>
              <h2>TOTAL:</h2>
              <h2>£{totalSaleAmount}</h2>
            </BasketTotalAmount>
          </BasketTotalWrapper>
        </BasketTotalContainer>
      </TestDiv>
    </Container>
  );
};

export default BasketCheckout;

const Container = styled.section`
  padding: 2rem;
  width: 40%;
  /* border: 1px solid black; */
  height: 700px;
  user-select: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f8f8ff;
  border-radius: 1rem 0 0 1rem;

  @media screen and (max-width: 1200px) {
    min-width: 65%;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media screen and (max-width: 768px) {
    min-width: 90%;
  }
`;

const BasketHeading = styled.h2`
  margin-bottom: 1rem;
`;

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d9eef7;
  padding: 1rem 2rem;
  border-radius: 0.3rem;

  @media screen and (max-width: 500px) {
    padding: 0.5rem 1rem;
  }
`;

/////// rename this
const PurchasesContainer = styled.div`
  height: 80%;
  /* border: 1px solid red; */
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1); */
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--mainPurple);
  }

  scrollbar-color: var(--mainPurple) transparent;
  scrollbar-width: thin;
`;

const Heading = styled.p`
  font-weight: bold;
  font-size: 1.3rem;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const PurchaseWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  &:hover {
    background-color: #eee1f3;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;

const PurchaseImage = styled.img`
  width: 80px;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;

const PurchaseName = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const PurchaseQuantity = styled.p`
  font-size: 1.5rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }

  span {
    opacity: 0.4;
    cursor: pointer;

    &:hover {
      transform: scale(1.8);
    }
  }
`;

const PurchasePrice = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

/////////////////////////////////////////////////////// rename this
const TestDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
`;

const BasketTotalContainer = styled.div`
  /* border: 1px solid grey; */
  /* align-self: flex-end;
  justify-self: flex-end; */
  width: 40%;
  display: flex;
  /* margin-top: 2rem; */
  height: 25%;
  padding: 0.3rem;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const BasketTotalWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-between;

  P {
    font-weight: 400;
    color: grey;
  }
`;

const BasketSubTotal = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BasketShipping = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BasketTotalAmount = styled.div`
  display: flex;
  justify-content: space-around;

  h2 {
    color: var(--mainPurple);
    font-weight: 700;
  }
`;

const OrderNumberContainer = styled.div`
  /* border: 1px solid black; */
  align-self: center;

  p {
    font-style: italic;
    font-size: 1.2rem;
    font-weight: bold;
  }

  span {
    color: var(--mainPurple);
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 0.9rem;
    }
  }
`;
