
import { View, Text, StyleSheet, Button } from "react-native"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import { logout } from "../../redux/authReducer"
import { deleteUser } from "../../redux/usersReducer"

type PropsType = {
    loginError: string | null
    usersError: string | null

    logout: () => void
    deleteUser: () => void
}

const Settings = (props: PropsType) => {
    const logOut = () => {
        props.logout()
    }
    const deleteUser = () => {
        props.deleteUser()
    }
    return <View style={styles.container}>
        <Text>Settings</Text>
        <Button title="Вийти" onPress={logOut} />
        <Button title="Видалити сторінку" onPress={deleteUser} />
        {props.loginError && <Text>{props.loginError}</Text>}
        {props.usersError && <Text>{props.usersError}</Text>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    }
})

const mapStateToProps = (state: AppStateType) => ({
    loginError: state.auth.loginError,
    usersError: state.usersPage.usersError
})

export default connect(mapStateToProps, {
    logout, deleteUser
})(Settings)