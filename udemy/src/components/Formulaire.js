import React, {Component} from 'react';


class Message extends Component{
    render() {
        return(
            <form className="form">
                <textarea maxLength="140" required></textarea>
                <div className="info">140</div>
                <button type="submit">Ok</button>
            </form>
        );
    }
}

export default Message;