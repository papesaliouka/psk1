import React, { Component } from 'react';

class SignIn extends Component  {
	constructor(props){
		super(props)
		this.state={
			signInPassword: '',
			signInEmail: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onButtonSubmit = () => {
		fetch('https://sleepy-basin-27459.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user)
				this.props.onPlaceChange('inside');
			}
		})
	}

	render() {
		const {onPlaceChange} = this.props;
		return(
  	<div className='ma3'>
	  	<article className="br3 ba ma4  b--black-10 mv4 shadow-5 w-100 w-50-m w-25-l mw6 center">
	  		<main className="pa4 black-80">
				  <div className="measure ">
				    <fieldset id="sign_up" className="ba ma4 b--transparent ph0 mh0">
				      <legend className="f1 ma3 fw6 tc ph0 mh0">Sign In</legend>
				      <div className="mt3 ">
				        <label
								className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input
								onChange={this.onEmailChange}
								className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mt3">
				        <label
									
								 className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
								onChange={this.onPasswordChange}
								className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				      </div>
				    </fieldset>
				    <div style={{display:'flex', justifyContent:'space-between'}} className='mt1' >
				      <button
							 onClick={this.onButtonSubmit}
				       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
				       >Sign In</button>
							 <button 
							 onClick={() => onPlaceChange('register')}
				       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
				       > Register</button>
				    </div>
				  </div>
				</main>
	  	</article>  	
  	</div>
  );
	}
  
}

export default SignIn;