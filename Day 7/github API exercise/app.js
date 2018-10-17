fetch('https://api.github.com/users/andyaylward')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.avatar_url);
        console.log(data.repos_url);
        console.log(data.name);
        console.log(data.login);
        console.log(data.url);
    })
