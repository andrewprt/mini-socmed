import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewPost: (param) => dispatch(addNewPost({ title: param.title, content: param.content }))
    }
}

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeContent(event) {
        this.setState({ content: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddNewPost({ title: this.state.title, content: this.state.content });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='input' value={this.state.title}
                    placeholder='Input title here...' onChange={this.handleChangeTitle}
                />
                <input
                    type='input' value={this.state.content}
                    placeholder='Input content here...' onChange={this.handleChangeContent}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(NewPost);