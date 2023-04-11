import { useLinkProps } from "@react-navigation/native"
import { View, Text, StyleSheet, Button } from "react-native"
import { loginAPI } from "../../api/login"



export const Settings = (props: any) => {
    console.log('props.route.params____________: ' + props.route.params.test)
    const logOut = () => {
        loginAPI.logout().then(res => {
            props.route.params.setAuth(false)
        })
    }
    return <View>
        <Text>Settings</Text>
        <Button title="Вийти" onPress={logOut} />
    </View>
}

const styles = StyleSheet.create({
    
})