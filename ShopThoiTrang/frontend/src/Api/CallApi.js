import axios from 'axios'

const CallApi = async (Url,newPost) => {
    try {
        const resp = await axios.post(Url, newPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export default CallApi