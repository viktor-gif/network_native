import { AxiosError } from "axios"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { connect } from "react-redux"
import { authAPI } from "../../api/auth"
import { AppStateType } from "../../redux/redux-store"
import { Register } from "./register/register"
import { login } from "../../redux/authReducer"
import { createUser } from "../../redux/usersReducer"

type PropsType = {
    loginError: string | null
    usersError: string | null

    createUser: (email: string, password: string, userName: string) => void
    login: (email: string, password: string) => void
}

const Login = (props: PropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginOrRegister, setLoginOrRegister] = useState<'login' | 'register'>('login')

    const sendLoginData = () => {
        
        props.login(email, password)
    }

    return <View style={styles.container}>
        {loginOrRegister === 'login'
            
            ? <View>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    placeholder="Введіть e-mail"
                    style={styles.inputText}
                />
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    keyboardType="default"
                    placeholder="Введіть пароль"
                    secureTextEntry={true}
                    style={styles.inputText}
                />
                <Button title="Ввійти" onPress={sendLoginData} />
                <Text>Або</Text>
                <Button title="Зареєструватись" onPress={() => setLoginOrRegister('register')} />
                {props.loginError && <Text style={styles.error}>{props.loginError}</Text>}
            </View>
            
            : <Register setLoginOrRegister={setLoginOrRegister}
                usersError={props.usersError} createUser={props.createUser} />

        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center'
    },
    inputText: {
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fafafa',
        width: 300
    },
    error: {
        color: 'red'
    }
})

const mapStateToProps = (state: AppStateType) => ({
    loginError: state.auth.loginError,
    usersError: state.usersPage.usersError
})

export default connect(mapStateToProps, {
    login, createUser
})(Login)