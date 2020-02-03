import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import * as AuthActions from '../../store/modules/auth/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    function signInFacebook() {
      dispatch(AuthActions.signInFacebookRequest());
    }

    function signInGoogle() {
      dispatch(AuthActions.signInGoogleRequest());
    }
    signInGoogle();
    // signInFacebook();
  });

  return <Container />;
}
