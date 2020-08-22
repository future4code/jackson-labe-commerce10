import React from 'react';
import styled from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 15%;
  background-color: #2f4f4f;
  padding-bottom: 20px;
  box-shadow: -2px 3px 4px #7e7e7e;

  label{
    font-weight: 500;
  };

  h2{
  font-size: 1.5em;
  text-align: center;
  font-family: sans-serif;
  text-shadow: -2px 1px black;
  font-weight: 700;
  color: #696969;
  margin: 10px 0px 8px; 
  }
`;

const Input = styled.input`
  width: 40%;
  background-color: #e1d0bd;

  :focus{
    outline:none;
    box-shadow: 2px 2px black;
  }
`;

const ButtonGetFilter = styled.button`
  margin-top: 10px;
  width: 30%;
  font-weight: 700;
  border-radius: 100px;
`;

class Filter extends React.Component {

  onMinValueChange = (event) => {
    const getInputMinValue = Number(event.target.value);
    this.props.onMinValueFilterChange(getInputMinValue);
  };

  onMaxValueChange = (event) => {
    const getInputMaxValue = Number(event.target.value);
    this.props.onMaxValueFilterChange(getInputMaxValue);
  };

  onSearchProductChange = (event) => {
    const getProductName = Number(event.target.value);
    this.props.onSearchProductFilterChange(getProductName);

  };

  // getFilter = () =>{
  //   {this.setState ${({visibleFilter}) !this.visibleFilter}}
  // };

  render() {
    return (
      <FilterContainer>
        <h2>Filtros:</h2>
        <label htmlFor="valorMinimo">Valor Mínimo:</label>
        <Input type="number" id="valorMinimo" onChange={this.onMinValueChange}/>
        <label htmlFor="valorMaximo">Valor Máximo:</label>
        <Input type="number" id="valorMaximo" onChange={this.onMaxValueChange}/>
        <label htmlFor="buscarPorNome">Buscar produto:</label>
        <Input id="buscarPorNome" onChange={this.onSearchProductChange}/>
        <ButtonGetFilter /*onclick={this.getFilter}*/>Filtrar</ButtonGetFilter>
      </FilterContainer>
    )
  }
};

export default Filter;

/* filterProducts = () => {
    const filterCurrentProducts = this.state.produtos.filter((produto) => {
      if (this.state.maxInputValue !==0 ) {
        return produto.price >= this.state.minInputValue &&
               produto.price <= this.state.maxInputValue;
      } else {
        return this.setState({maxInputValue: Infinity}, this.filterProducts)
      }
    });

    this.setState({produtos: filterCurrentProducts})
  }

  updateMinInputValue = (newMinInputValue) => {
    this.setState({minInputValue: newMinInputValue}, this.filterProducts)
  }

  updateMaxInputValue = (newMaxInputValue) => {
    this.setState({maxInputValue: newMaxInputValue}, this.filterProducts)
  } */

  /* { <Filter
            onMinValueFilterChange={this.updateMinInputValue}
            onMaxValueFilterChange={this.updateMaxInputValue}
          /> } */