const fetchToJson = async (endpoint: string, params: RequestInit) => {
  const tagRes = await fetch(endpoint, params);

  return tagRes.json();
};

export default fetchToJson;
