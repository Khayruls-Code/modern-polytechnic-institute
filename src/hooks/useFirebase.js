import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication()

const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [teacher, setTeacher] = useState(null)

  //sing in using google
  const singInUsingGoogle = (location, navigate) => {
    setisLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        setSuccess(true)
        const user = result.user
        navigate(location.state?.from)
        addUser(user.displayName, user.email, "PUT")
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(setisLoading(false))
  }

  const setuserNameAndphoto = (name, image) => {
    updateProfile(auth.currentUser, {
      displayName: `${name}`, photoURL: `${image}`
    })
      .then(() => { })
      .catch(error => { setError(error.message) })
  }

  //create user by email & password
  const createUser = (email, password, name, image) => {
    setisLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setuserNameAndphoto(name, image)
        console.log(result.user)
        setError('')
        setSuccess(true)
        addUser(name, email, "POST")
      })
      .catch(error => {
        setError(error.message)
        setSuccess(false)
      })
      .finally(setisLoading(false))
  }

  //sing in using email & password
  const signInUser = (email, password, location, navigate) => {
    setisLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setError('')
        setSuccess(true)
        navigate(location.state.from)
      })
      .catch(error => {
        setError(error.message)
        setSuccess(false)
      })
      .finally(setisLoading(false))
  }

  //get current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        checkTeacher(user.email)
      } else {
        setUser({})
      }
      setisLoading(false)
    })
    return () => unSubscribe;
  }, [])

  //sing out user
  const singOutUser = () => {
    setisLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
        setError('')
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(setisLoading(false))
  }

  //post user
  const addUser = (name, email, method) => {
    const data = { name, email }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  }

  //set admin
  const checkTeacher = (email) => {
    fetch(`http://localhost:5000/users/${email}`)
      .then(res => res.json())
      .then(data => {
        setTeacher(data.teacher)
      })
  }


  return {
    singInUsingGoogle,
    user,
    error,
    success,
    createUser,
    signInUser,
    singOutUser,
    isLoading,
    teacher
  }

}


export default useFirebase;