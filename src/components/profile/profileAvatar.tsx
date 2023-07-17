import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"
import { getCorrectMediaUrl } from "../../utils/commonFunctions"
import DocumentPicker from "react-native-document-picker"

type PropsType = {
    authId: string | undefined
    userId: string | undefined
    imgUrl: string | null | undefined
}

export const ProfileAvatar = (props: PropsType) => {

    const userId = props.userId
    const authId = props.authId

    const isAuthProfile = !userId || (userId === authId)

    const imgUrl = props.imgUrl

    const selectFile = async () => {
        try {
            // console.log('DocumentPicker-- - - --- ---')
            // console.log(DocumentPicker)
        //   const res = await DocumentPicker.pick({
        //     type: [DocumentPicker.types.images],
            
            // There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf

          // });
          // console.log('res : ' + JSON.stringify(res));
          
        //   setSingleFile(res);
        } catch (err) {
            // console.log('err--___---')
            // console.log(err)
        //   setSingleFile(null);
          
        //   if (DocumentPicker.isCancel(err)) {
            
        //     alert('Canceled');
        //   } else {
            
        //     alert('Unknown Error: ' + JSON.stringify(err));
        //     throw err;
        //   }
        }
    }

    const uploadImage = () => {
        
    }

    return <View style={styles.container}>
        
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
            <View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={selectFile}>
                        <Text style={styles.buttonTextStyle}>Вибрати картинку</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={uploadImage}>
                        <Text style={styles.buttonTextStyle}>Загрузити картинку</Text>
                </TouchableOpacity>
            </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        
    },
    ava: {
        width: 200,
        height: 200
    },
    buttonStyle: {

    },
    buttonTextStyle: {

    }
})
