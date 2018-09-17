export const compose = (...fns) => param => 
  fns.reduceRight((acc, curr) => curr(acc), param)

export const queryExtractor = (url) =>
  url.split('?').pop()

// make array of query param strings
export const queriesExtractor = (url) =>
  url.split('?').pop().split('&')

// transform 1 query string into js object
export const queryTransformer = queryString =>
  queryString.split('=').reduce((prev, curr) => ({ [prev]: decodeURI(curr) }))

// parse array of query strings or 1 query string, into normalized js object
export const queryParser = queryString => {
  return Array.isArray(queryString)
    ? queryString.reduce(
        (acc, curr) => ({
          ...acc,
          ...queryTransformer(curr)
        }),
        {}
      )
    : queryTransformer(queryString)
}

export const getQueryParams = compose(queryParser, queriesExtractor)

// getQueryParams()                               { ...data from window.location.search }
// getQueryParams('/person?name=michael%20spohn') {name: 'michael spohn'}
// queryParser('name=michael%20spohn')            {name: 'michael spohn'}
// queryExtractor()                               'name=michael&age=26'
// queriesExtractor()                             ['name=michael', 'age=26']
