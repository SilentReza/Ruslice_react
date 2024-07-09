const request = {
    get: (url, requestOptions, success, fail) => {
        fetch(url, requestOptions)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.status === 'success') {
                    success(responseJson);
                } else {
                    fail(responseJson);
                }
            })
    },
}

export default request;