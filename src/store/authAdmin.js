import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged ,signOut  } from "firebase/auth";
import router from '../Router'

export const AuthStore = defineStore('auth', {
    state () {  
        return {
            adminID: {},
            isAuth:false,
            loginError: false
        }
    },
    actions:{
        loginAdmin(userInfo){
            const auth = getAuth();


            signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((userCredential) => {
                let admin = {
                    email: userCredential.user.email,
                    uid : userCredential.user.uid,
                    token : userCredential.user.accessToken
                }
              // Signed in 
                   router.push('/dashboard')
                    this.adminID.push(admin)
                    this.isAuth = true
                    this.error = false

              
            })
            .catch((error) => {

                if(error){
                    this.loginError = true
                }
            });
         
            
        },
        getUserStatus(){
            
            const auth = getAuth();

            onAuthStateChanged(auth, (user) => {

                if (user) {
                    let admin = {
                        email: user.email,
                        uid : user.uid,
                        token : user.accessToken
                    }
                    this.adminID = admin
                    this.isAuth = true
                }else{
                    router.push('/login')
                }
              });
        },
        logMeOut(){
            const auth = getAuth();

            signOut(auth).then(() => {
                alert("تم تسجيل الخروج")
                router.push('/')
                this.isAuth = false
                this.adminID = []
              })
        }
    },
    getters:{
        getAdminID(state){
            return state.adminID
        },
        getLoginError(state){
            return state.loginError
        }
    }

})