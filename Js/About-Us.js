const API_URL = "https://be-balikpapan-7-production.up.railway.app";

const fetchTeams = async () => {
    const TeamsContainer = document.getElementById("teams")

    const teams = await fetch(`${API_URL}/teams`)
    const data = await response.json()
    console.log(data)

    data.data.forEach((element) => {
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

fetchTeams()
