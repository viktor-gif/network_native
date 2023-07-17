import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native"
import { followAPI } from "../../../api/follow"
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
    const [userFollow_status, setUserFollow_status] = useState("")
    // const [followButtonText, setFollowButtonText] = useState("Додати")
    const getFollow = () => {
        followAPI.getFollow(props.id).then(res => {
            if (res.data != userFollow_status) setUserFollow_status(res.data)
        })
    }
    useEffect(() => {
        getFollow()
    }, [])

    // if (userFollow_status === "") {
    //     setFollowButtonText("Додати до друзів")
    // } else if (userFollow_status === "pending-for-answer") {
    //     setFollowButtonText("Відмінити заявку")
    // } else if (userFollow_status === "query-for-answer") {
    //     setFollowButtonText("Прийняти заявку")
    // } else if (userFollow_status === "followed") {
    //     setFollowButtonText("Видалити з друзів")
    // }
    let followButtonText = ""

    if (userFollow_status === "") {
        followButtonText = "Додати до друзів"
    } else if (userFollow_status === "pending-for-answer") {
        followButtonText = "Відмінити заявку"
    } else if (userFollow_status === "query-for-answer") {
        followButtonText = "Прийняти заявку"
    } else if (userFollow_status === "followed") {
        followButtonText = "Видалити з друзів"
    }

    const photoUrl = props.photos.small

    const navigation: any = useNavigation()

    const navigateTo = (path: string, userId: string) => {
        navigation.navigate(path, {userId})
    }

    const followPress = () => {
        if (userFollow_status === "" || userFollow_status === "query-for-answer") {
            followAPI.setFollow(props.id).then(() => getFollow()) 
            console.log(props.id)
        } else {
            followAPI.deleteFollow(props.id).then(() => getFollow()) 
            console.log(props.id)
        }
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
            <TouchableOpacity
                style={styles.buttonsBlock}
                onPress={followPress}
            >
                <Text style={styles.buttonsBlock_text}>{followButtonText}</Text>
            </TouchableOpacity>
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
        
    },
    buttonsBlock_text: {
        color: 'blue',
        fontSize: 20
    },
    ava: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'stretch'
    }
})