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
    getSintomas = async(id)=>{
        const response = await fetch(this.url_base + "sintomas/all/" + id)       
        const data = await response.json() 
        return data
    }
    saveSintoma = async(data)=>{
        const response =   await fetch(this.url_base +'sintomas/save', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(data),
})
const dataFromat = await response.json()
return dataFromat
    }
}
const apiService = new api()
export {apiService}