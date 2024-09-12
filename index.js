function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = '4d077bca814645acc0t04f0143a0ob25';
let context = 'be polite, give precise answer';
let prompt = 'who was the first female president?'
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

axios.get(apiUrl).then(showAnswer);