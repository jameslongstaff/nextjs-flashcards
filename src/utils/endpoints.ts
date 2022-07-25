const cardEndpoint = (id?: string) => {
  return `/api/card/${id ? id : ""}`;
};

const tagEndpoint = (id?: string) => {
  return `/api/tag/${id ? id : ""}`;
};

export { cardEndpoint, tagEndpoint };
