import React from 'react';
import './App.css';
import Produtos from './components/Produtos/Produtos'
import Carrinho from './components/Carrinho/Carrinho'

import styled, { ThemeConsumer } from 'styled-components';

/* Estilos */



const ContainerCarrinho = styled.div ` 
    border: 1px solid #000;
    background-color:#C0C0C0;
`


const ContainerApp = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 16px;
  gap: 8px;
`

const produtos = [
     {
       id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 1200.00,
        imageUrl: "https://picsum.photos/200/200",
     },
     {
        id: 4,
        name: "Foguete deborah",
        value: 80,
        imageUrl: "https://picsum.photos/200/200",
     },
     {

        id: 2,
        name: "Foguete Machado",
        value: 100,
        imageUrl: "https://picsum.photos/200/200",
     }
      ]


class App extends React.Component{
  
  state = {
    produtos : produtos,
    carrinho:  [],
    /* prodMax : "",
    prodMini: "", */

  }


      /* Adcionando ao carrinho */
     adicionarProdutoCarrinho = (id) => {
       console.log("ola")
      let novoCarrinho = this.state.carrinho
        //buscar produto na lista de carrinho pra saber se ja foi adcionado
        //produtoExiste recebe o index de cada produto que está no carrinho
       const produtoExiste =  novoCarrinho.findIndex(produto => produto.id === id)
      /*  console.log(produtoExiste)
       console.log(this.carrinho)
       console.log(id, "id da função carrinho") */

      //Método findindex senao encontrar um produto no array retorna -1
          if(produtoExiste === -1){
          const produto =  this.state.produtos.find(item  => item.id === id) 
         /*  console.log(produto, "produto") */
          const produtoAddCarrinho = {
            id: produto.id,
            nome: produto.name,
            valor: produto.value,
            quantidade: 1
        }

       
        novoCarrinho.push(produtoAddCarrinho)
        /* console.log(novoCarrinho, "novo carrinho") */

       } else {
        const qtde = novoCarrinho[produtoExiste].quantidade
        novoCarrinho[produtoExiste] = {
            ...novoCarrinho[produtoExiste], 
            quantidade: qtde + 1
        }
    }
    console.log(novoCarrinho, "novo carrinho")
    this.setState({ carrinho: novoCarrinho })
}

            
           
  //Removendo o produto do carrinho
  removerProdutoCarrinho = (produtoId) => {
      const removeProdutoCarrinho = this.state.carrinho.filter(produto => {
      return produtoId !== produto.id;
    })
    this.setState({carrinho : removeProdutoCarrinho})
  }

     render(){

        return (
           <ContainerApp >
            <Produtos
              imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
             produtosDoApp = {this.state.produtos}
             adicionarProdutoCarrinho = {this.adicionarProdutoCarrinho}
            /> 
          <ContainerCarrinho>

            <Carrinho
            addProdutosCarrinho = {this.state.carrinho}
            removerProdutoCarrinho = {this.removerProdutoCarrinho}
            
            />
          
          </ContainerCarrinho>
           </ContainerApp>


  );
 }
}

export default App;
