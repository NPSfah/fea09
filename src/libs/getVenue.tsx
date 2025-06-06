export default async function getVenue (id:string) {
    const response = await fetch(`https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues/${id}`)
    if(!response.ok){
        throw new Error(`failed to fetch venue with id : ${id}`)
    }
    return await response.json()
}