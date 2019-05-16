import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost, deletePost } from '../actions';
import PostDetail from './PostDetail';

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdatePost: (param) => dispatch(updatePost({ id: param.id, title: param.title, body: param.body })),
        onDeletePost: (param) => dispatch(deletePost({ id: param.id }))
    }
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
            isEdit: false,
            title: '',
            body: '',
            id: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeBody(event) {
        this.setState({ body: event.target.value });
    }

    handleToggle(event) {
        event.preventDefault();
        this.setState({ isExpand: !this.state.isExpand });
    }

    handleToggleEdit(event) {
        event.preventDefault();
        this.setState({ isEdit: !this.state.isEdit });
    }

    async handleSubmit(event) {
        const props = this.props;
        const state = this.state;
        const component = this;
        event.preventDefault();
        const myPromise = new Promise(function (resolve) {
            resolve(props.onUpdatePost({
                id: state.id,
                title: state.title,
                body: state.body
            }))
        });

        myPromise.then(function () {
            component.setState({ isEdit: !state.isEdit });
        });
    }

    componentDidMount() {
        this.setState({ title: this.props.title, body: this.props.body, id: this.props.id, isEdit: false });
    }

    render() {
        const { isEdit, title, body } = this.state;
        const { id, onDeletePost } = this.props;
        return (
            <div>
                <div className="post">
                    {
                        isEdit === false
                            ?
                            <div className="posts--form-view">
                                <div onClick={this.handleToggle} >
                                    <h2>{id} - {title}</h2>
                                    <p>{body}</p>
                                </div>
                                <br />
                                <div className="posts--form-buttonGroup">
                                    <button onClick={this.handleToggleEdit}>Edit Post</button>
                                    <button onClick={() => onDeletePost({ id: id })}>Delete Post</button>
                                </div>
                            </div>
                            :
                            <form className="posts--form-edit">
                                <div className="posts--form-inputGroup">
                                    <span>Title</span>
                                    <input
                                        type='input' value={title}
                                        placeholder='Input title here...' onChange={this.handleChangeTitle}
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
                                    <button onClick={this.handleToggleEdit}>Cancel</button>
                                </div>
                            </form>
                    }
                </div>
                {
                    this.state.isExpand === true
                        ?
                        <PostDetail body={body} id={id} />
                        :
                        null
                }
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Post);

