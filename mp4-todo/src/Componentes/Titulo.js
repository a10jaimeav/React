import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Titulo extends Component {
    static propTypes = {titulo:PropTypes.string,
                        propietario:PropTypes.string.isRequired}

    render() {
      let {titulo, propietario} = this.props;
      return (
        <div>{titulo + ' ' + propietario}</div>
    )
  }
}
//Valor por defecto si no llega nada
Titulo.defaultProps = {
  titulo: 'Las tareas de '
};
