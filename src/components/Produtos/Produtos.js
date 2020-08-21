import React from "react";
import ProdutoItem from './ProdutoItem'

import styled from 'styled-components'

const GridProdutos = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
`
const Container = styled.div `
    border: 1px solid black;
`


class Produtos extends React.Component {

  render() {
   /*  console.log(this.props.produtosDoApp) */
    return (
      <Container>
          <h2>Produtos  </h2> <br/>
       <GridProdutos>
        {this.props.produtosDoApp.map(produto =>{
        return  <ProdutoItem 
          produtos={produto} 
          adicionarProdutoCarrinho={this.props.adicionarProdutoCarrinho}/>})}
        </GridProdutos>
        </Container>
    );
  }
}
export default Produtos;