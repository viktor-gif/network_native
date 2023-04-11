
import { setStatusBarBackgroundColor } from "expo-status-bar"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { profileAPI } from "../../api/profile"
import { ProfileDataType } from "../../ts/profile"
import { getCorrectMediaUrl } from "../../utils/commonFunctions"


export const Profile = (props: any) => {
    const [profileData, setProfileData] = useState<ProfileDataType | null>(null)
    const [status, setStatus] = useState<string | null>(null)

    const userId = props.route.params?.userId || props.route.params?.authId
    
    console.log('props.route.params gg : ' + (profileData?.photos.small && getCorrectMediaUrl(profileData?.photos.small)))

    useEffect(() => {
        userId && profileAPI.getProfile(userId).then(res => {
            setProfileData(res.data)
        })
        userId && profileAPI.getStatus(userId).then(res => {
            setStatus(res.data.status)
        })
    }, [props.route.params?.userId])

    return <View style={styles.container}>
        <Text>{status ? status : '------------'}</Text>
        {profileData?.photos.small
            ? <Image
                alt="AWSOME"
                style={styles.ava}
                source={{ uri: getCorrectMediaUrl(profileData?.photos.small) }}
            />
            : <Image
                style={styles.ava}
                source={require('../../img/ava_male.jpeg')}
            />
        }
        <Text>{ profileData?.fullName }</Text>
        <Text>{ profileData?.aboutMe }</Text>
        <Text>{ profileData?.lookingForAJob ? 'Так' : 'Ні' }</Text>
        {profileData?.lookingForAJob && <Text>{profileData?.lookingForAJobDescription}</Text>}
        <Text>{ profileData?.location.country }</Text>
        <Text>{ profileData?.location.city }</Text>

    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20
    },
    ava: {
        width: 200,
        height: 200
    }
})