import React, { Component } from 'react';
import FriendPostDetail from './FriendPostDetail';

class FriendPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = () => {
        this.setState({ isExpand: !this.state.isExpand })
    }

    componentDidMount() {
        this.setState({ isExpand: false });
    }

    render() {
        const { title, body, id } = this.props;
        return (
            <div className="post">
                <h2 onClick={this.handleToggle}>{title}</h2>
                {
                    this.state.isExpand === true
                        ?
                        <FriendPostDetail body={body} id={id} />
                        :
                        null
                }
            </div>
        );
    }
}

export default FriendPost;
