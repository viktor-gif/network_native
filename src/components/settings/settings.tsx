
import { View, Text, StyleSheet, Button } from "react-native"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import { logout } from "../../redux/authReducer"

type PropsType = {
  logout: () => void
  loginError: string | null
}

const Settings = (props: PropsType) => {
    const logOut = () => {
        props.logout()
    }
    return <View>
        <Text>Settings</Text>
        <Button title="Вийти" onPress={logOut} />
        {props.loginError && <Text>{props.loginError}</Text>}
    </View>
}

const styles = StyleSheet.create({
    
})

const mapStateToProps = (state: AppStateType) => ({
    loginError: state.auth.loginError
})

export default connect(mapStateToProps, {
    logout
})(Settings)