import { AxiosError } from "axios"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { loginAPI } from "../../api/login"
import { Register } from "./register/register"

type PropsType = {
    appError: string | null

    setAuth: (isAuth: boolean) => void
    setAppError: (error: string | null) => void
}

export const Login = (props: PropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginOrRegister, setLoginOrRegister] = useState<'login' | 'register'>('login')

    const sendLoginData = () => {
        
        loginAPI.login(email, password).then((res) => {
            console.log('res.data.resultCode : ' + res.data.resultCode)
            if (res.data.resultCode === 0) {
                props.setAuth(true)
                props.appError && props.setAppError(null)
            }
            
        }).catch(err => {
            if (err.response.status === 404) {
                props.setAppError(err.response.data.message || 'Пароль або e-mail не вірний')
            } else {
                props.setAppError('Помилка сервера')
      }
            
        })
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
                {props.appError && <Text style={styles.error}>{props.appError}</Text>}
            </View>
            
            : <Register setAuth={props.setAuth} setLoginOrRegister={setLoginOrRegister} />

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