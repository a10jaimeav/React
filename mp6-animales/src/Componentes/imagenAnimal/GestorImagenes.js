import React, { Component } from 'react'
import ANIMALES from '../data/Animales'
import ImagenAnimal from './ImagenAnimal.js';

export default class GestorImagenes extends Component {
  state = {animal:'cocodrilo'}

  render() {
    const lista = Object.keys(ANIMALES);
    return(
        <div>
            <h2>Lo pedido</h2>
            {lista.map(nombreAnimal => (
                <button
                    key={nombreAnimal}
                    onClick={() => this.setState({animal:nombreAnimal})}
                    disabled={nombreAnimal===this.state.animal}
                >
                    {nombreAnimal}
                </button>
            ))}
            <ImagenAnimal animal={this.state.animal} />
        </div>
    )
    }
}
