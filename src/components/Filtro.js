import React from 'react';
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 85vh;
    border: 1px solid black;
    padding: 0 40px 0 15px;
    margin-left: 15px;
    margin-top: 15px;
`

class Filtro extends React.Component {
    state = {
        valorMinimo: 0,
        valorMaximo: 0,
        buscarProduto: "",
    }

    onChangeValorMinimo = (event) => {
        this.setState({valorMinimo: event.target.value})
    }

    onChangeValorMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})
    }

    onChangeBuscarProduto = (event) => {
        this.setState({buscarProduto: event.target.value})
    }

    render() {
        return (
            <ContainerFiltro>
                <h2>Filtros:</h2>
                <label htmlFor="valorMinimo">Valor Mínimo:</label>
                <input type="number" id="valorMinimo" onChange={this.onChangeValorMinimo}/>
                <label htmlFor="valorMaximo">Valor Máximo:</label>
                <input type="number" id="valorMaximo" onChange={this.onChangeValorMaximo}/>
                <label htmlFor="buscarPorNome">Buscar produto:</label>
                <input id="buscarPorNome" onChange={this.onChangeBuscarProduto}/>
            </ContainerFiltro>
        )
    }
}

export default Filtro;