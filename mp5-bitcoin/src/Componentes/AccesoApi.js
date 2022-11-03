import React, { Component } from 'react'
import PropTypes from 'prop-types'
//Obteniendo datos de http://www.coindesk.com/coindesk-api
const API_URL = "http://api.coindesk.com/v1/bpi/currentprice.json";

export default class AccesoApi extends Component {

    constructor(props){
        super(props);
        this.state = {bpi:{}}
    }
    componentDidMount() {
        this.leerTabla()
    }
    leerTabla = () => {
        //Lectura de API_URL y cuando termine, entonces recibo respuesta (res) que se envía a json y el resultado es el data, modificando el bpi
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const{bpi} = data;
                console.log(data); //Con esto veremos qué recibimos
                this.setState({bpi})
            });
    }
    visualizarCambio = () => {
        const {bpi} = this.state;
        const monedas = Object.keys(bpi);
        return monedas.map(divisa => (
            <div key={divisa}>
                1 BTC es {bpi[divisa].rate}
                &nbsp;
                <span>{bpi[divisa].description}</span>
            </div>
        ))
    }
    render() {
        return(
            <div>
                <h2>Cotización Bitcoin</h2>
                {this.visualizarCambio()}
            </div>
        )
    }
}
