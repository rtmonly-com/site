const requests = {
    request(url, method = 'GET', data = {}, params = {}) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                method: method,
                data: method === 'GET' ? params : data,
                dataType: 'json',
                cache: false,
                success: (response) => {
                    resolve(response);
                },
                error: (xhr) => {
                    console.error(`${method} request failed:`, xhr.statusText);
                    reject(new Error(xhr.statusText));
                },
            });
        });
    },

    get(url, params = {}) {
        return this.request(url, 'GET', {}, params);
    },

    post(url, data = {}) {
        return this.request(url, 'POST', data);
    },
};

$(async function() {
    const path = window.location.pathname.replace(/^\/|\/$/g, '').split('/').pop();
    switch (path) {
        case '': 
            indexManager.init();
            break;
        default: 
            break;
    }
    aos.init();
});
  