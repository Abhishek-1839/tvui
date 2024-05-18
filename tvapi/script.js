
// main.classList.add("mainbody");
// document.body.appendChild(main);
document.querySelector("#searchbtn").addEventListener("click", result);

async function result(){
    try {
        var ask = document.getElementById("search").value;
        var response = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`)
        var data = await response.json()
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.log(error);
    }

}
function displayResults(shows) {

 // Clear previous results
    shows.forEach(show => {
        // let showDiv = document.createElement('div');
        // showDiv.classList.add('col-lg-4', 'show-card');
        // showDiv.innerHTML = `
        //     <div class="card" style="width: 20rem; margin-left:2rem;background-color:beige">
        //         <img src="${show.show.image ? show.show.image.medium : 'https://via.placeholder.com/210x295'}" class="card-img-top" alt="${show.show.name}">
        //         <div class="card-body">
        //             <h5 class="card-title">${show.show.name}</h5>
        //             <p class="card-text">${show.show.summary ? show.show.summary : 'No summary available'}</p>
        //         </div>
        //     </div>//genres
        //premeried date, Schedule days,schedule time, rating, streaming network, country, summary
        // `;
        let main = document.querySelector('#mainbody');
        main.innerHTML=`
        <div class="centerbody">
        <div class="card" style="width: 20rem; margin-left:2rem;background-color:beige">
            <img src="${show.show.image ? show.show.image.medium : 'https://via.placeholder.com/210x295'}" class="card-img-top" alt="${show.show.name}">
            <div class="card-body">
                <h5 class="card-title"><p>Showname :</p>${show.show.name}</h5>
                <p class="card-text">Genres : ${show.show.genres}</p>
                <p class="card-text">Premeried Date : ${show.show.premiered}</p>
                <p class="card-text">Ratings : ${show.show.rating.average}</p>
                <p class="card-text">Show Running Time :${show.show.schedule.days}</p>
                <p class="card-text">Official Site: ${show.show.officialSite}</p>
                <p class="card-text">${show.show.network.name}</p>
                <p class="card-text">${show.show.network.country.name}</p>
                <p class="card-text">${show.show.summary ? show.show.summary : 'No summary available'}</p>
            </div>
        </div>
        </div>
    `;
        // row.append(col);
        // container.append(row);
        // document.body.append(container);
    });
}