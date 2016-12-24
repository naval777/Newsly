import React from 'react';
import { Card, CardActions, CardMedia, CardHeader, CardTitle, CardText } from 'material-ui/Card';

const CardBox = (props) => (
    <Card  style={{ width: '60%', margin: 'auto' }}>
      <CardHeader
          title={props.title}
          subtitle={props.author}
          actAsExpander={true}
          showExpandableButton={true}
      />

      <CardMedia expandable={true}>
        <img src={props.urlToImage} />
      </CardMedia>

      <CardText expandable={true}>
        {/*{props.pub_time}*/}
        {props.text}<br />
        <a href={props.url} target='_blank'>Know More...</a>
      </CardText>
    </Card>
);

export default CardBox;
