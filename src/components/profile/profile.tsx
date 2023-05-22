import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { connect } from "react-redux"
import { getProfile, getStatus, updateProfile, updateStatus } from "../../redux/profileReducer"
import { AppStateType } from "../../redux/redux-store"
import { ProfileDataType } from "../../ts/profile"
import { getCorrectMediaUrl } from "../../utils/commonFunctions"
import { ProfileForm } from "./profileForm"
import { ProfileInfo } from "./profileInfo"
import { ProfileStatus } from "./profileStatus"

type PropsType = {
    authId: string | undefined
    authProfileData: ProfileDataType | null
    profileData: ProfileDataType | null
    userStatus: string | null

    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateProfile: (data: UpdateProfileDataType, userId: string) => void
    updateStatus: (status: string | null, userId: string) => void
    route: any
}

const Profile = (props: PropsType) => {
    const [isEdit, setEdit] = useState(false)

    const userId = props.route?.params?.userId
    const authId = props.authId

    const profileData = props.profileData
    const authProfileData = props.authProfileData

    const isAuthProfile = !userId || (userId === authId)

    useEffect(() => {
        if (isAuthProfile) {
            authId && props.getStatus(authId)
        } else {
            userId && props.getStatus(userId)

            userId && props.getProfile(userId)
        }
        
        
    }, [isAuthProfile, userId])

    const imgUrl = isAuthProfile ? authProfileData?.photos.small : profileData?.photos.small

    return <View style={styles.container}>

        <ProfileStatus userId={userId} authId={authId}
            userStatus={props.userStatus} getStatus={props.getStatus}
            updateStatus={props.updateStatus}
        />
        
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
            ? <ProfileForm setEdit={setEdit} authProfileData={props.authProfileData} updateProfile={props.updateProfile} />
            : <ProfileInfo authId={authId} userId={userId} authProfileData={authProfileData}
                profileData={profileData} setEdit={setEdit} />
        }
        

    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        gap: 20
    },
    ava: {
        width: 200,
        height: 200
    },
    profileDialogWindow: {
        position: 'absolute',
        left: '55%',
        top: '20%',
        zIndex: 1000,
        transform: [{translateX: -150}],
    }
})

const mapStateToProps = (state: AppStateType) => ({
    authId: state.auth.authData?.id,
    profileData: state.profilePage.profileData,
    userStatus: state.profilePage.status,
    authProfileData: state.auth.authProfileData
})

export default connect(mapStateToProps, {
  getProfile, getStatus, updateProfile, updateStatus
})(Profile);