import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { usersAPI } from "../../api/users"
import { UserType } from "../../ts/users"
import { User } from "./user/user"


export const Users = () => {
    const [users, setUsers] = useState<UserType[] | null>(null)
    console.log(users)

    useEffect(() => {
        usersAPI.getUsers().then(res => {
            setUsers(res.data.items)
        })
    }, [])

    const usersItems = users?.map((u) => {
        return <User key={u.id} id={u.id} fullName={u.fullName}
            location={u.location} status={u.status}
            photos={u.photos} followers={u.followers} />
    })

    return <ScrollView style={styles.container}>
        <Text>Users</Text>
        {usersItems}
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
        padding: 10
    }
})