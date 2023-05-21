
import CheckBox from "expo-checkbox"
import { useEffect, useState } from "react"
import { View, StyleSheet, TextInput, Button, Text, ScrollView } from "react-native"
import { ProfileDataType } from "../../ts/profile"

type PropsType = {
    authProfileData: ProfileDataType | null

    updateProfile: (data: UpdateProfileDataType, userId: string) => void
    setEdit: (isedit: boolean) => void
}

export const ProfileForm = (props: PropsType) => {

    const [fullName, setFullName] = useState(props.authProfileData?.fullName || "")
    const [aboutMe, setAboutMe] = useState(props.authProfileData?.aboutMe || null)
    const [lookForAJob, setLookForAJob] = useState(props.authProfileData?.lookingForAJob || false)
    const [lookingForAJobDescription, setLookingForAJobDescription] = useState(props.authProfileData?.lookingForAJobDescription || null)
    const [country, setCountry] = useState(props.authProfileData?.location?.country || null)
    const [city, setCity] = useState(props.authProfileData?.location?.city || null)
    const [github, setGithub] = useState(props.authProfileData?.contacts?.github || null)
    const [facebook, setFacebook] = useState(props.authProfileData?.contacts?.facebook || null)
    const [instagram, setInstagram] = useState(props.authProfileData?.contacts?.instagram || null)
    const [twitter, setTwitter] = useState(props.authProfileData?.contacts?.twitter || null)
    const [website, setWebsite] = useState(props.authProfileData?.contacts?.website || null)
    const [youtube, setYoutube] = useState(props.authProfileData?.contacts?.youtube || null)
    const [linkedin, setLinkedin] = useState(props.authProfileData?.contacts?.linkedin || null)

    useEffect(() => {

    }, [props.authProfileData])

    const updateProfile = () => {
        props.authProfileData
            && props.updateProfile({
                fullName, aboutMe, lookForAJob,
                lookingForAJobDescription, country,
                city, github, facebook, instagram,
                twitter, website, youtube, linkedin
            }, props.authProfileData.userId)
        props.setEdit(false)
    }

    return <ScrollView style={styles.container}>
        <TextInput
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            keyboardType="default"
            placeholder="Введіть ім'я"
            style={styles.inputText}
        />
        <TextInput
            value={aboutMe || ""}
            onChangeText={(text) => setAboutMe(text)}
            keyboardType="email-address"
            placeholder="Напишіть щось про себе"
            style={styles.inputText}
        />
        <View style={styles.checkBoxContainer}>
            <Text>Пошук роботи: </Text>
            <CheckBox
                value={lookForAJob}
                onValueChange={val => setLookForAJob(val)}
                color={lookForAJob ? '#4630EB' : '#f630E4'}
                style={styles.checkBox}

            />
            
        </View>
        
        <TextInput
            value={lookingForAJobDescription || ""}
            onChangeText={(text) => setLookingForAJobDescription(text)}
            keyboardType="default"
            placeholder="Опишіть бажану роботу"
            style={styles.inputText}
        />
        <TextInput
            value={country || ""}
            onChangeText={(text) => setCountry(text)}
            keyboardType="default"
            placeholder="Введіть назву своєї держави"
            style={styles.inputText}
        />
        <TextInput
            value={city || ""}
            onChangeText={(text) => setCity(text)}
            keyboardType="default"
            placeholder="Введіть назву свого міста"
            style={styles.inputText}
        />

        <Text>Контакти:</Text>
        <TextInput
            value={github || ""}
            onChangeText={(text) => setGithub(text)}
            keyboardType="default"
            placeholder="Введіть ваш Github"
            style={styles.inputText}
        />
        <TextInput
            value={facebook || ""}
            onChangeText={(text) => setFacebook(text)}
            keyboardType="default"
            placeholder="Введіть ваш Facebook"
            style={styles.inputText}
        />
        <TextInput
            value={instagram || ""}
            onChangeText={(text) => setInstagram(text)}
            keyboardType="default"
            placeholder="Введіть ваш Instagram"
            style={styles.inputText}
        />
        <TextInput
            value={twitter || ""}
            onChangeText={(text) => setTwitter(text)}
            keyboardType="default"
            placeholder="Введіть ваш Twitter"
            style={styles.inputText}
        />
        <TextInput
            value={website || ""}
            onChangeText={(text) => setWebsite(text)}
            keyboardType="default"
            placeholder="Введіть ваш веб-сайт"
            style={styles.inputText}
        />
        <TextInput
            value={youtube || ""}
            onChangeText={(text) => setYoutube(text)}
            keyboardType="default"
            placeholder="Введіть ваш Youtube"
            style={styles.inputText}
        />
        <TextInput
            value={linkedin || ""}
            onChangeText={(text) => setLinkedin(text)}
            keyboardType="default"
            placeholder="Введіть ваш Linkedin"
            style={styles.inputText}
        />

        <Button title="Зберегти" onPress={updateProfile} />
        <Button title="Відмінити" onPress={() => props.setEdit(false)} />

    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 100
    },
    ava: {
        width: 200,
        height: 200
    },
    inputText: {
        backgroundColor: "#999",
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    checkBoxContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        gap: 10
    },
    checkBox: {

    }
})