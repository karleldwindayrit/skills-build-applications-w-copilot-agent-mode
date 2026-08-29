export function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}

export function normalizeApiResponse(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && typeof payload === 'object') {
    const nestedCollections = [payload.results, payload.data, payload.items, payload.records];

    for (const collection of nestedCollections) {
      if (Array.isArray(collection)) {
        return collection;
      }
    }
  }

  return [];
}
