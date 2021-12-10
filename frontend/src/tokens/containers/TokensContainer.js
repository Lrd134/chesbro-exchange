import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Token } from '../TokenImport';
class TokensContainer extends Component {

  renderTokens = () => (this.props.tokens.map(token => <Token token={token} key={token.id.toString()} />));

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