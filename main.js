function requestUserRepos(){
    
    cleanOldResults();

    const username = document.getElementById('username').value;
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;

    // Open a new connection, using a GET request via URL endpoint
    xhr.open('GET', url, true);

    xhr.onload = function() {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Log the response
        document.getElementById('hiddenResult').innerHTML += '<div class="my-3 p-3 bg-white rounded shadow-sm" id="repos"></div>';


        document.getElementById('repos').innerHTML += '<h2>Lists of ' + username + '\'s repos: </h2>';
        document.getElementById('repos').innerHTML += '<small>*Click one to get the contributors</small>';

        document.getElementById('repos').innerHTML += '<ol>';
        data.forEach(element => {
            document.getElementById('repos').innerHTML += '<li onClick="selectC(\'' + element.contributors_url + '\',\'' + element.name+ '\')">' + element.name + '</li>';
        });
        document.getElementById('repos').innerHTML += '</ol>';

    
    }
    
    // Send the request to the server
    xhr.send();
    
}

function selectC(repo, project_name) {
    document.getElementById('contriResults').innerHTML = '';
    const contributors = repo;
    const xhr = new XMLHttpRequest();
    const url = contributors;

    xhr.open('GET', url, true);

    xhr.onload = function() {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Log the response
        document.getElementById('contriResults').innerHTML += '<div class="my-3 p-3 bg-white rounded shadow-sm" id="contributors"></div>' ;

        document.getElementById('contributors').innerHTML += '<h3> Contributors for '+ project_name +' <h3>';
        document.getElementById('contributors').innerHTML += '<ol>';
        if(data.length == 0) {
            document.getElementById('contributors').innerHTML += '<li> No contributors for this repository!</li>';
        } else {
            data.forEach(element => {
                document.getElementById('contributors').innerHTML += '<li>' + element.login + '</li>';
            });
        }
        
        document.getElementById('contributors').innerHTML += '</ol>';

    
    }
    
    xhr.send();

}

function cleanOldResults() {
    document.getElementById('hiddenResult').innerHTML = '';
    document.getElementById('contriResults').innerHTML = '';
}