import config from '../Config.js';
import { get, post } from './DataMapper';

class UserMapper {
    getGenders = () => {
        return get(config.restUrl + "users/genders");
    }

    authenticate = (email, password) => {
        return post(config.restUrl + "authentication/user", { email, password });
    }

    getUser(id) {
        return get(config.restUrl + "users/" + id);
    }


    getFriends = (user) => {
        return get(config.restUrl + `users/${user}/friends`);
    }
}

export default UserMapper;