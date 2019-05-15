import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../actions';
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
        const props = this.props;
        const state = this.state;
        const component = this;
        event.preventDefault();

        const myPromise = new Promise(function (resolve) {
            resolve(props.onAddNewPost({
                title: state.title, content: state.content
            }))
        });

        myPromise.then(function () {
            component.setState({ title: '', content: '' });
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div className="form--inputs">
                    <label>Input your new post here </label>
                    <input
                        type='input' value={this.state.title}
                        placeholder='Input title here...' onChange={this.handleChangeTitle}
                    />
                    <textarea rows="3" cols="40"
                        type='input' value={this.state.content}
                        placeholder='Input content here...' onChange={this.handleChangeContent}
                    />
                    <Button type="submit" variant="contained" color="primary"
                        className={classNames(classes.container, 'button')}>
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
}

NewPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(NewPost));