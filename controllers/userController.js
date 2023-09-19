const formLogin = (req,res) => {
     res.render('auth/login', {
          page: 'Log in'
     });
}

const formSignup = (req,res) => {
     res.render('auth/signup', {
          page: 'Sign up'
     });
}

const formPasswordRecovery = (req,res) => {
     res.render('auth/passwordRecovery', {
          page: 'Password Recovery'
     });
}

export {
     formLogin,
     formSignup,
     formPasswordRecovery
}