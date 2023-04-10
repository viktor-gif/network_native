import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native"

export const Nav = () => {

    const navigation: any = useNavigation()

  const navigateTo = (path: string) => {
        navigation.navigate(path)
  }
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateTo('Profile')}>
            <View>
                <Image
                    style={styles.icon}
                    source={require("../../../img/icons/profile.png")}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Users')}>
            <View>
                <Image
                    style={styles.icon}
                    source={require("../../../img/icons/users.png")}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Groops')}>
            <View>
                <Image
                    style={styles.icon}
                    source={require("../../../img/icons/groups.png")}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Chat')}>
            <View>
                <Image
                    style={styles.icon}
                    source={require("../../../img/icons/chatpicon.png")}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Settings')}>
            <View>
                <Image
                    style={styles.icon}
                    source={require("../../../img/icons/settings.png")}
                />
            </View>
        </TouchableOpacity>
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