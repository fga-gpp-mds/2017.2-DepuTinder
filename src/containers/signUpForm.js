import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import FormInput from './formInput';
import saveUser from '../actions/saveUser';
import SignUpSuccessful from '../components/signUpSuccessful';
import AccountInputForm from '../components/accountInputForm';

class SignUpForm extends Component {

  static handleSubmit(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmedPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitValidation() {
    const VALID = 1;
    const NOT_VALID = 0;
    const fields = this.validateFields();
    const password = this.validatePasswordConfirmation();
    if (fields === VALID && password === VALID) {
      this.onSignUpSuccess();
    } else if (fields === NOT_VALID) {
      swal('Preencha todos os campos!');
    } else if (password === NOT_VALID) {
      swal('Senha nao confirmada');
    }
  }

  onSignUpSuccess() {
    const success = saveUser(this.state.userName, this.state.userEmail, this.state.userPassword);
    console.log(success);
    browserHistory.push('/signUpSuccessful');
    return (
      <SignUpSuccessful />
    );
  }

  validateFields() {
    if (this.state.userName === '' ||
      this.state.userEmail === '' ||
      this.state.userPassword === '') {
      return 0;
    } else {
      return 1;
    }
  }

  validatePasswordConfirmation() {
    if (this.state.userPassword !== this.state.userConfirmedPassword) {
      return 0;
    } else {
      return 1;
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="container" style={{ marginTop: 50 }} >

          <AccountInputForm
            nameInputId="Nome"
            emailInputId="Email"
            passwordInputId="Senha"
            confirmedPasswordInputId="Confirmar Senha"
            nameValue={this.state.userName}
            emailValue={this.state.userEmail}
            passwordValue={this.state.userPassword}
            confirmedPasswordValue={this.state.userConfirmedPassword}
            handleChange={this.handleChange}
          />

          <div className="form-group" id="buttonGroup">
            <center>
              <a
                className="btn btn-primary btn-lg"
                type="submit"
                style={{ backgroundColor: 'black', marginTop: 30 }}
                id="signUpButton"
                onClick={() => {
                  this.onSubmitValidation();
                }}
              >
                Criar conta
              </a>
            </center>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
