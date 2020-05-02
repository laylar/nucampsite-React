import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments({comments}) {
    if (comments) {
        return (
            <div key={comments.id} className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => <div>
                    <div>{comment.text}</div>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p></div>)}
            </div>
        );
    }
    return <div />;
    }
function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top width="100%" src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>

    );
    }

function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite}/>
                        <RenderComments comments={props.campsite.comments}/>
                    </div>
                </div>
            )
        }
        return <div />;
    }


export default CampsiteInfo;