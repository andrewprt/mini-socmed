import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateComment, deleteComment } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateComment: (param) => dispatch(updateComment({ id: param.id, body: param.body, postId: param.postId })),
        onDeleteComment: (param) => dispatch(deleteComment({ id: param.id, postId: param.postId }))
    }
}

class PostComment extends Component {
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
            resolve(props.onUpdateComment({
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
        const { onDeleteComment, postId } = this.props;
        return (
            isEdit === false
                ?
                <div className="comments">
                    <h2>{id} - {name}</h2>
                    <p className="comments--email">{email}</p>
                    <p>{body}</p>
                    <div className="posts--form-buttonGroup">
                        <button onClick={this.handleToggle}>Edit Comment</button>
                        <button onClick={() => onDeleteComment({ id: id, postId: postId })}>Delete Comment</button>
                    </div>
                </div>
                :
                <form className="posts--form-edit">
                    <div className="posts--form-inputGroup">
                        <span>Name</span>
                        <input
                            type='input' value={name}
                            placeholder='Input name here...' disabled
                        />
                    </div>
                    <div className="posts--form-inputGroup">
                        <span>Email</span>
                        <input
                            type='input' value={email}
                            placeholder='Input email here...' disabled
                        />
                    </div>
                    <div className="posts--form-inputGroup">
                        <span>Content</span>
                        <input
                            type='input' value={body}
                            placeholder='Input content here...' onChange={this.handleChangeBody}
                        />
                    </div>
                    <div className="posts--form-buttonGroup">
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleToggle}>Cancel</button>
                    </div>
                </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(PostComment);
