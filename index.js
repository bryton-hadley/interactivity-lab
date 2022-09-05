//console.log('Hello World')

document.querySelector('form').addEventListener('submit', addMovie)

let message = document.querySelector('#message')


function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input')
    
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector('ul');
    list.appendChild(movie);

    inputField.value = ''
}


function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'The movie has been removed'
    
}


function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true) {
     message.textContent = 'This Movie has been watched!'   
    } else {
        message.textContent = 'Movie added back!'
    }

}
