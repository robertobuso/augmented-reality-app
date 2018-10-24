export const fetchExperience = () => {
  return fetch('https://glacial-peak-72949.herokuapp.com/api/v1/experiences')
    .then(r => r.json())
}

export const fetchNewExperience = () => {
  const url = 'https://glacial-peak-72949.herokuapp.com/api/v1/experiences/6'

  const data = {
    flower_one: false,
    flower_two: false,
    flower_three: false,
    drag_book: false,
    take_flower_one: false,
    click_chest: false,
    click_church: false,
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

export const fetchUpdatedAudio = (audioSelection) => {
  const url = 'https://glacial-peak-72949.herokuapp.com/api/v1/experiences/6'

  const data = { audio: audioSelection }

  const options = {
    method: 'PATCH',
    headers: {
      Accepts: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(url, options)
}

export const fetchUpdatedFlower = (flower) => {
  const url = 'https://glacial-peak-72949.herokuapp.com/api/v1/experiences/6'

  const data = { [`${flower}`]: true,
                  status: flower}

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

export const fetchUpdatedTask = (task) => {
  const url = 'https://glacial-peak-72949.herokuapp.com/api/v1/experiences/6'

  const data = { [`${task}`]: true,
                  status: task }

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
