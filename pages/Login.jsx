import { StyleSheet, Text, View, Button, TouchableHighlight, Alert } from 'react-native'
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import React from 'react'
import { SET_SESION } from '../redux/user.slice'
import { useDispatch, useSelector } from 'react-redux'

// GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//     webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     hostedDomain: '', // specifies a hosted domain restriction
//     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//     accountName: '', // [Android] specifies an account name on the device that should be used
//     iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//     openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
//   })

const Login = () => {
    const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
    const alerta = async()=> {
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     this.setState({ userInfo });
        //   } catch (error) {
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //       // user cancelled the login flow
        //     } else if (error.code === statusCodes.IN_PROGRESS) {
        //       // operation (e.g. sign in) is in progress already
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //       // play services not available or outdated
        //     } else {
        //       // some other error happened
        //     }
        //   }
    dispatch(SET_SESION(true))
  }  
  return (
    <View style={styles.loginContainer}>
        <View style={styles.textContainer}>
            {/* <GoogleSigninButton
  style={{ width: 192, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={alerta}
  disabled={false}
/> */}
            <Text style={styles.textStyles}>Login</Text>  
            <Button
            style={styles.botton} 
            title='Iniciar Sesion'
            onPress={alerta}
            />
            <TouchableHighlight style={styles.botton} onPress={alerta}>
                <Text>Iniciar Sesion</Text>
            </TouchableHighlight>
            
        </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginContainer:{        
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    textContainer:{
        color: "white",
        backgroundColor: "#34314c",
        height: "40%",
        width: "100%",
        borderTopRightRadius: 150,
        borderTopLeftRadius: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyles :{
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    botton:{
        backgroundColor: "#ff7473",
        padding: 10,
        borderRadius: 10,
        margin: 10
    }
})