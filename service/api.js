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
        console.log(this.url_base + "api/cards/details/" + id)
        const response = await fetch(this.url_base + "api/cards/details/" + id)       
        const data = await response.json() 
        return data
    }
}
const apiService = new api()
export {apiService}