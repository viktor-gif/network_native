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

    

    const userId = props.route?.params?.userId
    const authId = props.authId

    const profileData = props.profileData
    const authProfileData = props.authProfile

    const isAuthProfile = !userId || (userId === authId)

    useEffect(() => {
        if (isAuthProfile) {
            authId && props.getStatus(authId)
        } else {
            userId && props.getStatus(userId)

            userId && props.getProfile(userId)
        }
        
        
    }, [isAuthProfile, userId])

    const getProfileData = (userData: string | null | undefined, authData: string | null | undefined) => {
        return !isAuthProfile ? userData : authData
    }

    const isLookingForAJob = !isAuthProfile ? profileData?.lookingForAJob : authProfileData?.lookingForAJob
    const getLookingForAJob = () => {
        return isLookingForAJob ? "Так" : "Ні"
    }
    const getLookingForAJobDescription = () => {
        if (isLookingForAJob) {
            return !isAuthProfile ? <Text>{profileData?.lookingForAJobDescription}</Text> : <Text>{authProfileData?.lookingForAJobDescription}</Text>
        }
        
    }

    const imgUrl = isAuthProfile ? authProfileData?.photos.small : profileData?.photos.small

    return <View style={styles.container}>
        <Text>{props.userStatus ? props.userStatus : '------------'}</Text>
        {(imgUrl)
            ? <Image
                alt="AWSOME"
                style={styles.ava}
                source={{ uri: getCorrectMediaUrl(imgUrl) }}
            />
            : <Image
                style={styles.ava}
                source={require('../../img/ava_male.jpeg')}
            />
        }

        {isEdit
            ? <ProfileForm setEdit={setEdit} authProfileData={props.route?.params?.authProfile} />
            : <View>
                <Text>{ getProfileData(profileData?.fullName, authProfileData?.fullName) }</Text>
                <Text>{ getProfileData(profileData?.aboutMe, authProfileData?.aboutMe) }</Text>
                <Text>{ getLookingForAJob() }</Text>
                {getLookingForAJobDescription()}
                <Text>{ getProfileData(profileData?.location.country, authProfileData?.location.country) }</Text>
                <Text>{getProfileData(profileData?.location.city, authProfileData?.location.city)}</Text>

                <Text>Контакти:</Text>
                <Text>{ getProfileData(profileData?.contacts.github, authProfileData?.contacts.github) }</Text>
                <Text>{ getProfileData(profileData?.contacts.facebook, authProfileData?.contacts.facebook) }</Text>
                <Text>{ getProfileData(profileData?.contacts.instagram, authProfileData?.contacts.instagram) }</Text>
                <Text>{ getProfileData(profileData?.contacts.twitter, authProfileData?.contacts.twitter) }</Text>
                <Text>{ getProfileData(profileData?.contacts.website, authProfileData?.contacts.website) }</Text>
                <Text>{ getProfileData(profileData?.contacts.youtube, authProfileData?.contacts.youtube) }</Text>
                <Text>{ getProfileData(profileData?.contacts.linkedin, authProfileData?.contacts.linkedin) }</Text>
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
    userStatus: state.profilePage.status,
    authProfile: state.auth.authProfileData
})

export default connect(mapStateToProps, {
  getProfile, getStatus
})(Profile);