import { defineStore } from 'pinia'
import { mealsCollection, ordersCollection } from '../firebase'
import { onSnapshot, addDoc } from '@firebase/firestore'
import router from '../Router'
export const Meals = defineStore('meals', {
    state () {  
        return {
            meals: [],
            isLoading: false,
            cart:JSON.parse(localStorage.getItem("cart")) || [],
            total:0
            
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
        addToCart( { id, title , price, image } ){
         //cheack if the item is already in the cart or no
            const index = this.cart.findIndex(item => item.id === id)
            // new object to the cart
            const addMeal = {
                id,
                title,
                price,
                qty:1,
                image
            }
            //adding the cart item and cheack if it exsist or no
            if(index === -1){
                this.cart.push(addMeal)
            }else{
                this.cart[index].qty++
            }

            localStorage.setItem('cart', JSON.stringify(this.cart))
            router.push('/cart')

            
        },
        increaseMeal(id){
         ///get the index of the id in the array of objects name Carts
         const index = this.cart.findIndex(item => item.id === id)
         this.cart[index].qty++
         localStorage.setItem('cart', JSON.stringify(this.cart))
         
        },
        decreaseMeal(id){
         //get the index of the id in the array of objects name Carts
         const index = this.cart.findIndex(item => item.id === id)
         this.cart[index].qty--

         if(this.cart[index].qty <= 0){
            this.deleteMeal(id)
         }
         localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        deleteMeal(id){
            //get the index of the id in the array of objects name Carts
         const index = this.cart.findIndex(item => item.id === id)
            this.cart.splice(index,1)
            localStorage.setItem('cart', JSON.stringify(this.cart))

        },
      async  buyOrder(formData){
                //filterd the cart for ordering
                let orderItem = this.cart.map(item => {
                    return {
                       qty:item.qty,
                       title: item.title
                    }
                })

                console.log(orderItem)

                let orderNow = {
                    ...formData,
                    total : this.total,
                    orderItem:orderItem,
                    accepted : false
                    
               }
             let newDoc =  await addDoc(ordersCollection,orderNow)
          alert("لقد تم طلب الاوردر بنجاح سيتم التواصل معكم قريبا شكرا لزيارتنا")
            
            
            localStorage.removeItem("cart")
            router.go()

        }
    },

    getters:{
        getAllMeals(state){
            return state.meals
        },
        getCartUpdated(state){
            return state.cart
        },
        getTotal(state){
           let t = state.cart.map(m => m.qty * m.price)
            let tx = 0
            for(let i=0; i<t.length; i++){
                tx += t[i]
            }
            this.total = tx

           return tx
          
        }

    }

})