"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useQuery } from 'react-query/react';
import { useState } from "react";
import apiProducts from "@/app/api/api";
import ShoppingCart from "@/app/components/Cart/cart";
import { InterfaceApi } from "@/app/interface/interface";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Container,
  ContainerHeader,
  TitleHeader,
  SubStyle,
  ContainerCard,
  ContainerCardDescription,
  Card,
  CardDescription,
  NameProduct,
  Price,
  Description,
  ButtonCard,
  ErrorText,
} from "@/app/home/products.style";

import { RiShoppingBag3Line } from "react-icons/ri";
import Footer from "../components/Footer/footer";


const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function HomePage() {
  const [cartItems, setCartItems] = useState<InterfaceApi[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  
  const addToCart = (item: InterfaceApi) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  
  const updateQuantity = (index: number, newQuantity: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  
  const clearCart = () => {
    setCartItems([]);
    
    setIsCartOpen(false);
  };

 
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  
  const {
    data: products,
    error,
    isLoading,
  } = useQuery("productsData", apiProducts, {
    onError: () => {
      setErrorMessage(
        " ❌ Aconteceu um erro inesperado.",
      );
    },
  });


  if (error) return <ErrorText>{errorMessage}</ErrorText>;

  return (
    <Container className={montserrat.className}>
      <ContainerHeader>
        <TitleHeader>
          MKS
          <SubStyle>Sistemas</SubStyle>
        </TitleHeader>

        
        <ShoppingCart
          cartItems={cartItems}
          toggleCart={toggleCart}
          isCartOpen={isCartOpen}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      </ContainerHeader>

      <ContainerCard>
        {isLoading
          ? 
            Array.from({ length: 8 }).map((_, id) => (
              <li key={id}>
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
              </li>
            ))
          : 
            products.map((product: InterfaceApi) => (
              <Card key={product.id}>
                <ContainerCardDescription>
                  <Image
                    src={product.photo}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "138px" }}
                    alt="Products"
                  />
                  <CardDescription>
                    <NameProduct>{product.name}</NameProduct>
                    <Price>R${product.price}</Price>
                  </CardDescription>
                  <Description>{product.description}</Description>
                </ContainerCardDescription>

                <ButtonCard onClick={() => addToCart(product)}>
                  <RiShoppingBag3Line />
                  Comprar
                </ButtonCard>
              </Card>
            ))}
      </ContainerCard>
      <Footer />
    </Container>
  );
}
