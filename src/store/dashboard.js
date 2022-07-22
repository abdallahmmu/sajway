import { defineStore } from 'pinia'
import { mealsCollection, ordersCollection } from '../firebase'
import axios from "axios";
import { onSnapshot, addDoc, doc , deleteDoc, getDoc, updateDoc } from '@firebase/firestore'

import router from '../Router'

export const dashboardStore = defineStore('dashboard', {
    state () {  
        return {
            orders: [],
            meals: [],
            isLoading: false,
            mealEdit:'',
            editedImage: '',
            imgLoad: true,   
        }
    },
    actions:{
        getMeals(){
            this.isLoading = true
           onSnapshot(mealsCollection, (snapshot) => {
                let data =[]
                snapshot.docs.forEach((doc)=>{
                    data.push({
                    
                        id:doc.id,
                        ...doc.data()
                    })
                })
                data.reverse()
                this.meals = data
                this.isLoading = false
            })
        },
       async addToDB(formData){
            let newDoc =  await addDoc(mealsCollection,formData)
            alert("لقد تم اضافة المنتج بنجاح")
            router.push('/dashboard')
        },
        async deleteItem(id){
            let d = doc(mealsCollection,id)
            let feedback = await deleteDoc(d)

            alert('تم مسح الطلب بنجاح')
        },
      async  getMealByID(id){
            try {
                let docRef = doc(mealsCollection, id)
                let feedback = await getDoc(docRef)
    
                let newDocEdit = {
                    ...feedback.data(),
                    id:feedback.id
                }

                this.mealEdit = newDocEdit
            } catch (error) {
                alert('حدث خطأ ما')
                
                router.go()
            }
        },
    async updateToDB(formData,id,newImage){ 

            let myFormUpdate = {
                title: formData.value.title,
                catigory: formData.value.catigory,
                ingredients: formData.value.ingredients,
                price : formData.value.price,
                image: newImage.value.value
            }
           let docRef = doc(mealsCollection, id)

          let feedback = await updateDoc(docRef, myFormUpdate)
            
            alert("لقد تم التحديث بنجاح")
            router.push('/dashboard')
        },
        // handeling the uploadimage

        UploadImage (file) {
            this.imgLoad = false;
            const CLOUDINARY_BASE_URL =
            "https://api.cloudinary.com/v1_1/dzx2vt25l/image/upload";
            const CLOUDINARY_PRESET = "sbcjv8ir";
            let newFile = file.target.files[0];
            let formData = new FormData();
            formData.append("file", newFile);
            formData.append("upload_preset", CLOUDINARY_PRESET);
        
            axios({
            method: "post",
            url: CLOUDINARY_BASE_URL,
            data: formData,
            }).then((res) => {
            this.editedImage = res.data.url;
        
            this.imgLoad = true;
            });
        },

        getOrders(){
            //this.isLoading = true
           onSnapshot(ordersCollection, (snapshot) => {
                let data =[]
                snapshot.docs.forEach((doc)=>{
                    data.push({
                    
                        id:doc.id,
                        ...doc.data()
                    })
                })
                data.reverse()
                this.orders = data
                //this.isLoading = false

            })

        },
       async updateAcceptStatus(id){

            let NewStatus = {
                accepted : true
            }
           let docRef = doc(ordersCollection, id)

          let feedback = await updateDoc(docRef, NewStatus)

          console.log("done")
    
        },
        async deleteNow(id){
            let d = doc(ordersCollection,id)
            let feedback = await deleteDoc(d)

            alert('تم مسح المنتج بنجاح')
        },

    },
    getters:{
        getAllMeals(state){
            return state.meals
        },
        getEditedMeal(state){
            return state.mealEdit
        },
        getImageUpdate(state){
            return state.editedImage
        },
        getUpdatedOrders(state){
            return state.orders
        },
    }

})