import React from 'react'
import styled from 'styled-components'
import Cart from './components/Cart/Cart'
import Filter from './components/Filter'



const ContainerImg = styled.figure`
  width: 85%;
  text-align: center;
  font-weight: 550;
  font-size: 1.6rem;
  text-shadow: -1px 1px 4px blue;
  border: thin solid white;
  margin: .3em;
  padding: .4em;
  box-shadow: -5px 5px;

  @media (min-width: 698px){
    margin:0%;
    font-size: 1rem;

  }
`;

const Image = styled.img`
  width: 90%;
  height: 75%;
`;

const FigCaption = styled.figcaption`
  display: flex;
  flex-direction:column;

  p{
    margin: 0;
    margin-bottom: 8px;
  }
`;

const Paragrafe = styled.p`
  font-size: 1rem;
  color:  red;
  margin-bottom: 2px;
`;

const Button = styled.button`
  height: 5%;
  width: 50%;
  border-radius: 7px;
  margin-left: 5.5em;
  word-wrap: break-word;
  font-size: .5em;
  :hover{
    outline:none
  };
  :focus{
    outline:none;
    box-shadow: 4px 4px withe
  };

  @media (min-width: 698px){
    width: 70%;
    font-size: ${(props) => props.visibility ? ".6rem" : "1rem"};
    font-weight: 600;
    margin-left: 15%;
    height: 30px;
  }
`;

const Father = styled.main`
  @media (min-width: 698px){
  }
  
`;

const BigHugh = styled.div`
  @media (min-width: 698px){
    display: grid;
    grid-template-columns: ${(props) => props.visibility ? "1fr 1fr 3fr" : "1fr 3fr"};
    background-color: #314772;
    column-gap: 5px;
    height: 94vh;
  }
`;

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  background-color: #314772;

  @media (min-width: 698px){
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    align-items: center;
    justify-items: center;
  }
`;

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #314772;

  @media (min-width: 698px){
    justify-content: none;
    position: static;
  }
`;

const MenuSuspenso = styled.select`
  margin: 15px;
  width: 68%;
  box-shadow: -4px 4px;
  height: 40%;
  :focus{
    outline:none;
  };

  @media (min-width: 698px){
    max-width: 20%;
  }
`;

const Text = styled.h5`
  font-size: 1rem;
  text-align: left;
  padding-left: .5em;
  margin:5px;
  padding-top: 10px;
  color: white;
  text-shadow: -3px 2px black;
  font-family: sans-serif;

  @media (min-width: 698px){
    padding-left: 10em;
  }
`;

const TakeCart = styled.section`
  position: fixed;
  width: 80%;
  left: 50px;
  top: 150px;

  @media (min-width: 698px){
    position: static;
    overflow: hidden;
    width: 100%;
  }
`;

const ImgButton = styled.img`
  position: fixed;
  width: 4em;
  height: 4em;
  border-radius: 150px;
  top: 85px;
  left: 250px;
  padding: 0;
  border: none;
  box-shadow: -1px -2px 4px gray;
  transition: box-shadow 0.5s ease 0s;

  :focus{
    outline: none;
    box-shadow: -2px 2px 2px black;
  };

  :hover{
    box-shadow: 1px 3px 4px white;
  };


  @media (min-width: 698px){
    top: 43em;
    left: 102em;
  }
`;


export class App extends React.Component{
  state={
    cardProducts:[
      {
        name: "camisa-1",
        imageUrl: <Image src= "/imagens/temme1.jpg"/>,
        id: 1,
        price: 79.99
      },
      {
        name: "camisa-2",
        imageUrl: <Image src= "/imagens/temme2.jpg"/>,
        id: 2,
        price: 49.99
      },
      {
        name: "camisa-3",
        imageUrl: <Image src= "/imagens/temme3.jpg"/>,
        id: 3,
        price: 59.99
      },
      {
        name: "camisa-4",
        imageUrl: <Image src= "/imagens/temme4.jpg"/>,
        id: 4,
        price: 29.99
      },
      {
        name: "camisa-5",
        imageUrl: <Image src= "/imagens/temme5.jpg"/>,
        id: 5,
        price: 29.99
      },
      {
        name: "camisa-6",
        imageUrl: <Image src= "/imagens/temme6.jpg"/>,
        id: 6,
        price: 49.99
      },
      {
        name: "camisa-7",
        imageUrl: <Image src= "/imagens/temme7.jpg"/>,
        id: 7,
        price: 79.99
      },
      {
        name: "camisa-8",
        imageUrl: <Image src= "/imagens/temme8.jpg"/>,
        id: 8,
        price: 59.99
      }
    ],

    filters:{
      minInputValue: null,
      maxInputValue: null,
      searchByName: "",
    },

    carrinho:  [],
    orderProducts: "Preço: Crescente",
    visibleCart: false,
  };

  componentDidMount() {
    const cartString = localStorage.getItem("carrinho");
    const cartObject = JSON.parse(cartString);
    if(cartObject) {
      this.setState({carrinho: cartObject});
    };
  };

  componentDidUpdate() {
    const objectCart = this.state.carrinho
    localStorage.setItem("carrinho", JSON.stringify(objectCart));
  };
  
  orderChange = (event) =>{
    this.setState({
      orderProducts: event.target.value
    });
  };

  updateValue = (newValue) => {
    this.setState({filters: {...this.state.filters, ...newValue,}
    });
  };

  onSearchProductChange = (event) => {
    this.setState({
      searchByName: event.target.value
    })
  };

  filterProducts = () => {
    const filters = this.state.filters
    const search = this.state.searchByName
    const productsArray = this.state.cardProducts
    const filterCurrentProducts = productsArray.filter((produto) => {
      const name = produto.name.toLowerCase()
      return name.indexOf(search) > -1 
     })
    .filter((produto) => {
      return produto.price < (filters.maxInputValue || Infinity)
    })
    .filter((produto) => {
      return produto.price > (filters.minInputValue || 0)
    });

    return filterCurrentProducts
  };  

  // filterProducts = () => {
  //   const filters = this.state.filters
  //   const search = this.state.searchByName
  //   const filterCurrentProducts = this.state.cardProducts.filter((produto) => {
  //     const name = produto.name.toLowerCase()
      // return name.indexOf(search) > -1 
      // if (this.state.maxInputValue !==0 ) {
      //   return produto.price >= this.state.minInputValue &&
      //          produto.price <= this.state.maxInputValue;
      // } else {
      //   return this.setState({maxInputValue: Infinity}, this.filterProducts)
      // }
  //   });
  //   const filterCurrentProducts1 = this.state.cardProducts.filter((produto) => {
  //     return produto.price < (filters.maxInputValue || Infinity)
  //   });
  //   const filterCurrentProducts2 = this.state.cardProducts.filter((produto) => {
  //     return produto.price > (filters.minInputValue || 0)
  //   });
    
  //   return (filterCurrentProducts, filterCurrentProducts1, filterCurrentProducts2)
  // };

  // this.setState({produtos: filterCurrentProducts, filterCurrentProducts1, filterCurrentProducts2})


  // updateMinInputValue = (newMinInputValue) => {
  //   this.setState({minInputValue: newMinInputValue}, this.filterProducts)
  // }

  // updateMaxInputValue = (newMaxInputValue) => {
  //   this.setState({maxInputValue: newMaxInputValue}, this.filterProducts)
  // } 

  /* Adcionando ao carrinho */

  addProductCart = (id) => {
    let newCart = this.state.carrinho
    let produtoExiste =  newCart.findIndex(produto => produto.id === id)
    console.log(produtoExiste, "produto existe")
    console.log(this.state.cardProducts, "cardprodutos")
    console.log(id, "id")
    if(produtoExiste === -1){
      const produto =  this.state.cardProducts.find(item  => item.id === id) 
      const produtoAddCarrinho = {
      id: produto.id,
      price: produto.price,
      quantidade: 1
    }
    newCart.push(produtoAddCarrinho)
    }else {
      const qtde = newCart[produtoExiste].quantidade
      newCart[produtoExiste] = {
        ...newCart[produtoExiste], 
        quantidade: qtde + 1
      }
    }
    this.setState({ carrinho: newCart })
  };
                     
  //Removendo o produto do carrinho
  removerProdutoCarrinho = (produtoId) => {
      const removeProdutoCarrinho = this.state.carrinho.filter(produto => {
      return produtoId !== produto.id;
    })
    this.setState({carrinho : removeProdutoCarrinho})
  };

  toggleCart = () =>{
    this.setState({visibleCart: !this.state.visibleCart})
  };

  // sortOrder = (a,b) =>{
  //   const order = this.state.orderProducts
  //   if(order === 'Preço: Crescente'){
  //     return a.price - b.price
  //   }else {
  //     return b.price - a.price
  //   }
  // };

  render() {
    const visualization = this.state.cardProducts
    const orderVisualization = visualization.sort((a,b) =>{
      const order = this.state.orderProducts
      if(order === 'Preço: Crescente'){
        return a.price - b.price
      }else {
        return b.price - a.price
      }
    });

    const renderizeCard = this.state.cardProducts.map((products) =>{
      return(
        <ContainerImg>
          {products.imageUrl}
          <FigCaption>
            <Paragrafe>{products.name}</Paragrafe>
            <p>R$ {products.price}</p>
            <Button visibility = {this.state.visibleCart} onClick={() => this.addProductCart(products.id)}>Adicionar ao carrinho</Button>
          </FigCaption>
        </ContainerImg>
      )
    });
    
    const filters = this.state.filters
    const search = this.state.searchByName
    const productsArray = this.state.cardProducts
    const takeFunction = productsArray.filter((produto) => {
      const name = produto.name.toLowerCase()
      return name.indexOf(search) > -1 
     })
    .filter((produto) => {
      return produto.price < (filters.maxInputValue || Infinity)
    })
    .filter((produto) => {
      return produto.price > (filters.minInputValue || 0)
    });


    const showMe = this.state.visibleCart && 
    <TakeCart>
      <Cart
      addProdutosCarrinho = {this.state.carrinho}
      removerProdutoCarrinho = {this.removerProdutoCarrinho}
      />
    </TakeCart>
    
    

    return (
      <Father>
        <Header>
          <Text>Quantidade de produtos: {this.state.cardProducts.length}</Text>
          <MenuSuspenso value={this.state.orderProducts} onChange={this.orderChange}>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </MenuSuspenso>
        </Header>
        <BigHugh visibility = {this.state.visibleCart}>
          <Filter
            valueFilterChange = {this.updateValue}
            valueSearch = {this.state.searchByName}
            searchChange = {this.onSearchProductChange}
          // onMinValueFilterChange={this.updateMinInputValue}
          // onMaxValueFilterChange={this.updateMaxInputValue}
          />
          {takeFunction}
          <ImgButton onClick={this.toggleCart} src="/imagens/carrinho-de-compras.png"/>
          {showMe}
          <BigContainer>
            {renderizeCard}
          </BigContainer>
          
        </BigHugh>
      </Father>

    );
  };
}

export default App
