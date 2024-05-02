"use client";

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #f1f1f1;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  background: #0f52ba;
  padding: 0 65px;
  width: auto;
  height: 101px;
`;

export const TitleHeader = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: #fff;
`;

export const SubStyle = styled.span`
  font-size: 20px;
  font-weight: 100;
  padding-left: 10px;
`;

export const ContainerShoppingCart = styled.div`
  display: flex;
`;

export const ContainerCard = styled.ul`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 4fr);
  gap: 15px;
  padding: 118px 248px;
`;

export const ContainerCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  height: 100%;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #fff;
  width: 218px;
  height: 100%;
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.08);
`;

export const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  background: #0f52ba;
  color: #fff;
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-transform: uppercase;
  gap: 7px;
  cursor: pointer;
`;

export const CardDescription = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 15px 0;
`;

export const NameProduct = styled.span`
  width: auto;
  font-size: 16px;
`;

export const Price = styled.button`
  border: none;
  color: #fff;
  background: #373737;
  border-radius: 5px;
  width: 100%;
  height: 26px;
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.span`
  display: flex;
  font-size: 10px;
`;

export const ErrorText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: red;
  width: 100%;
  height: 400px;
`;
