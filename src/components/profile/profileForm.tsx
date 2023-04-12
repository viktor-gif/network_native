
import CheckBox from "expo-checkbox"
import { useState } from "react"
import { View, StyleSheet, TextInput, Button, Text } from "react-native"

type PropsType = {
    setEdit: (isedit: boolean) => void
}

export const ProfileForm = (props: PropsType) => {

    const [fullname, setFullName] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const [lookForAJob, setLookForAJob] = useState(false)
    const [lookingForAJobDescription, setLookingForAJobDescription] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')

    return <View style={styles.container}>
        <TextInput
            value={fullname}
            onChangeText={(text) => setFullName(text)}
            keyboardType="default"
            placeholder="Введіть ім'я"
            style={styles.inputText}
        />
        <TextInput
            value={aboutMe}
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
            value={lookingForAJobDescription}
            onChangeText={(text) => setLookingForAJobDescription(text)}
            keyboardType="default"
            placeholder="Опишіть бажану роботу"
            style={styles.inputText}
        />
        <TextInput
            value={country}
            onChangeText={(text) => setCountry(text)}
            keyboardType="default"
            placeholder="Введіть назву своєї держави"
            style={styles.inputText}
        />
        <TextInput
            value={city}
            onChangeText={(text) => setCity(text)}
            keyboardType="default"
            placeholder="Введіть назву свого міста"
            style={styles.inputText}
        />

        <Button title="Зберегти" onPress={() => props.setEdit(false)} />
        <Button title="Відмінити" onPress={() => props.setEdit(false)} />

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