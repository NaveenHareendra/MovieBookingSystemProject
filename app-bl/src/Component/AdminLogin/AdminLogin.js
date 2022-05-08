import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectSignedIn } from '../../Features/userSlice'
import { setSignedIn } from '../../Features/userSlice'
import { setUserData } from '../../Features/userSlice'
import './AdminLogin.css'

export default function AdminLogin() {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
      console.log(response);
      dispatch(setSignedIn(true));
      dispatch(setUserData(response.profileObj));
    };
    return (
        <div className="ahome__page" style={{ display: isSignedIn ? "none" : "" }}>
          {!isSignedIn ? (
            <div className="alogin__message">
              <h2>📗</h2>
              <h1>A Entetainers favourite place!</h1>
              <p>
                We provide high quality movies. Just sign
                up and start add movies for your clients.
              </p>
              <GoogleLogin
              clientId="537023183408-hb0b9be2nrmodti0rdf1h1orrurtrg8g.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="aadminlogin__button"
                  >
                    Login with Google
                  </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true }
                cookiePolicy={"single_host_origin"}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      );
  }
  
   


