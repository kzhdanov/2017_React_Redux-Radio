import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthError } from '../actions/Admin/login_action';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.AuthError('Authorization is required!');
        this.context.router.push('/radio_admin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.Login.isAuthenticated
    };
  }

  return connect(mapStateToProps, { AuthError })(Authenticate);
}