
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, Button, TextInput } from "react-native"
import { profileAPI } from "../../api/profile"
import { ProfileDataType } from "../../ts/profile"
import { getCorrectMediaUrl } from "../../utils/commonFunctions"
import { ProfileForm } from "./profileForm"


export const Profile = (props: any) => {
    const [profileData, setProfileData] = useState<ProfileDataType | null>(null)
    const [status, setStatus] = useState<string | null>(null)
    const [isEdit, setEdit] = useState(false)

    const userId = props.route.params?.userId || props.route.params?.authId

    const isAuthProfile = (!props.route.params?.userId && props.route.params?.authId) || (props.route.params?.userId === props.route.params?.authId)
    
    console.log('props.route.params gg : ' + props.route.params?.authProfile?._id)

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

        {isEdit
            ? <ProfileForm setEdit={setEdit} authProfileData={props.route.params?.authProfile} />
            : <View>
                <Text>{ profileData?.fullName }</Text>
                <Text>{ profileData?.aboutMe }</Text>
                <Text>{ profileData?.lookingForAJob ? 'Так' : 'Ні' }</Text>
                {profileData?.lookingForAJob && <Text>{profileData?.lookingForAJobDescription}</Text>}
                <Text>{ profileData?.location.country }</Text>
                <Text>{profileData?.location.city}</Text>

                <Text>{ props.route.params?.authProfile?.fullName }</Text>
                <Text>{ props.route.params?.authProfile?.fullName }</Text>
                <Text>{ props.route.params?.authProfile?.fullName }</Text>
                <Text>{ props.route.params?.authProfile?.fullName }</Text>
                <Text>{props.route.params?.authProfile?.fullName}</Text>
                {isAuthProfile && <Button title="Редагувати" onPress={() => setEdit(true)} />}
            </View>
        }
        

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