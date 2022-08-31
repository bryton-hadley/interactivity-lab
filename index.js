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
    
}


function crossOffMovie(event) {
    event.target.classList.toggle('checked')

}
