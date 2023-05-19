class api {
    constructor(){
        this.url_base = "https://serverumbrella.vercel.app/"
    }
    getCards = async()=>{
        const response = await fetch(this.url_base + "/api/cards")
        const data = await response.json()
        return data
    }
}
const apiService = new api()
export {apiService}