import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewFriendComment } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewFriendComment: (param) => dispatch(addNewFriendComment({
            name: param.name, email: param.email, content: param.content, id: param.id
        }))
    }
}

class NewFriendComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'User',
            email: 'user@google.com',
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
            resolve(props.onAddNewFriendComment({
                name: state.name, email: state.email, content: state.content, id: props.id
            }))
        });

        myPromise.then(function () {
            component.setState({ name: 'User', email: 'user@google.com', content: '' });
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="form--comment">
                <span>New comment</span>
                <textarea rows="3" cols="50"
                    type='input' value={this.state.content}
                    placeholder='Input comment here...' onChange={this.handleChangeContent}
                />
                <Button type="submit" variant="contained" color="primary"
                    className={classNames(classes.container, 'button')}>
                    Submit
                </Button>
            </form>
        );
    }
}

NewFriendComment.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(null, mapDispatchToProps)(withStyles(styles)(NewFriendComment));