import apiClient from '@/api';

export default ({ $axios }) => {
  apiClient.apiProvider = (
    { body, path, headers, method },
    onError,
    onSuccess
  ) => {
    $axios({
      url: path,
      data: body,
      headers,
      method: String(method).toLowerCase(),
    })
      .then(({ data }) => onSuccess(data))
      .catch(onError);
  };
};
