import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, Button, TextInput } from "react-native"
import { connect } from "react-redux"
import { getProfile, getStatus } from "../../redux/profileReducer"
import { AppStateType } from "../../redux/redux-store"
import { ProfileDataType } from "../../ts/profile"
import { getCorrectMediaUrl } from "../../utils/commonFunctions"
import { ProfileForm } from "./profileForm"

type PropsType = {
    authId: string | undefined
    authProfile: ProfileDataType | null
    profileData: ProfileDataType | null
    userStatus: string | null

    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    route: any
}

export const Profile = (props: PropsType) => {
    const [isEdit, setEdit] = useState(false)

    console.log('test +++++++++ ' + props.route?.params?.userId)

    const userId = props.route?.params?.userId
    const authId = props.authId

    const profileData = props.profileData
    const authProfileData = props.authProfile

    const isAuthProfile = (!userId && authId) || (userId === authId)

    console.log('props.route.params gg : ' + props.route?.params?.userId)

    useEffect(() => {
        userId && props.getStatus(userId)
        authId && props.getStatus(authId)
        userId && props.getProfile(userId)
        
    }, [props.route?.params?.userId, props.route?.params?.authId])

    return <View style={styles.container}>
        <Text>{props.userStatus ? props.userStatus : '------------'}</Text>
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
            ? <ProfileForm setEdit={setEdit} authProfileData={props.route?.params?.authProfile} />
            : <View>
                <Text>{ profileData?.fullName || authProfileData?.fullName }</Text>
                <Text>{ profileData?.aboutMe || authProfileData?.aboutMe }</Text>
                <Text>{ (profileData?.lookingForAJob || authProfileData?.lookingForAJob) ? 'Так' : 'Ні' }</Text>
                {(profileData?.lookingForAJob || authProfileData?.lookingForAJob) && <Text>{profileData?.lookingForAJobDescription || authProfileData?.lookingForAJobDescription}</Text>}
                <Text>{ profileData?.location.country || authProfileData?.location.country }</Text>
                <Text>{profileData?.location.city || authProfileData?.location.city}</Text>

                <Text>Контакти:</Text>
                <Text>{ profileData?.contacts.github || authProfileData?.contacts.github }</Text>
                <Text>{ profileData?.contacts.facebook || authProfileData?.contacts.facebook }</Text>
                <Text>{ profileData?.contacts.instagram || authProfileData?.contacts.instagram }</Text>
                <Text>{ profileData?.contacts.twitter || authProfileData?.contacts.twitter }</Text>
                <Text>{ profileData?.contacts.website || authProfileData?.contacts.website }</Text>
                <Text>{ profileData?.contacts.youtube || authProfileData?.contacts.youtube }</Text>
                <Text>{ profileData?.contacts.linkedin || authProfileData?.contacts.linkedin }</Text>
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

const mapStateToProps = (state: AppStateType) => ({
    authId: state.auth.authData?.id,
    profileData: state.profilePage.profileData,
    userStatus: state.profilePage.status
})

export default connect(mapStateToProps, {
  getProfile, getStatus
})(Profile);