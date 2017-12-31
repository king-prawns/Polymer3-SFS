const ENDPOINT = 'http://localhost:3000';

const parseJSON = response =>
  new Promise(resolve =>
    response.json().then(json =>
      resolve({
        status: response.status,
        ok: response.ok,
        json
      })
    )
  );

export const handleResponse = (response, resolve, reject) =>
  response.ok ? resolve(response.json) : reject(response.json);

const doFetch = (uri, op) =>
  new Promise((resolve, reject) => {
    fetch(ENDPOINT + uri, op)
      .then(parseJSON)
      .then(response => handleResponse(response, resolve, reject))
      .catch(error =>
        reject({
          networkError: error.message
        })
      );
  });

const f = method => (uri = '', data = null) => {
  const op = {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    method
  };
  if (data) {
    op.body = JSON.stringify(data);
  }
  return doFetch(uri, op);
};

const api = {
  get: f('GET'),
  patch: f('PATCH'),
  post: f('POST'),
  put: f('PUT'),
  delete: f('DELETE')
};

export default api;
