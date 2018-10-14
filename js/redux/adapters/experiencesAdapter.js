export const fetchExperiences = () => {

  return fetch('https://glacial-peak-72949.herokuapp.com/api/v1/experiences')
    .then(r => r.json())
}
