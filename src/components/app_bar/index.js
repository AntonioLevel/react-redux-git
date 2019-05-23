import React, { Component } from 'react';
import Page from './page.js';

import FindSuggestions from '../../actions/find_suggestions.js';
import FindResults from '../../actions/find_results.js';
import { connect } from 'react-redux';



class Appbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
  }
  onChangeText(text){
    this.setState({text})
    this.props.FindSuggestions(text);
  }
  onChangeSelection(text){
    this.setState({text})
    this.props.FindResults(text);
  }
  render(){
    const { text } = this.state;
    const { suggestions } = this.props;
    return(
      <Page
        text={text}
        suggestions={suggestions}
        onChangeText={this.onChangeText}
        onChangeSelection={this.onChangeSelection}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  }
}
const mapDispatchToProps = {
  FindSuggestions,
  FindResults
}


export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
