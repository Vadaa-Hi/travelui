import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';
import Forminput from './Forminput';
import FormSubmitBtn from './FormSubmitBtn';

const SignupForm = () => {
  return (
    <FormContainer>
      <Forminput title="Full Name" placeholder="John Carter" />
      <Forminput title="Email" placeholder="example@email.com" />
      <Forminput title="Password" placeholder="********" />
      <Forminput title="Confirm Password" placeholder="********" />
      <FormSubmitBtn title="Sign Up" />
    </FormContainer>
  );
};

export default SignupForm;

const styles = StyleSheet.create({});
