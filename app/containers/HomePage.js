
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DisplayPage from './DisplayPage';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, source: null };
    this.sources = null;
    this.articles = null;
    this.handleMenuClick = this.handleMenuClick.bind(this);
  };

  componentDidMount() {
    fetch('https://newsapi.org/v1/sources?category=technology', { method: 'get' })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            this.sources = data.sources;
            this.setState({ loading: false });

          });

        });

  };

  handleMenuClick(itemid) {

    fetch('https://newsapi.org/v1/articles?source=' + itemid + '&apiKey=2609433deb994e6d994fb1cc43e8457e', { method: 'get' })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            this.articles = data.articles;
            this.setState({ source: itemid });

          }).catch(function (error) {
            console.log(error);
          });

        }).catch(function (error) {
      console.log(error);
    });
  };

  menuItems(item, index) {
    return <MenuItem key={index} onClick={() => {this.handleMenuClick(item.id); } } primaryText={item.name} />;
  };

  render() {
    if (this.state.loading) {
      return null;
    }

    const source = this.state.source;
    console.log(source);
    return (
        <div><AppBar title="Newsly" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <div>
            <Paper style={{ display: 'inline-block', width: '20%' }}>
              <Menu>
          {this.sources.map(this.menuItems, this)}
              </Menu>
            </Paper>
            {source != null ? (<DisplayPage
                                   source={source} articles={this.articles}/>) : null}
          </div>
        </div>
    );
  }
};

export default HomePage;
