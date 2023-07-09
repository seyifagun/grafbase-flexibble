import React, {useState, useEffect} from 'react';
import {getProviders, signIn} from "next-auth/react";
import Button from './Button';

type Provider = {
    id: string,
    name: string,
    type: string,
    signinUrl: string,
    callbackUrl: string,
    signinUrlParams?: Record<string, string> | undefined;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  return (
    <div>AuthProviders</div>
  )
}

export default AuthProviders