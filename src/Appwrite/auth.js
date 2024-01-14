

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";


export class AuthService{

     client = new Client();
     account
    
     constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);  // Your project ID

        this.account  = new Account( this.client)
     }

     async createAccount({email,password,name}){

      try{
        const userAccount =  await this.account.create(ID.unique(),email,password,name);

        if(userAccount){

        }else{

         return userAccount;
        }
      }catch(err){
         throw err
      }
     }

     async login({email,password}){

      try {

         const login = await this.account.createEmailSession(email,password)

         return login
         
      } catch (error) {
         throw error
      }
     }

     async getCurrentUser(){

      try {

         return await this.account.get()
         
      } catch (error) {

         console.log("Appwrite getCurrent  user error")
         throw error
      }
      return null
     }

     async logout(){

      try {
         await this.account.deleteSession('current')
         
      } catch (error) {
         console.log("Appwrite logout error")
            throw error
      }
     }
}
   
const authService = new AuthService()

export default authService


// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });


