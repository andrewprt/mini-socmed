import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFriendComment, deleteFriendComment } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateFriendComment: (param) => dispatch(updateFriendComment({ id: param.id, body: param.body, postId: param.postId })),
        onDeleteFriendComment: (param) => dispatch(deleteFriendComment({ id: param.id, postId: param.postId }))
    }
}

class FriendPostComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            email: '',
            body: '',
            id: ''
        };

        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeBody(event) {
        this.setState({ body: event.target.value });
    }

    handleToggle(event) {
        event.preventDefault();
        this.setState({ isEdit: !this.state.isEdit });
    }

    async handleSubmit(event) {
        const props = this.props;
        const state = this.state;
        const component = this;
        event.preventDefault();
        const myPromise = new Promise(function (resolve) {
            resolve(props.onUpdateFriendComment({
                id: state.id,
                body: state.body,
                postId: props.postId
            }))
        });

        myPromise.then(function () {
            component.setState({ isEdit: !state.isEdit });
        });
    }

    componentDidMount() {
        this.setState({ name: this.props.name, email: this.props.email, body: this.props.body, id: this.props.id, isEdit: false });
    }

    render() {
        const { isEdit, name, email, body, id } = this.state;
        const { onDeleteFriendComment, postId } = this.props;
        return (
            isEdit === false
                ?
                <div>
                    <h2>{id} - {name}</h2>
                    <p>{email}</p>
                    <p>{body}</p>
                    <button onClick={this.handleToggle}>Edit Comment</button>
                    <button onClick={() => onDeleteFriendComment({ id: id, postId: postId })}>Delete Comment</button>
                </div>
                :
                <form>
                    {name}
                    {email}
                    <input
                        type='input' value={body}
                        placeholder='Input content here...' onChange={this.handleChangeBody}
                    />
                    <input type="button" value="Submit"
                        onClick={this.handleSubmit} />
                    <button onClick={this.handleToggle}>Cancel</button>
                </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(FriendPostComment);
