import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import NotificationError from '../notification/notification.component'

import { auth, createUserProfileDocument } from '../../../server/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor () {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      notificationError: [],
      listError: []
    }
  }

   handleSubmit = async (event) => {
     event.preventDefault()
     this.setState({ listError: [] })
     const { displayName, email, password, confirmPassword } = this.state
     if (password !== confirmPassword) {
       const err = 'Les mots de passe ne correspondent pas!'
       this.setState({ listError: [err] })
     }
     try {
       const { user } = await auth.createUserWithEmailAndPassword(email, password)
       await createUserProfileDocument(user, { displayName })
       this.setState({
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''

       })
     } catch (error) {
       this.setState(prevState => ({
         listError: [...prevState.listError, error.message]
       }))
     } finally {
       this.setState({ notificationError: this.state.listError })
     }
   }

   handleChange = (event) => {
     const { name, value } = event.target

     this.setState({ [name]: value })
   }

   render () {
     const { displayName, email, password, confirmPassword, notificationError } = this.state
     return (
       <div className="sign-up">
         <h2 className="title">Je n&apos;ai pas de compte</h2>

         <form className="sign-up-form" onSubmit={this.handleSubmit}>
           <FormInput
             type="text"
             name="displayName"
             value={displayName}
             onChange={this.handleChange}
             label="Nom"
             required
           />

           <FormInput
             type="email"
             name="email"
             value={email}
             onChange={this.handleChange}
             label="Email"
             required
           />
           <FormInput
             type="password"
             name="password"
             value={password}
             onChange={this.handleChange}
             label="Mot de passe"
             required
           />
           <FormInput
             type="password"
             name="confirmPassword"
             value={confirmPassword}
             onChange={this.handleChange}
             label="Confirmer votre mot de passe"
             required
           />
           <CustomButton type="submit">S&apos;inscrire</CustomButton>
           {notificationError.length ? <NotificationError error={notificationError} /> : null}
         </form>
       </div>
     )
   }
}
export default SignUp
