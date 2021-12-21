import React, { Component } from 'react';
import { connect } from 'react-redux';
import Token from '../components/Token';
class TokensContainer extends Component {
  state = {
    originalTokens: [],
    orgTokens: [],
    clicked: false
  }

  renderTokens = () => {
    if (!this.state.clicked) {
      return (this.props.tokens.map(({attributes}) => {
        if (attributes.ticker === "usd")
          return null
        else
          return <Token link={this.props.showLink} token={attributes}/>
      }))
    }
    else {
      const alphabetized = [...this.props.tokens];
      alphabetized.sort((a, b) => {
        if (a.attributes.name[0] < b.attributes.name[0])
          return -1
        else if (a.attributes.name[0] > b.attributes.name[0])
          return 1

        return 0
      })
      return (alphabetized.map(({attributes}) => {
        if (attributes.ticker === "usd")
          return null
        else
          return <Token link={this.props.showLink} token={attributes}/>
      }))
    }
  };
  clickButton = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div className="token container">
        <button onClick={this.clickButton}>Organize Tokens</button>
        <ul>{this.renderTokens()}</ul>        
      </div>
    )
  }
}
const mapStateToProps = ({tokens}) => ({
  tokens: tokens.tokens
})

export default connect(mapStateToProps)(TokensContainer)