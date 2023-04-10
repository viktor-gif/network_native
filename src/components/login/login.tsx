import { AxiosError } from "axios"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { loginAPI } from "../../api/login"
import { Register } from "./register/register"

type PropsType = {
    setAuth: (isAuth: boolean) => void
}

export const Login = (props: PropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginOrRegister, setLoginOrRegister] = useState<'login' | 'register'>('login')

    const sendLoginData = () => {
        
        loginAPI.login(email, password).then((res) => {
            props.setAuth(true)
        }).catch(err => {
            console.log('Errrrrrrrrrrrrrrrrr: ' + err)
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
                    style={styles.inputText}
                />
                <Button title="Ввійти" onPress={sendLoginData} />
                <Text>Або</Text>
                <Button title="Зареєструватись" onPress={() => setLoginOrRegister('register')} />
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
    }
})