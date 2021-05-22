// codeQuiz
//Create timer

// event handler for Start button (starts timer) and fetches first question

const questions = getData(`https://quizapi.io/api/v1/questions?apiKey=TNcx4VpjC6VDN3gD5wRGbwOXe8hWHUJFBYZ5EjCV`, (data) => data.json());

function getData(url, cb) {
    fetch(url)
      .then(response => response.json())
      .then(result => cb(result));
  }

  async function consumingFunc (url) {
    let response = await fetch(url)
    console.log(response)
  }

  consumingFunc

console.log(questions)
