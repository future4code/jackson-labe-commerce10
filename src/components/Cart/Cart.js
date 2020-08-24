import React from "react";
import styled from 'styled-components'

const ContainerItem = styled.div ` 
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  box-shadow: -2px 3px 4px #7e7e7e;
  background-color: #4682b4;

  @media (min-width: 690px){
    width: 95%;
    height: 100%;
    justify-self: right;
  }
`;

const Title = styled.h3 ` 
  font-size: 1.5em;
  text-align: center;
  font-family: sans-serif;
  text-shadow: -2px 1px black;
  font-weight: 700;
  color: #696969;
  margin: 10px 0px 8px;
`;

const CardList = styled.div ` 
 display: flex;
 flex-direction: column;
 position: relative;
 word-wrap: break-word;
 width: 90%;

 p{
   margin: 0px 0px 4px 25px;
   font-weight: 500;
   text-shadow: -1px 1px 4px white;
 }
 `;

const Botao = styled.button ` 
  width: 15%;
  border-radius: 100px;
  position: absolute;
  left: 4em;
  top: 2.3em;

  @media (min-width:698px){
    width: 25%;
  }
`;

const Total = styled.h3`  
  text-align: center;
  text-shadow: -2px 1px 5px blue;
`;

const Finish = styled.button`
  width: 80%;
  margin: 0px 0px 5px 25px;
`;

  class Cart extends React.Component {

  render() {

    return (       
      <ContainerItem>
          <Title>Carrinho:</Title>
          <CardList>
            {this.props.addProdutosCarrinho.map(product => 
           <>
             <p>{product.nome} </p>
             <p>{product.price}</p>
             <p>{product.quantidade}X</p>
            <Botao 
              onClick = {()=> this.props.removerProdutoCarrinho(product.id)}>
           X</Botao>
           </>
             )}
          </CardList>
          <Total>Total: R$ {this.props.addProdutosCarrinho.reduce((total, product) => 
          {return total + product.price * product.quantidade;}, 0)}</Total>
          <Finish>Finalizar Compra</Finish>
      </ContainerItem>
    );
  }
}
export default Cart;