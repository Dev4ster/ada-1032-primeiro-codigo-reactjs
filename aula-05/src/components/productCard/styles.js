import styled from "styled-components";

export const Container = styled.div`
  background-color: gray;
  position: relative;
  display: flex;
  width: 100%;
  height: 300px;
  flex-direction: column;
  h3 {
    font-weight: 700;
    font-size: 16px;
    z-index: 9;
    position: relative;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

export const ProductInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  position: relative;
  z-index: 9;
  margin-top: auto;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductDetailsButton = styled.div`
  background-color: lightgray;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 12px;
  color: #333;
`;

export const ProductAddToCardButton = styled.div`
  background-color: lightgreen;
  padding: 4px;
  border-radius: 4px;
  color: #333;
`;
