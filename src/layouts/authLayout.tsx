import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
  } from '@mui/material';


type TProps = {
    title: string;
    children: React.ReactNode;
};

const AuthLayout: React.FC<TProps> = ({title, children}) => {


    return <>
    <Card sx={{width:"80%", margin: '0 auto', marginTop: '200px', padding:'0 50px', maxWidth:'500px'}}>
      <CardHeader title={title} titleTypographyProps={{textAlign:'center'}} />
      <CardContent sx={{display:'flex', flexDirection:'column', maxWidth:'400px',  margin: '0 auto', gap:'10px'}}>
        {children}
      </CardContent>
    </Card> 
    </>
};

export default AuthLayout;