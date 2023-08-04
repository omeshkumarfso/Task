
import axios from "axios";
import { homeActions } from "./HomeSlice";

export const fetchData = () => {
    return (async dispatch => {

        let result = {
            status: '',
            msg: ''

        }

        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {

                dispatch(homeActions.setData(response.data))
                result.status = true
            })
            .catch(error => {
                result.status = false
            });
        return result
    })
}