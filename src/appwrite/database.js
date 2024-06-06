import { database } from "./config";

export async function list(){
    let promise = await database.listDocuments(
        `${import.meta.env.VITE_DATABASE_ID}`,
        `${import.meta.env.VITE_COLLECTION_ID}`,
        []
    );
    return promise;
}