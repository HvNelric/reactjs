import React, {Component} from 'react';

class PersonCreator extends Component{

    state = {
        nom: "",
        age: "",
        loc: ""
    };

    nomHandler = (event) => {
        this.setState({
            nom: event.target.value
        });
    };

    ageHandler = (event) => {
        this.setState({
            age: event.target.value
        });
    };

    locHandler = (event) => {
        this.setState({
            loc: event.target.value
        });
    };

    render() {
        return(
            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" onChange={this.nomHandler} value={this.state.nom}></input>
                <label htmlForr="age" >Age</label>
                <input type="text" id="age" onChange={this.ageHandler} value={this.state.age}></input>
                <label htmlFor="localisation">loca</label>
                <input type="text" id="localisation" onChange={this.locHandler} value={this.state.loc}></input>
                <button onClick={() => this.props.created(this.state)}>creer</button>
            </div>
        );
    }
}

export default PersonCreator;