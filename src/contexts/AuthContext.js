import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [responseMsg, setResponseMsg] = useState('');
  const [collapse, setCollapse] = useState(true);


  const navigate = useNavigate();

  // define login method
  const loginUser = async (e) => {
    e.preventDefault();
    if (e.target.email.value === '' || e.target.password.value === '')
      setResponseMsg('You must fill the requierd field');
    else {
      setLoading(true);
      axios({
        baseURL:
          process.env.NODE_ENV === 'development'
            ? process.env.REACT_APP_DEV_MODE
            : process.env.REACT_APP_PRO_MODE,
        url: '/api/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
        },
        data: {
          email: e.target.email.value,
          password: e.target.password.value,
        },
      })
        .then((res) => {
          const { data } = res;
          localStorage.setItem('access-token', data.payload.token);
          setAccessToken(data.payload.token);
          setUserInfo(data.payload.user);
          navigate('/admin/dashboard');
        })
        .catch((error) => {
          setLoading(false);
          setResponseMsg(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  // define logout method
  const logoutUser = () => {
    axios({
      baseURL:
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_MODE
          : process.env.REACT_APP_PRO_MODE,
      url: '/api/logout',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
    }).then(() => {
      setAccessToken('');
      setUserInfo(null);
      localStorage.clear();
      navigate('/auth/login-page');
    });
  };
  return (
    <AuthContext.Provider
      value={{
        userInfo,
        responseMsg,
        logoutUser,
        loginUser,
        setUserInfo,
        accessToken,
        setAccessToken,
        loading,
        collapse,
        setCollapse
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;