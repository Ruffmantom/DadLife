import axios from "axios";


export default {
    // get all posts
    getPosts: function(){
        return axios.get("/api/posts");
    },
    // get the posts with given ID 
    getPost: function(id){
        return axios.get("/api/posts/" + id);
    },
    // save new post to db
    savePost: function(postData){
        return axios.post(postData);
    } 
}