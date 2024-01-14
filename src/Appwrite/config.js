import { Client, Account, ID ,Databases,Storage,Query} from "appwrite";
import conf from "../conf/conf";
import { comma } from "postcss/lib/list";

export class Service{


    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) //  API Endpoint
        .setProject(conf.appwriteProjectId);  //  project ID

        this.account  = new Account( this.client)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }


    async createPost({title,slug,content,featuredImage,status,userId}){

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId

            }
            )
        } catch (error) {

            console.log("Appwrite service create Post error", error)
            throw error
            
        }


    }


    async updatePost(slug , {title,content,featuredImage,status}){

        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
            
        } catch (error) {
         console.log("updatePost error ", error)   
         throw error
        }
    }


    async deletePost(slug ){


        try {

            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {

            console.log("delete Post error",error)
            return false
           // throw error
           
        }
    }

    async getPost(slug){

        try {

            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

            )
            
        } catch (error) {
            
            
            console.log("get Post error",error)
            return false
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){ //enum also can be use

        try {

            return await this.databases.getDocument(//docs : limit offset
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
            
        } catch (error) {
            console.log("get Post error",error)
            return false
        }


    }


// Upload File service

    async uploadFile(file){
        try {

            return await this.bucket.createFile(    
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            
            console.log("upload file error",error)
            return false
        }
    }

    async deleteFile(fileId){

        try {
            
            await this.bucketdeleteFile(
                conf.appwriteBucketId,
                fileId,
            )

            return true
            
        } catch (error) {
            console.log("upload file error",error)
            return false
        }
    }

    async getFilePreveiw(fileId){
        return this.bucket.getFilePreveiw(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()


export default service