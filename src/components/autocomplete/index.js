import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

class AutoComplete extends Component {
    constructor(props){
      super(props);
      this.state = {
        is_open: false,
      };
    }

render(){
  const {
    suggestions,
    onChangeText,
    onChangeSelection,
    text,
  } = this.props;

  const {
    is_open
  } = this.state;

  return(
      <div className="main-container">
        <div className="container-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search..."
          value={ text }
          style={{ width:"100%" }}
          onChange={(event) =>  {
            const new_text = event.target.value;

            onChangeText(new_text);

            if (!is_open && new_text){
              this.setState({ is_open: true });
            } else if (is_open && !new_text){
              this.setState({ is_open: false });
            }
          }}
          onBlur={() => {
            setTimeout(() => this.setState({ is_open: false }), 100);
          }}
          onFocus={() => {
            if (text){
              this.setState({ is_open: true });
            }
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter' && text){
              onChangeSelection(text);
            }
          }}
          />
          {is_open &&
            <Paper className="container-results" square>
              {suggestions.map(suggestion =>
                <MenuItem
                  key={suggestion.id}
                  component="div"
                  onClick={() => {
                    onChangeSelection(suggestion.title);
                    this.setState({ is_open: false });
                  }}
                  >
                  {suggestion.title}
                </MenuItem>)}
              </Paper>}
            </div>
                );
              }
            }

export default AutoComplete;
