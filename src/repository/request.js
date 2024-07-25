import axios from 'axios';

const request = {
    get: (url, requestOptions, success, fail) => {
        axios.get(url, requestOptions)
            .then((response) => {
                console.log(response);
                const responseData = response.data;
                if (responseData.status === "success") {
                    success(responseData);
                } else {
                    fail(responseData);
                }
            })
            .catch((error) => {
                fail({ status: 'error', message: error.message });
            });
    },
}
export default request;
