window.addEventListener("load", function(){
    fetch(" https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        //console.log(response)
        response.json().then(function(json){
        console.log(json);
        const container = document.querySelector("#container");
        let astronauts = "";

        json.sort(function(a, b){return a.hoursInSpace-b.hoursInSpace});
        json.forEach(function(astronaut){
            astronauts +=`
            <div class="astronaut">
                 <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        ${(astronaut.active===true) ? `<li style = "color: green">Active: ${astronaut.active}</li>`:`<li id = "active">Active: ${astronaut.active}</li>`}
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                     </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>`
        })
        
        const h1 = document.querySelector("h1")
        h1.innerHTML += `<br> Crew count: ${json.length} </br>`
        container.innerHTML = astronauts
    })
})
})

