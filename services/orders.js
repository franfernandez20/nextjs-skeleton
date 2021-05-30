const baseUrl = 'http://localhost:3000/api/order'

const create = async (newObject) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObject)
  })
  return console.log(response)
}

const getAll = async () => {
  const res = await fetch(baseUrl).then(res => res.json())
  return res.data
}

export default { create, getAll }
