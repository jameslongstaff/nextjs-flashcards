const fetchToJson = async (endpoint: string, params: any) => {
  const tagRes = await fetch(endpoint, params);

  return tagRes.json();
};

export default fetchToJson;
