import React from 'react'
import axios from "axios"







// character api
export const Characterapi = async () => {
try{
    const url = await axios.get('https://api.potterdb.com/v1/characters');
    const response = url.data ;
    return response;
}
 catch(error){
    console.log("Here is the error:", error);
}
     
}






// Books APIS 

export const Bookapi = async () => {
    try{
    const url = await axios.get('https://api.potterdb.com/v1/books');
    const response = url.data ;
    return response;
    } catch(error){
    console.log("Here is the error:", error);
    }
         
    }
        


        // books ID 
export     const BooksapiDetails = async (id) => {
        try {
            const url = await axios.get(`https://api.potterdb.com/v1/books/${id}`);
            const response = url.data;
            // console.log(response);
                return response;
        } 
        catch (error) {
            console.log("Here is the error:", error);
        }
        }



// MOVIE  APIS
export const Movieapi = async () => {

try{
        const url = await axios.get('https://api.potterdb.com/v1/movies');
        const response = url.data ;
        return response;
} 
    catch(error){
        console.log("Here is the error:", error);
        }
             
          }
        
        
        
        
// MOvies id
export const MovieapiDetails = async (id) => {
    try {
        const url = await axios.get(`https://api.potterdb.com/v1/movies/${id}`);
        const response = url.data;
        // console.log(response);
        return response;
    } 
    catch (error) {
        console.log("Here is the error:", error);
    }
}





// POTION APIS

export const Potionapi = async () => {
try{
    const url = await axios.get('https://api.potterdb.com/v1/potions');
    const response = url.data ;

    return response;
    }
     catch(error){
    console.log("Here is the error:", error);
    }
}
        

// potion id
export const PotionapiDetails = async (id) => {
    try {
        const url = await axios.get(`https://api.potterdb.com/v1/potions/${id}`);
        const response = url.data;
        // console.log(response);
        return response;
    } catch (error) {
        console.log("Here is the error:", error);
    }
}