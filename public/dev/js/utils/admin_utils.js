import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthError, CheckAuth } from '../actions/Admin/login_action';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    constructor(props) {
      super(props);

      if(!this.props.isAuthenticated) {
        
        if (localStorage.jwtToken) 
          this.props.CheckAuth(localStorage.jwtToken);
        
      }
    }

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.AuthError('Authorization is required!');
        this.context.router.push('/radio_admin');
      }
    }
    
    render() {
      const { isAuthenticated } = this.props;
      let element = null;
      
      if(isAuthenticated)
        element = (<ComposedComponent {...this.props} />);
      
      return (
        <div>
          { element }
        </div>
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    CheckAuth: React.PropTypes.func.isRequired,
    AuthError: React.PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.Login.isAuthenticated
    };
  }

  return connect(mapStateToProps, { AuthError, CheckAuth })(Authenticate);
}