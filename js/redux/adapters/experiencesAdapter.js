export const fetchExperiences = () => {
  return fetch('http://localhost:3000/api/v1/experiences')
  .then(response => console.log(response, 'from fetch'))
  // .catch(function (err) {
  //       debugger
  //       return err;
  //     });
}
