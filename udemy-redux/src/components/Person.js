import React {Component} from 'react';

class Person extends Component{
    constructor(props) {
        super(props);
    }

    // est appellé qd le composant va etre monté dans le DOM
    componentWillMount() {

    }

    // est appelé qd le composant va etre rendu et monter ds le DOM
    render() {
        return(

        );
    }

    // est appellé qd le composant est monté ds le DOM
    // faire les effets de bord

    // appelle une base de donnée
    //asynchrone
    componentDidMount() {

    }

    // est appele qd les props changent
    componentWillReceiveProps(nextProps) {

    }

    // retourne un bool
    shouldComponentUpdate(nextProps, nextState) {

    }

    //
    componentWillUpdate(nextProps, nextState) {

    }

    //
    componentDidUpdate() {

    }
}