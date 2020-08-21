import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import Cart from './components/Cart/Cart'
=======
import Carrinho from './components/Carrinho/Carrinho'
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51

const ContainerCarrinho = styled.div ` 
    border: 1px solid #000;
    background-color:#C0C0C0;
    
`
<<<<<<< HEAD
const ContainerApp = styled.div `
  display: flex;
 `

const BigContainer = styled.main`
  /* grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 2fr); 
  justify-items: center;
  align-items: center;*/
  background-color: #314772; 
  flex-direction: column; 
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  justify-content: center;
  width: 100vw;
   
`;

const ContainerImg = styled.figure`
  float: right;  
  width: 30%;
  text-align: center;
  font-weight: 550;
  font-size: 1.2rem;
  border: thin solid white;
  margin: .3em;
  padding: .4em;
  
=======

const ContainerImg = styled.figure`
  float: rigth;
  width: 30%;
  text-align: center;
  font-weight: 550;
  font-size: 2.2rem;
  border: thin solid white;
  margin: .3em;
  padding: .4em;
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
`;

const Imagem = styled.img`
  width: 90%;
`;

const FigCaption = styled.figcaption`
  display: flex;
  flex-direction:column;
`;

<<<<<<< HEAD
const Text = styled.h5`
  /* display: flex;
  justify-content: space-between; */
=======
const BigContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background-color: #314772;
`;


const Text = styled.h5`
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
  font-size: 1rem;
  text-align: left;
  padding-left: .5em;
  margin:0;
`;

<<<<<<< HEAD
const Button = styled.button ` 
  font-size: 16px;
  width: 90%;
  margin-left: 15px;
  
  &:hover{
    color: #FFf;
    background-color: #696969;
    
  }
`

export class App extends React.Component{
  state={
    cardProducts:[
        {
        imageUrl: <Imagem src= "/imagens/temme1.jpg"/>,
        id: 1,
        price: 79.99
        },
      {
        imageUrl: <Imagem src= "/imagens/temme2.jpg"/>,
        id: 2,
        price: 49.99
        },
      {
        imageUrl: <Imagem src= "/imagens/temme3.jpg"/>,
        id: 3,
        price: 59.99
      },
        {
          imageUrl: <Imagem src= "/imagens/temme4.jpg"/>,
          id: 4,
          price: 29.99
      },
        {
          imageUrl: <Imagem src= "/imagens/temme5.jpg"/>,
          id: 5,
          price: 29.99
      },
        {
        imageUrl: <Imagem src= "/imagens/temme6.jpg"/>,
        id: 6,
        price: 49.99
      },
        {
          imageUrl: <Imagem src= "/imagens/temme7.jpg"/>,
          id: 7,
          price: 79.99
      },
        {
          imageUrl: <Imagem src= "/imagens/temme8.jpg"/>,
          id: 8,
          price: 59.99
=======
export class App extends React.Component{
  state={
    cardProducts:[
      {
      imageUrl: <Imagem src= "/imagens/temme1.jpg"/>,
      temme: 1,
      price: 79.99
      },
      {
      imageUrl: <Imagem src= "/imagens/temme2.jpg"/>,
      temme: 2,
      price: 49.99
      },
      {
        imageUrl: <Imagem src= "/imagens/temme3.jpg"/>,
        temme: 3,
      price: 59.99
      },
      {
        imageUrl: <Imagem src= "/imagens/temme4.jpg"/>,
        temme: 4,
      price: 29.99
      },
      {
        imageUrl: <Imagem src= "/imagens/temme5.jpg"/>,
        temme: 5,
      price: 29.99
      },
      {
        imageUrl: <Imagem src= "/imagens/temme6.jpg"/>,
        temme: 6,
      price: 49.99
      },
      {
        imageUrl: <Imagem src= "/imagens/temme7.jpg"/>,
        temme: 7,
      price: 79.99
      },
      {
        imageUrl: <Imagem src= "/imagens/temme8.jpg"/>,
        temme: 8,
      price: 59.99
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
      }
    ],
    
    carrinho:  [],
  }

  /* Adcionando ao carrinho */
<<<<<<< HEAD
     addProductCart = (id) => {
        let newCart = this.state.carrinho
        let produtoExiste =  newCart.findIndex(produto => produto.id === id)
        console.log(produtoExiste, "produto existe")
  
        console.log(this.state.cardProducts, "cardprodutos")
        console.log(id, "id")
            if(produtoExiste === -1){
        const produto =  this.state.cardProducts.find(item  => item.id === id) 
        const produtoAddCarrinho = {
=======
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
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
            id: produto.id,
            price: produto.price,
            quantidade: 1
        }
<<<<<<< HEAD
        newCart.push(produtoAddCarrinho)
=======

        novoCarrinho.push(produtoAddCarrinho)
        /* console.log(novoCarrinho, "novo carrinho") */

>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
       } else {
        const qtde = newCart[produtoExiste].quantidade
        newCart[produtoExiste] = {
            ...newCart[produtoExiste], 
            quantidade: qtde + 1
        }
    }
    console.log(newCart, "novo carrinho")
    this.setState({ carrinho: newCart })
}
                     
  //Removendo o produto do carrinho
  removerProdutoCarrinho = (produtoId) => {
      const removeProdutoCarrinho = this.state.carrinho.filter(produto => {
      return produtoId !== produto.id;
    })
    this.setState({carrinho : removeProdutoCarrinho})
  }

  render() {
    const renderizeCard = this.state.cardProducts.map((products) =>{
      return(
        <ContainerImg>
            {products.imageUrl}
          <FigCaption>
            {products.price}
<<<<<<< HEAD
            <Button onClick={() => this.addProductCart(products.id)}>Adicionar ao carrinho</Button>
=======
            <button>Adicionar ao carrinho</button>
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
          </FigCaption>
        </ContainerImg>
        
      )
    })
    return (
<<<<<<< HEAD
      <ContainerApp>
      <BigContainer>
          <Text>Quantidade de produtos: {this.state.cardProducts.length}</Text>
        {renderizeCard}
        </BigContainer>
        <ContainerCarrinho>
            <Cart
=======
      <BigContainer>
          <Text>Quantidade de produtos: {this.state.cardProducts.length}</Text>
        {renderizeCard}
      
        <ContainerCarrinho>

            <Carrinho
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
            addProdutosCarrinho = {this.state.carrinho}
            removerProdutoCarrinho = {this.removerProdutoCarrinho}
            />
          
          </ContainerCarrinho>
<<<<<<< HEAD
     
      </ContainerApp> 
=======
      </BigContainer>
>>>>>>> d186901e00ef9de4f7d111f1378c04a5d5131c51
    );
  }
}



export default App;
