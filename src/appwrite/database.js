import { ID } from "appwrite";
import { database } from "./config";

export async function list(){
    try {
        let promise = await database.listDocuments(
            `${import.meta.env.VITE_DATABASE_ID}`,
            `${import.meta.env.VITE_COLLECTION_ID}`,
            []
        );
        return promise; 
    } catch (error) {
        return `error`;
    }
}

export async function create(name, location, yearPaid){
    const promise = database.createDocument(
        `${import.meta.env.VITE_DATABASE_ID}`,
        `${import.meta.env.VITE_COLLECTION_ID}`,
        ID.unique(),
        {"name": `${name}`,
        "accountStatus": true,
        "location": `${location}`,
        "yearPaid": `${yearPaid}`,
        }
    );
}