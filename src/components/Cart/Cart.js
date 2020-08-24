import React from "react";
import styled from 'styled-components'

const ContainerItem = styled.div ` 
    margin: 1vw;
    padding-left: 2vw;
    display: flex;
    flex-direction: column;
    height: 97vh;
    width: 15vw; 
`
const ContainerInfo = styled.div ` 
    display: flex;
    flex-direction: column; 
`

 const CardList = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
  span{
    font-size: 18px;
    display: flex;
    
  }
`
  const Title = styled.h3 ` 
    font-size: 28px;
    margin-top: 0%;
    color: #696969;

`
  const Botao = styled.button `   
    margin-top: 5px;
    margin-bottom: 3px;
    font-size: 16px;
    width: 15%;
    border-radius: 20%;

    &:hover{
      background-color:#808080;
      color: #fff;
      border: none;
    }

`
  const Total = styled.h3`  
  margin-left: 20px;
`

  class Cart extends React.Component {

  render() {

    return (       
        <ContainerItem>
               <ContainerInfo>
                    <Title>Carrinho:</Title>
                    <CardList>
                    {this.props.addProdutosCarrinho.map(product => 
                  <>
                    <span>{product.nome} </span>
                    <span>{product.price}</span>
                   <Botao 
                      onClick = {()=> this.props.removerProdutoCarrinho(product.id)}>
                  X</Botao>
                  </>
                    )}
     
                  </CardList>
               </ContainerInfo> 
                      <Total>Total: R$ {this.props.addProdutosCarrinho.reduce((total, product) => 
                  {   return total + product.price * product.quantidade;}, 0)}</Total>
          </ContainerItem>
       
    );
  }
}
export default Cart;