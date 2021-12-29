console.log("This is project 5");

// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bengaluru',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Aaliya',
        age: 18,
        city: 'Jaipur',
        language: '.Net',
        framework: 'Visual Studio',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        name: 'Aishwarya ray',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 31,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
        name: 'Anwar Moazam',
        age: 36,
        city: 'Jaipur',
        language: 'JavaScript',
        framework: 'Visual Studio',
        image: 'https://randomuser.me/api/portraits/men/98.jpg'
    }

]

// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}

// Button listener for Next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

const candidates = cvIterator(data);

nextCV();

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name : ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">Uses ${currentCandidate.framework}</li>
      </ul>`
    } else{
        alert("End of Applications");
        window.location.reload();
    }

}