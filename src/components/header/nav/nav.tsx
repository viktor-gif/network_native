import { View, Text, Image, StyleSheet } from "react-native"

export const Nav = () => {
    return <View style={styles.container}>
        <View>
            <Image
                style={styles.icon}
                source={require("../../../img/icons/profile.png")}
            />
        </View>
        <View>
            <Image
                style={styles.icon}
                source={require("../../../img/icons/users.png")}
            />
        </View>
        <View>
            <Image
                style={styles.icon}
                source={require("../../../img/icons/groups.png")}
            />
        </View>
        <View>
            <Image
                style={styles.icon}
                source={require("../../../img/icons/chatpicon.png")}
            />
        </View>
        <View>
            <Image
                style={styles.icon}
                source={require("../../../img/icons/settings.png")}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon: {
        width: 30,
        height: 30
    }
})