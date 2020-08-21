import React from "react";
import CarrinhoItem from './CarrinhoItem'

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

 const CardLista = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 

  span{
    font-size: 18px;
    display: flex;
    
  }
`
const Titulo = styled.h3 ` 
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

class Carrinho extends React.Component {

  render() {

    return (       
        <ContainerItem>
               <ContainerInfo>
                <Titulo>Carrinho:</Titulo>
                <CardLista>
                  {this.props.addProdutosCarrinho.map(produto => 
                  <>
                    <span>{produto.nome} </span>
                    <span>{produto.valor}</span>
                 <Botao 
                 onClick = {()=> this.props.removerProdutoCarrinho(produto.id)}>
                  X</Botao>
                  </>
                    )}
     
                 </CardLista>
           </ContainerInfo> 
                  <Total>Total: R$ {this.props.addProdutosCarrinho.reduce((total, produto) => 
                  {return total + produto.valor * produto.quantidade;}, 0)}</Total>
          </ContainerItem>
       
    );
  }
}
export default Carrinho;