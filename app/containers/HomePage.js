
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DisplayPage from './DisplayPage';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, display: false };
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

  handleMenuClick(item) {
    this.sourceName = item.name;
    fetch('https://newsapi.org/v1/articles?source=' + item.id + '&apiKey=2609433deb994e6d994fb1cc43e8457e', { method: 'get' })
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            this.articles = data.articles;
            this.setState({ display: true });

          }).catch(function (error) {
            console.log(error);
          });

        }).catch(function (error) {
      console.log(error);
    });
  };

  menuItems(item, index) {
    return <MenuItem key={index} onClick={() => {this.handleMenuClick(item); } } primaryText={item.name} />;
  };

  render() {
    if (this.state.loading) {
      return null;
    }

    const display = this.state.display;
    return (
        <div>
    <AppBar title="Newsly" />

          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <Paper style={{ display: 'inline-block' }}>
              <Menu>
          {this.sources.map(this.menuItems, this)}
              </Menu>
            </Paper>
            {display ? (<DisplayPage
                                   name={this.sourceName} articles={this.articles}/>) : null}
          </div>
          </div>
    );
  }
};

export default HomePage;
