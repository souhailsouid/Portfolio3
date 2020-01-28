import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange (event) {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render () {
    const { email, password } = this.state
    return (
      <section className="sign-in">
        <h1>J&apos;ai déjà un compte</h1>
        <span>Se connecter avec son adresse email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <CustomButton type="submit">Se connecter</CustomButton>
        </form>
      </section>
    )
  }
}

export default SignIn
