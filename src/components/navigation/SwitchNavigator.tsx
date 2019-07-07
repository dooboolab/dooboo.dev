import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import FindPw from '../screen/FindPw';
import DrawerNavigator from './DrawerNavigator';

import { AppContext } from '../../contexts';
import Temp from '../screen/Temp';

interface IProps {
  store?: any;
}

function SwitchNavigator(props: {}) {
  const { state } = useContext(AppContext);
  const { theme } = state;
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact path='/' component={DrawerNavigator} />
          <Route path='/signin' component={(param) => <SignIn {...param} {...props}/>} />
          <Route path='/signup' component={(param) => <SignUp {...param} {...props}/>} />
          <Route path='/findpw' component={(param) => <FindPw {...param} {...props}/>} />
          <Route render={(param) => <Temp {...param} {...props}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;