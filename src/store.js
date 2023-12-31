import {  legacy_createStore as createStore } from 'redux'
import rootred from "./redux/reducers/main";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig,  rootred)

const store = createStore(
    persistedReducer
);
const persistor =persistStore(store)

export default store;
export{persistor}