
import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import NotificationError from '../notification/notification.component'

import { auth, signInWithGoogle, signInWithGitHub } from '../../../server/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      notificationError: []
    }
    console.log('doidjopefe', props)
  }

   handleSubmit = async (event, { history }) => {
     event.preventDefault()
     this.setState({ notificationError: [] })
     const { email, password } = this.state

     try {
       await auth.signInWithEmailAndPassword(
         email,
         password)
       this.setState({
         email: '',
         password: ''
       })
       history.push('/')
     } catch (error) {
       this.setState({ notificationError: [error.message] })
     }
   }

   handleChange =(event) => {
     const { value, name } = event.target
     this.setState({ [name]: value })
   }

   render () {
     const { email, password, notificationError } = this.state
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
           <section className="buttons">
             <CustomButton type="submit">Se connecter</CustomButton>
             <CustomButton onClick={signInWithGoogle} isGoogleSignIn>  <i className="fab fa-google icon-google"></i>&nbsp;  Se connecter avec Google</CustomButton>
             <CustomButton onClick={signInWithGitHub} isGithubSignIn>  <i className="fab fa-github icon-github"></i>&nbsp;  Se connecter avec Github</CustomButton>
             {notificationError.length ? <NotificationError error={notificationError} /> : null}
           </section>
         </form>
       </section>
     )
   }
}

export default SignIn
