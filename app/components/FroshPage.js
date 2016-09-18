import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Grid, Row, Col} from 'react-flexbox-grid';

import FroshDetailedCard from './FroshDetailedCard';
import Comment from './Comment';
import CommentFormContainer from '../containers/CommentFormContainer';

const FroshPage = (props) => (
    <Grid>
        <Row>
            <Col xs={12} sm={4} md={4}>
                <FroshDetailedCard frosh={props.frosh}/>
            </Col>
            <Col xs={12} sm={8} md={8}>
                <div style={{margin: "20px"}}>
                    <CommentFormContainer addComment={props.addComment}/>
                    {props.comments.map(function(comment, index){
                        return <Comment author={comment.user} content={comment.content} key={index} />
                    })}
                </div>
            </Col>
        </Row>
    </Grid>
);

export default FroshPage;