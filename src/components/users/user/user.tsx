import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native"
import { LocationType, PhotosType } from "../../../ts/users"
import { getCorrectMediaUrl } from "../../../utils/commonFunctions"

type PropsType = {
    key: string
    id: string
    fullName: string
    status: string | null
    location: LocationType
    photos: PhotosType
    followers: string[]
}

export const User = (props: PropsType) => {
    const photoUrl = props.photos.small

    const navigation: any = useNavigation()

    const navigateTo = (path: string, userId: string) => {
        navigation.navigate(path, {userId})
    }
    
    return <View style={styles.container}>
        <View>
            <TouchableOpacity onPress={() => navigateTo('Profile', props.id)}>
                {photoUrl
                    ? <Image
                        alt="AWSOME"
                        style={styles.ava}
                        source={{ uri: getCorrectMediaUrl(photoUrl) }}
                    />
                    : <Image
                        style={styles.ava}
                        source={require('../../../img/ava_male.jpeg')}
                    />
                }
            </TouchableOpacity>
        </View>
        <View style={styles.nameAndButtonsBlock}>
            <View>
                <Text>{props.fullName}</Text>
            </View>
            <View style={styles.buttonsBlock}>
                <Button title='Додати' />
                <Button title='Видалити' />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    nameAndButtonsBlock: {
        width: '100%',
        gap: 20
    },
    buttonsBlock: {
        width: '100%',
        flexDirection: 'row',
    },
    ava: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'stretch'
    }
})