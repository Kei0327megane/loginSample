import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from './CopyRight';
import Firebase from './Firebase';


// TODO:React.ComponentのClassだとmaterialUIのmakeStylesがきかずに画面のレイアウトが崩れてしまう
// TODO:materialUIがきいてるのはLogin.js参照
export default class SignInSide extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault();
  
    // form値取得
    const params = {
      address: event.target[0].value,
      password: event.target[2].value,
    };
  
    Firebase.auth().signInWithEmailAndPassword(params.address, params.password)
    .then(res => {
      //正常終了時
      //TODO:認証が成功後にIDトークンを取得して次の画面に渡したいがうまく行かない。。。
      //TODO:下記の方法で取れるかと思ったがうまくいかなかった 
      //const token =  Firebase.auth().currentUser.getIdToken();
      this.props.history.push('/dashBoard');
      
    })
    .catch(error => {
      //異常終了時
      alert(error);
    });
  
  }

  render() {
    return (
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              書籍管理システム LogInページ
            </Typography>
            <form noValidate onSubmit={this.handleFormSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }
}