import React from "react";

import styled from 'styled-components'



const ContainerItem = styled.div ` 
    border: 1px solid #000;
`
const ContainerInfo = styled.div ` 
    display: flex;
    flex-direction: column;
`

class ProdutoItem extends React.Component {

  render() {
    const produtosApp = this.props.produtos
   /*  console.log(produtosApp) */
    return (
       
        <ContainerItem>
            <ContainerInfo>
           <p>{produtosApp.name}</p>
           <p>{produtosApp.price}</p>
           <button onClick={() => this.props.adicionarProdutoCarrinho(produtosApp.id)}>Add ao carrrinho</button>
           </ContainerInfo> 
        </ContainerItem>
       
    );
  }
}
export default ProdutoItem;