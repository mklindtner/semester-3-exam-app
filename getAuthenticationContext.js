import { AsyncStorage } from 'react-native';

export default async () => {
    try {
        const value = await AsyncStorage.getItem("authenticationContext");
        if (value !== null) {
            return JSON.parse(value);
        }
        return null;
    } catch (error) {
        console.log("error occured when getting authenticationContext");
    }


}