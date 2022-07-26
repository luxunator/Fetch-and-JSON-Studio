// TODO: add code here
window.addEventListener("load", function(){
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        fetchPromise.then( function(response) {
        const jsonPromise = response.json();
        jsonPromise.then( function(json) {
            const container = document.getElementById("container");

            container.innerHTML += `<p>Astronaut Count: ${json.length}</p>`

            json.sort(function(a, b){
                return b.hoursInSpace - a.hoursInSpace;
            });

            for (let i = 0; i < json.length; i++) {
                let activeContent = json[i].active ? `<li style="color:green">Active: ${json[i].active}</li>` : `<li>Active: ${json[i].active}</li>`;
                container.innerHTML +=`
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                ${activeContent}
                                <li>Skills: ${json[i].skills.join(", ")}asd</li>
                            </ul>
                        </div>
                    <img class="avatar" src="${json[i].picture}">
                    </div>
                `;
            }
            
        });
    });
});
