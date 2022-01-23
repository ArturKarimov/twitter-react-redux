import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {useDispatch} from "react-redux";
import {checkAuthUser} from "./store/ducks/auth/contracts/actionCreators";


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuthUser())
  }, [])

  return (
      <AppRouter />
  )
}

export default App;
