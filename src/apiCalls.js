// process.env.REACT_APP_API_KEY

export const apiCall = async (query) => {
  console.log('query', query)
  console.log('api key:', process.env.REACT_APP_API_KEY)
  const res = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
  console.log('res', res)
  const data = await res.json()
  console.log('data', data)
  return data
}