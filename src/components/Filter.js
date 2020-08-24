import React from 'react';
import styled from 'styled-components'

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 85vh;
    border: 1px solid black;
    padding: 0 40px 0 15px;
    margin-left: 15px;
    margin-top: 15px;
`

class Filter extends React.Component {

    onMinValueChange = (event) => {
        const getInputMinValue = Number(event.target.value);

        this.props.onMinValueFilterChange(getInputMinValue);
    }

    onMaxValueChange = (event) => {
        const getInputMaxValue = Number(event.target.value);

        this.props.onMaxValueFilterChange(getInputMaxValue);
    }

    onSearchProductChange = (event) => {
        const getProductName = Number(event.target.value);

        this.props.onSearchProductFilterChange(getProductName);
    }

    render() {
        return (
            <FilterContainer>
                <h2>Filtros:</h2>
                <label htmlFor="valorMinimo">Valor Mínimo:</label>
                <input type="number" id="valorMinimo" onChange={this.onMinValueChange}/>
                <label htmlFor="valorMaximo">Valor Máximo:</label>
                <input type="number" id="valorMaximo" onChange={this.onMaxValueChange}/>
                <label htmlFor="buscarPorNome">Buscar produto:</label>
                <input id="buscarPorNome" onChange={this.onSearchProductChange}/>
            </FilterContainer>
        )
    }
}

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