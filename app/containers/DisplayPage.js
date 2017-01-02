import React, { Component } from 'react';
import CardBox from '../components/CardBox';

class DisplayPage extends Component {
  constructor(props) {
    super(props);

  }

  articleCard(article, index) {
    return <div key={index}><CardBox title={article.title}
                                     author={article.author} text={article.description}
                                     urlToImage={article.urlToImage} pub_time={article.publishedAt}
                                     url={article.url}

    /><br /></div>;
  }

  render() {

    return (
    <div style={{ margin: 'auto' }}>
      <h3>{this.props.name}</h3><br />
      {this.props.articles.map(this.articleCard)}
   </div>
  );
  }
};

export default DisplayPage;

//
