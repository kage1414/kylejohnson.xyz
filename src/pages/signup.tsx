import Link from 'next/link';
import Router from 'next/router';
import { FormEventHandler, useEffect, useState } from 'react';

import { useUser } from '../components/hooks';

export default function SignupPage() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = async function (e) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      fullname: e.currentTarget.fullname.value,
      email: e.currentTarget.email.value,
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    if (body.password.length < Number(process.env.NEXT_PUBLIC_MIN_CHARS)) {
      setErrorMsg(
        `Password must be at least ${process.env.NEXT_PUBLIC_MIN_CHARS} characters long`
      );
      return;
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 201) {
      const userObj = await res.json();
      // set user to useSWR state
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  useEffect(() => {
    // redirect to home if user is authenticated
    // if (user) Router.push('/');
  }, [user]);

  return (
    <>
      <h1>Sign up to Example</h1>
      {errorMsg && <p className='error'>{errorMsg}</p>}
      <div className='form-container'>
        <form onSubmit={onSubmit}>
          <label>
            <span>Username</span>
            <input type='text' name='username' required />
          </label>
          <label>
            <span>Email</span>
            <input type='text' name='email' required />
          </label>
          <label>
            <span>Password</span>
            <input type='password' name='password' required />
          </label>
          <label>
            <span>Repeat password</span>
            <input type='password' name='rpassword' required />
          </label>
          <label>
            <span>Name</span>
            <input type='text' name='fullname' required />
          </label>
          <div className='submit'>
            <button type='submit'>Sign up</button>
            <Link href='/login'>I already have an account</Link>
          </div>
        </form>
      </div>
    </>
  );
}
