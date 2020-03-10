import { AsyncStorage } from 'react-native';

async function storeData(data,key) {

    try {
        await AsyncStorage.setItem(key, data);
        return true;
    } catch (error) {
        // Error saving data
        console.log(error)
        return false
    }
}

async function getData(key,defaultValue='') {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value) {
            // We have data!!
            return value
        }
        else {
            return defaultValue
        }
    } catch (error) {
        // Error retrieving data
        return undefined
    }
}

export {
    storeData,
    getData
}