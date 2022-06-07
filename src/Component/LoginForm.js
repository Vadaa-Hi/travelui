import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';
import Forminput from './Forminput';
import FormSubmitBtn from './FormSubmitBtn';

const LoginForm = () => {
  return (
    <FormContainer>
      <Forminput title="Email" placeholder="example@email.com" />
      <Forminput title="Password" placeholder="********" />
      <FormSubmitBtn title="Login" />
    </FormContainer>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
