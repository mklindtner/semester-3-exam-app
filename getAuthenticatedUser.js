import { AsyncStorage } from 'react-native';


export default async () => {
    try {
        const value = await AsyncStorage.getItem("authenticationContext").user;
        if (value !== null) {
            return JSON.parse(value);
        }
        return null;
    } catch (error) {
        return null;
    }
}
