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

export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = src
  })
}
