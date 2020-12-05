var axios = require('axios');

export const sendImages = data => ({
    type: 'GET_IMAGES',
    data,
});

export const getImages = () => async dispatch => {
    try {
        var config = {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/photos',
            headers: {
                'Cookie': '__cfduid=dfa8a094542a04f138b2e7d55bd04bc201607151662'
            }
        };
        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error;
            });
        dispatch(sendImages(data));
    } catch (error) {
        console.error(error);
    }
};