class api {
    constructor(){
        this.url_base = "https://serverumbrella.vercel.app/"
    }
    getCards = async(categorie)=>{
        const response = await fetch(this.url_base + "api/cards/" + categorie)
        const data = await response.json()
        return data
    }
    getCard = async(id)=>{
        const response = await fetch(this.url_base + "api/cards/details/" + id)       
        const data = await response.json() 
        return data
    }
    getPosts = async(id)=>{
        const response = await fetch(this.url_base + "api/posts/all")       
        const data = await response.json() 
        return data
    }
    getPost = async(id)=>{
        const response = await fetch(this.url_base + "api/posts/datails/" + id)       
        const data = await response.json() 
        return data
    }
}
const apiService = new api()
export {apiService}