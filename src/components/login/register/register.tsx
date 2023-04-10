import { AxiosError } from "axios"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { usersAPI } from "../../../api/users"

type PropsType = {
    setAuth: (isAuth: boolean) => void
    setLoginOrRegister: (loginOrRegister: "login" | "register") => void
}

export const Register = (props: PropsType) => {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const sendNewUserData = () => {
        usersAPI.createUser(login, email, password, userName).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log('Err from createUser: ' + err)
        })
    }
    return <View style={styles.container}>
        <View>
            <TextInput
                value={login}
                onChangeText={(text) => setLogin(text)}
                keyboardType="default"
                placeholder="Введіть логін"
                style={styles.inputText}
            />
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
            <TextInput
                value={userName}
                onChangeText={(text) => setUserName(text)}
                keyboardType="default"
                placeholder="Введіть повне ім'я"
                style={styles.inputText}
            />
            <Button title="Зареєструватись" onPress={sendNewUserData} />
            <Text>Або</Text>
            <Button title="Ввійти" onPress={() => props.setLoginOrRegister('login')} />
        </View>
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