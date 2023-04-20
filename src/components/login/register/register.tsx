
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

type PropsType = {
    usersError: string | null

    createUser: (email: string, password: string, userName: string) => void
    setLoginOrRegister: (loginOrRegister: 'login' | 'register') => void
}

export const Register = (props: PropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const sendNewUserData = () => {
        props.createUser(email, password, userName)
    }
    return <View style={styles.container}>
        <View>
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
            <TextInput
                value={userName}
                onChangeText={(text) => setUserName(text)}
                keyboardType="default"
                placeholder="Введіть повне ім'я"
                style={styles.inputText}
            />
            {props.usersError && <Text style={styles.error}>{ props.usersError }</Text>}
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
    },
    error: {
        color: 'red'
    }
})