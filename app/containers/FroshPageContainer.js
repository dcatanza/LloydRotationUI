import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import FroshPage from '../components/FroshPage';
import apiClient from '../utils/apiClient';

const styles = {
    loading: {
        width: "100%",
        height: "70vh",
        textAlign: "center",
    },
    center: {
        marginTop: "10vh",
    },
}

const FroshPageContainer = React.createClass({
    getInitialState: function() {
        return {
            prefrosh_id: this.props.routeParams.prefrosh_id,
            frosh: null,
            comments: [],
        };
    },
    componentDidMount: function() {
        this.requestFrosh(this.state.prefrosh_id);
        this.requestComments(this.state.prefrosh_id);
    },
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.routeParams.prefrosh_id);
        this.setState({
            prefrosh_id: nextProps.routeParams.prefrosh_id,
            frosh: null,
            comments: [],
        });
        this.requestFrosh(nextProps.routeParams.prefrosh_id);
        this.requestComments(nextProps.routeParams.prefrosh_id);
    },
    requestFrosh: function(prefrosh_id) {
        apiClient.getFrosh(prefrosh_id)
            .then(function (frosh) {
                console.log(frosh);
                this.setState({
                    frosh: frosh,
                });
            }.bind(this));
    },
    requestComments: function(prefrosh_id) {
        apiClient.getComments(prefrosh_id)
            .then(function (comments) {
                console.log("swag");
                this.setState({
                    comments: comments,
                });
            }.bind(this));
    },
    addComment: function(comment){
        if (comment) {
            apiClient.postComment(this.state.prefrosh_id, comment)
                .then(function (response) {
                    this.requestComments();
                }.bind(this));
        }
    },
    render() {
        return (
            !this.state.frosh
            ?
                <div style={styles.loading}>
                    <CircularProgress style={styles.center} size={140}/>
                </div>
            :
                <FroshPage
                    frosh={this.state.frosh}
                    comments={this.state.comments}
                    addComment={this.addComment}
                />
        );
    }
});

export default FroshPageContainer;