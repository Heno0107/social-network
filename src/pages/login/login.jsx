import { Formik , Form , Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'

import './login.css'
import { loginTC } from '../../store/reducers/authReducer'

export function Login () {
    const dispatch = useDispatch()

    const login = (body) => {
        dispatch(loginTC(body))
    }

    const {userId} = useSelector((state) => state.authPage)

        if(userId) {
            return <Navigate to={`/users/${userId}`}/>
        } else {
            return (
                <Formik
                initialValues={{
                    email : '' ,
                    password : ''
                }}
                onSubmit={(value) => login(value)}>
                        <Form>
                        <div className="loginDiv">
                            <Field placeholder = 'email' name = 'email'/>
                            <Field placeholder = 'password' name = 'password'/>
                        </div>
        
                        <div className="loginBtn">
                            <button type='submit'>LOGIN</button>
                        </div>
                        </Form>
                </Formik>
            )
        }

}