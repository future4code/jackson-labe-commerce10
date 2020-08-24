import React from 'react';
import styled from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: #2f4f4f;
  padding-bottom: 20px;
  box-shadow: -2px 3px 4px #7e7e7e;

  label{
    font-weight: 500;

    @media (min-width: 698px){
      font-size: .8rem;
    }
  };

  h2{
  font-size: 1.5em;
  text-align: center;
  font-family: sans-serif;
  text-shadow: -2px 1px black;
  font-weight: 700;
  color: #696969;
  margin: 10px 0px 8px; 
  };

  @media (min-width: 698px){
    width: 18vw;
    height: 100%;
    padding-bottom: 0px;
    margin-right: 0px;

  }
`;

const Input = styled.input`
  width: 40%;
  background-color: #e1d0bd;

  :focus{
    outline:none;
    box-shadow: 2px 2px black;
  };

  @media (min-width: 698px){
    width: 70%;
  }
`;



class Filter extends React.Component {

  onMinValueChange = (event) => {
    const getInputMinValue = Number(event.target.value)
    const newValue = {"minInputValue": getInputMinValue,}
    this.props.valueFilterChange(newValue)
  };

  onMaxValueChange = (event) => {
    const getInputMaxValue = Number(event.target.value)
    const newValue = {"maxInputValue": getInputMaxValue}
    this.props.valueFilterChange(newValue)
  };

  // onSearchProductChange = (event) => {
  //   const getProductName = Number(event.target.value);
  //   this.props.onSearchProductFilterChange(getProductName);

  // };

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
        <Input type="text" id="buscarPorNome" value={this.props.valueSearch} onChange={this.props.searchChange}/>
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