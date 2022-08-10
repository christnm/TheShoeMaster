import React, {useState} from "react"
import {Button} from 'react-bootstrap'
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "../firebase-config"



const AddButton = () => {

    const [user, setUser] = useState("")

    onAuthStateChanged(auth, (user1) => {
        if (user1) {
            const uid = user1.uid;
            setUser(uid)
          } else {
            setUser("Not LoggedIn")
          }
    })

    return (
        <>
            <Button variant="dark" > 
                Add New Shoes
            </Button>

        </>

    )
}

export default AddButton