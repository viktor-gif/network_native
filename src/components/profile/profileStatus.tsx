import { useEffect, useState } from "react"
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableOpacity } from "react-native"

type PropsType = {
    authId: string | undefined
    userId: string | undefined
    userStatus: string | null

    getStatus: (userId: string) => void
    updateStatus: (status: string | null, userId: string) => void
}

export const ProfileStatus = (props: PropsType) => {
    const [isEdit, setEdit] = useState(false)
    const [statusText, setStatusText] = useState<string | null>(null)

    const [checkDeletedStatus, setCheckDeletedStatus] = useState(false)

    const userId = props.userId
    const authId = props.authId

    const isAuthProfile = !userId || (userId === authId)

    useEffect(() => {
        if (isAuthProfile) {
            authId && props.getStatus(authId)
        } else {
            userId && props.getStatus(userId)
        }
    }, [isAuthProfile, userId, isEdit, checkDeletedStatus])

    const updateStatus = () => {
        authId && props.updateStatus(statusText, authId)
        setEdit(false)
    }

    const resetUpdatingStatus = () => {
        setStatusText(props.userStatus)
        setEdit(false)
    }

    const deleteStatus = () => {
        authId && props.updateStatus(null, authId)
        checkDeletedStatus ? setCheckDeletedStatus(false) : setCheckDeletedStatus(true)
        authId && props.getStatus(authId)
        console.log('checkDeletedStatus ' + checkDeletedStatus)
        console.log(authId)
    }

    return (
        <View style={styles.container}>
        {isEdit
            ? <View>
                <TextInput
                    value={statusText || ""}
                    onChangeText={(text) => {
                        text === "" ? setStatusText(null) : setStatusText(text)
                    }}
                    keyboardType="default"
                    placeholder="Введіть статус"
                    style={styles.inputText}
                />
                <Button title='Зберегти' onPress={updateStatus}/>
                <Button title='Відмінити' onPress={resetUpdatingStatus}/>
            </View>
            : <View style={styles.statusContainer}>
                <Text>{props.userStatus ? props.userStatus : '------------'}</Text>
                
                {isAuthProfile
                    && <TouchableOpacity onPress={() => setEdit(true)}>  
                        <Image
                            style={styles.iconsPic}
                            source={require('../../img/icons/update.png')}
                        />
                    </TouchableOpacity>
                }
                {isAuthProfile
                    && <TouchableOpacity onPress={deleteStatus}>     
                        <Image
                            style={styles.iconsPic}
                            source={require('../../img/icons/delete-icon.png')}
                        />
                    </TouchableOpacity>
                }
            </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    statusContainer: {
        flexDirection: 'row',
        gap: 10
    },
    inputText: {

    },
    iconsPic: {
        width: 20,
        height: 20,
    },
    dialogWindowContainer: {
        gap: 10,
        width: 300,
        padding: 40,
        backgroundColor: '#a58',
        position: 'absolute',
        left: '50%',
        top: 400,
        zIndex: 1000,
        transform: [{translateX: -150}],
    }
})
