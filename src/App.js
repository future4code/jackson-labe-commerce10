import React from 'react'
import styled from 'styled-components'


const ContainerImg = styled.figure`
  float: rigth;
  width: 30%;
  text-align: center;
  font-weight: 550;
  font-size: 2.2rem;
  border: thin solid white;
  margin: .3em;
  padding: .4em;
`;

const Imagem = styled.img`
  width: 90%;
`;

const FigCaption = styled.figcaption`
  display: flex;
  flex-direction:column;
`;

const BigContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background-color: #314772;
`;


const Text = styled.h5`
  font-size: 1rem;
  text-align: left;
  padding-left: .5em;
  margin:0;
`;

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
      }
    ]
  }

  
  
  
  render() {
    const renderizeCard = this.state.cardProducts.map((products) =>{
      return(
        <ContainerImg>
            {products.imageUrl}
          <FigCaption>
            {products.price}
            <button>Adicionar ao carrinho</button>
          </FigCaption>
        </ContainerImg>
      )
    })
    return (
      <BigContainer>
          <Text>Quantidade de produtos: {this.state.cardProducts.length}</Text>
        {renderizeCard}
      </BigContainer>
    );
  }
}



export default App;
