import { useLinkProps } from "@react-navigation/native"
import { View, Text, StyleSheet, Button } from "react-native"
import { loginAPI } from "../../api/login"
import { AuthDataType } from "../../ts/auth"
import { ProfileDataType } from "../../ts/profile"

type PropsType = {
  setAuth: (isAuth: boolean) => void
  appError: string | null

  setAuthData: (authData: AuthDataType | null) => void
  setAuthProfile: (profileData: ProfileDataType | null) => void
  setAppError: (error: string | null) => void
}

export const Settings = (props: PropsType) => {
    const logOut = () => {
        loginAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                props.setAuth(false)
                props.setAuthData(null)
                props.setAuthProfile(null)

                props.appError && props.setAppError(null)
            }
        }).catch(err => {
            props.setAppError('Помилка сервера: щось пішдо не так')
        })
    }
    return <View>
        <Text>Settings</Text>
        <Button title="Вийти" onPress={logOut} />
        {props.appError && <Text>{props.appError}</Text>}
    </View>
}

const styles = StyleSheet.create({
    
})