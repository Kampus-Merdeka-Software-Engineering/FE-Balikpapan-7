const API_URL = "https://furry-ticket-production.up.railway.app";

const fetchTeam = async () => {
    const TeamsContainer = document.getElementById("team")

    const teams = await fetch(`${API_URL}/teams`)
    const data = await teams.json()
    console.log(data)

    data.forEach((element) => {
        console.log(element)
        const newTeams = document.createElement('div')
        newTeams.classList.add()
        newTeams.innerHTML = `
        <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src="${element.imageUrl}" alt="">
                    </div>
                    <div class="contentBx">
                        <h4>${element.name}</h4>
                        <h5>${element.projectRole}</h5>
                    </div>
                    <div class="sci">
                        <a href="${element.instagramUrl}"><i class="bx bxl-instagram"></i></a>
                        <a href="${element.linkedinUrl}"><i class="bx bxl-linkedin"></i></a>
                        <a href="${element.githubUrl}"><i class="bx bxl-github"></i></a>
                    </div>    
                </div>
            </div>`

        
        TeamsContainer.appendChild(newTeams)
        
    })

    TeamsContainer


};

fetchTeam()
