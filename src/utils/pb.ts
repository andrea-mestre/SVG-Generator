import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";
var path='';

if (import.meta.env.MODE === 'development') {
    path = 'http://127.0.0.1:8090'; // PocketBase port par défaut
} else {
    // En production, PocketBase tourne sur le même serveur
    path = 'http://127.0.0.1:8090'; 
}
const pb = new PocketBase(path) as TypedPocketBase;
export default pb;