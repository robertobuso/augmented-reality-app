export const fetchExperience = () => {
  return fetch('https://glacial-peak-72949.herokuapp.com/api/v1/experiences')
    .then(r => r.json())
}

export const fetchNewExperience = () => {
  const url = 'https://glacial-peak-72949.herokuapp.com/api/v1/experiences/6'

  const data = {
    flower_one: true,
    flower_two: true,
    flower_three: false,
    drag_book: false,
    take_flower_one: false,
    status: 'new'
  }

  const options = {
    method: 'PATCH',
    headers: {
      Accepts: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(url, options)
  .then(resp => resp.json())
}
