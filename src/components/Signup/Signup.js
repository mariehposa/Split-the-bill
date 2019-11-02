import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { OuterDiv, InnerDiv, Surround, Button, FontDiv, StyledInnerDiv, Styledfont } from './SignUpstyles'

const SignUpURL = 'https://split-the-bill-api.herokuapp.com/api/auth/register';

const initialValueForm = {
    fname: '',
    lname: '',
    email: '',
    password: ''
}

const validationSchema = yup.object().shape({
    fname: yup.string()
        .required('A name input is required'),
    lname: yup.string()
        .required('Last name is required'),
    email: yup.string()
        .email('email not valid')
        .required('email is required'),
    password: yup.string()
        .min(6, 'password must be six characters or longer')
        .required('a password is required'),
});

const Signup = (props) => {
    const submit = (formValues, actions) => {

        const newUser = {
            firstName: formValues.fname,
            lastName: formValues.lname,
            email: formValues.email,
            password: formValues.password
        }

        axios.post(SignUpURL, newUser)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                actions.resetForm();
                props.history.push('/dashboard')
            })
            .catch(error => {
                debugger
                localStorage.clear();
                alert(error.message);
            });
    }

    const styles2 = {
        margin: '0.5em',
        width: '20em',
        height: '1.8em',
        borderRadius: '0.2em',
        fontSize: '1em',
        textAlign: 'center',
        border: '0',
    };


    return (
        <Formik
            initialValues={initialValueForm}
            onSubmit={submit}
            validationSchema={validationSchema}
            render={(props) => (
                <OuterDiv>
                    <InnerDiv>
                        <FontDiv>
                            <Styledfont>Sign Up</Styledfont>
                        </FontDiv>
                        <Surround>
                            <Form className='signup'>
                                <StyledInnerDiv>
                                    <Field style={styles2} name='fname' type="text" placeholder='First Name' />
                                    <ErrorMessage name='fname' component='div' />
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Field style={styles2} name='lname' type="text" placeholder='Last Name' />
                                    <ErrorMessage name='lname' component='div' />
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Field style={styles2} name='email' type="text" placeholder='Email' />
                                    <ErrorMessage name='email' component='div' />
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Field style={styles2} name='password' type="password" placeholder='Password' />
                                    <ErrorMessage name='password' component='div' />
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Button type='submit'>Sign Up</Button>
                                </StyledInnerDiv>
                            </Form>
                        </Surround>
                    </InnerDiv>
                </OuterDiv>
            )}
        />
    );
}

export default Signup;