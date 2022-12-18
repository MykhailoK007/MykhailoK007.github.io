import React from "react";
import app from 'firebase.config' ;
import { getAuth } from 'firebase/auth';

const FirebaseContext = React.createContext({auth: getAuth(app)});

export default FirebaseContext;