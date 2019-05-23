import React, { Component } from 'react';
import Page from './page.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FindCurrentItem from '../../actions/find_current_item.js';

class Details extends Component {
  constructor(props){
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  componentDidMount(){
    const {
      match: { params: { itemId }   },
      FindCurrentItem,
    } = this.props;

    FindCurrentItem(itemId)
  }

  goTo(path){
    this.props.history.push(path);
  }

  render(){
    const { current_item } = this.props;

    return(
      <Page
        current_item={ current_item }
        goTo={this.goTo}
      />
    );
  }
}

const mapStateToProps = (state) => ({
    results: state.results,
    current_item: state.current_item,

});

const mapDispatchToProps = {
  FindCurrentItem,
}


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
