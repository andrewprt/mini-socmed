import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewComment } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewComment: (param) => dispatch(addNewComment({
            name: param.name, email: param.email, content: param.content, id: param.id
        }))
    }
}

class NewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            content: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangeContent(event) {
        this.setState({ content: event.target.value });
    }

    handleSubmit(event) {
        const props = this.props;
        const state = this.state;
        const component = this;
        event.preventDefault();

        const myPromise = new Promise(function (resolve) {
            resolve(props.onAddNewComment({
                name: state.name, email: state.email, content: state.content, id: props.id
            }))
        });

        myPromise.then(function () {
            component.setState({ name: '', email: '', content: '' });
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form--comment">
                <span>New comment</span>
                <input
                    type='input' value={this.state.name}
                    placeholder='Input name here...' onChange={this.handleChangeName}
                />
                <input
                    type='input' value={this.state.email}
                    placeholder='Input email here...' onChange={this.handleChangeEmail}
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

export default connect(null, mapDispatchToProps)(NewComment);