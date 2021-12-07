console.log('This is Project 3');
// API Key : 4355e62860964ecf830edfb2877ac890

let country = 'in';
let apiKey = '4355e62860964ecf830edfb2877ac890';
// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,true);

// What to do when response is ready
xhr.onload = function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = "";
        console.log(articles);
        articles.forEach((element,index) => {
                // console.log(index);
                let news = `
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading${index}">
                                    <button
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse${index}"
                                        aria-expanded="true"
                                        aria-controls="collapse${index}"
                                    >
                                    <b>Breaking News ${index+1}</b> : ${element["title"]}
                                    </button>
                                </h2>
                                <div
                                    id="collapse${index}"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="heading${index}"
                                    data-bs-parent="#newsAccordion"
                                >
                                    <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target = "_blank">Read more here </a></div>
                                </div>
                            </div>`
                newsHTML += news;            
            newsAccordion.innerHTML = newsHTML;            
        });
    } else{
        console.log("Some error occured");
    }
}

xhr.send();


