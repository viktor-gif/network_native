import { StyleSheet, Text, View, Image } from "react-native"
import { Nav } from "./nav/nav"
import Icon from "react-native-ionicons"
// import logo from "../../img/logo.png"

export const Header = () => {
    return <View style={styles.container}>
        <View style={styles.logoFraction}>
            <Image
                style={styles.logoImg}
                source={require('../../img/logo.png')}
            />
            <View style={styles.findFraction}>
                <View style={styles.findFractionItem}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../../img/icons/search-icon.webp')}
                    />
                </View>
                <View style={styles.findFractionItem}>
                    <Image
                        style={styles.chatIcon}
                        source={require('../../img/icons/chatpicon.png')}
                    />
                </View>
            </View>
        </View>
        <Nav />
    </View>
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    logoImg: {
        width: 40,
        height: 20,
    },
    logoFraction: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    findFraction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15
    },
    searchIcon: {
        height: 18,
        width: 18
    },
    chatIcon: {
        height: 18,
        width: 18
    },
    findFractionItem: {
        backgroundColor: "#dadada",
        padding: 7,
        borderRadius: 20
    }
})