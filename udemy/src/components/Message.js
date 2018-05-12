import React, {Component} from 'react';

class Message extends Component{
    render() {
        return(
            <p className="user-message">
                {this.props.pseudo}: Chattons huhu !
            </p>
        );
    }
}

export default Message;