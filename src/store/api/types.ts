export interface IPropertyResponse {
   hits: [
    {
        id: number;
        price: number;
        title: string; 
        // rooms: number;
        // area: number;
        coverPhoto: {
            url: string
        }
    }
   ]
}

export interface IDetailsResponse {
    id: number;
    purpose: string;
    price: number;
    description: string;
    photos: {
    title: string;
    url: string
    }
}