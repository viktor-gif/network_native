import { useState } from "react"
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native"
import { ProfileDataType } from "../../ts/profile"

type PropsType = {
    authId: string | undefined
    userId: string | undefined
    authProfileData: ProfileDataType | null
    profileData: ProfileDataType | null

    setEdit: (isEditMode: boolean) => void
}

export const ProfileInfo = (props: PropsType) => {
    const [isAdditionInfoActive, setAdditionInfoActive] = useState(false)

    const userId = props.userId
    const authId = props.authId

    const profileData = props.profileData
    const authProfileData = props.authProfileData

    const isAuthProfile = !userId || (userId === authId)

    const getProfileData = (userData: string | null | undefined, authData: string | null | undefined) => {
        return !isAuthProfile ? userData : authData
    }

    const isLookingForAJob = !isAuthProfile ? profileData?.lookingForAJob : authProfileData?.lookingForAJob
    const getLookingForAJob = () => {
        return isLookingForAJob ? "В пошуку роботи" : "Не зацікавлений в пошуку роботи"
    }
    const getLookingForAJobDescription = () => {
        if (isLookingForAJob) {
            return !isAuthProfile ? <Text>{profileData?.lookingForAJobDescription}</Text> : <Text>{authProfileData?.lookingForAJobDescription}</Text>
        }
        
    }

    return <ScrollView style={styles.container}>
        <Text style={styles.fullName}>{ getProfileData(profileData?.fullName, authProfileData?.fullName) }</Text>
        <Text>{getProfileData(profileData?.location.country, authProfileData?.location.country)} 
            {", "}
            {getProfileData(profileData?.location.city, authProfileData?.location.city)}</Text>
        <TouchableOpacity style={styles.toggleAdditionalInfo__container} onPress={() => isAdditionInfoActive ? setAdditionInfoActive(false) : setAdditionInfoActive(true)}>
            <Text style={styles.toggleAdditionalInfo__text}>
                {isAdditionInfoActive ? "Приховати додаткову інформацію" : "Показати додаткову інформацію"}
            </Text>
        </TouchableOpacity>
        {isAdditionInfoActive &&
            <View style={styles.additionInfo}>
                <View style={styles.contactBlock}>
                    <Text style={styles.blocks__header}>Детальніше про себе:</Text>
                    <Text>{getProfileData(profileData?.aboutMe, authProfileData?.aboutMe)}</Text>
                </View>
                <View style={styles.jobBlock}>
                    <Text style={styles.blocks__header}>Про роботу:</Text>
                    <Text>{getLookingForAJob()}</Text>
                    <Text style={styles.jobBlock__descriptionHeader}>Описання майбутньої роботи:</Text>
                    {getLookingForAJobDescription()}
                </View>
                <View style={styles.contactBlock}>
                    <Text style={styles.blocks__header}>Контакти:</Text>
                    <Text style={styles.contactBlock__items}>Github: <Text style={styles.contactBlock__items_data}>
                        {getProfileData(profileData?.contacts.github, authProfileData?.contacts.github)}
                    </Text></Text>
                    <Text style={styles.contactBlock__items}>Facebook: <Text style={styles.contactBlock__items_data}>
                        {getProfileData(profileData?.contacts.facebook, authProfileData?.contacts.facebook)}
                    </Text></Text>
                    <Text style={styles.contactBlock__items}>Instagram: <Text style={styles.contactBlock__items_data}>
                        {getProfileData(profileData?.contacts.instagram, authProfileData?.contacts.instagram)}
                    </Text></Text>
                    <Text style={styles.contactBlock__items}>Twitter: <Text style={styles.contactBlock__items_data}>
                        {getProfileData(profileData?.contacts.twitter, authProfileData?.contacts.twitter)}
                    </Text></Text>
                    <Text style={styles.contactBlock__items}>Веб-сайт: <Text style={styles.contactBlock__items_data}>
                        {getProfileData(profileData?.contacts.website, authProfileData?.contacts.website)}
                    </Text></Text>
                    <Text style={styles.contactBlock__items}>YouTube: <Text style={styles.contactBlock__items_data}>
                        {getProfileData(profileData?.contacts.youtube, authProfileData?.contacts.youtube)}
                    </Text></Text>
                    <Text style={styles.contactBlock__items}>IinkedIn: <Text style={styles.contactBlock__items_data}>
                        {getProfileData(profileData?.contacts.linkedin, authProfileData?.contacts.linkedin)}
                    </Text></Text>
                </View>
            </View>
        }
        {isAuthProfile && <View style={styles.editButton}><Button title="Редагувати" onPress={() => props.setEdit(true)} /></View>}
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100
    },
    fullName: {
        fontSize: 30
    },

    toggleAdditionalInfo__container: {

    },
    toggleAdditionalInfo__text: {
        color: '#888',
        fontSize: 20,
    },

    additionInfo: {

    },

    jobBlock: {
        marginTop: 10
    },
    jobBlock__descriptionHeader: {
        fontWeight: 'bold'
    },

    contactBlock: {
        marginTop: 10
    },
    blocks__header: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    contactBlock__items: {
        marginLeft: 10,
    },
    contactBlock__items_data: {
        color: '#999',
        fontStyle: 'italic',
        marginLeft: 20
    },

    editButton: {
        marginTop: 20
    }
})