import React, { Component } from 'react';
import { connect } from 'react-redux';
import Token from '../components/Token';
class TokensContainer extends Component {

  renderTokens = () => (this.props.tokens.map(({attributes}) => {
    if (attributes.ticker === "usd")
      return null
    else
      return <Token link={this.props.showLink} token={attributes}/>
  }));

  render() {
    return (
      <div className="token container">
        <ul>{this.renderTokens()}</ul>        
      </div>
    )
  }
}
const mapStateToProps = ({tokens}) => ({
  tokens: tokens.tokens
})

export default connect(mapStateToProps)(TokensContainer)