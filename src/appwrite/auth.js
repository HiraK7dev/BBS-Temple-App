import { account } from "./config";
import { OAuthProvider } from "appwrite";

export async function handleLogin(){
    account.createOAuth2Session(
        OAuthProvider.Google, // provider
        'http://localhost:5173/', // redirect here on success
        'http://localhost:5173/error', // redirect here on failure
        [] // scopes (optional)
    );
}