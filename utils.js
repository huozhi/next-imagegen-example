export function param(basePath, params = {}) {
  let query = ''
  for (const key in params) {
    const value = params[key]
    if (value != null && value !== '') {
      if (query) query += '&'
      query += `${key}=${encodeURIComponent(value)}`
    }
  }
  return query ? basePath + '?' + query : basePath
}
