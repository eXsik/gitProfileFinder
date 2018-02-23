class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  // DISPLAY PROFILE
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary p-3">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-info p-3">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success p-3">Followers: ${user.followers}</span>
            <span class="badge badge-danger p-3">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">
                Company: <span class="font-weight-light">${user.company}</span>
              </li>
              <li class="list-group-item">
                Webiste/Blog: <span class="font-weight-light">${user.blog}</span>
              </li>
              <li class="list-group-item">
                Location: <span class="font-weight-light">${user.location}</span>
              </li>
              <li class="list-group-item">
                Member since: <span class="font-weight-light">${user.created_at}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // SHOW USER REPOS
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>

            <div class="col-md-6">
              <span class="badge badge-primary p-3">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-info p-3">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success p-3">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // OUTPUT REPOS
    document.querySelector('#repos').innerHTML = output;
  }

  // SHOW ALERT MESSAGE
  showAlert(message, className) {
    //CLEAR ANY REMAINIGN ALERTS
    this.clearAlert();
    // CREATE DIV
    const div = document.createElement('div');
    // ADD CLASS
    div.className = className;
    // ADD TEXT
    div.appendChild(document.createTextNode(message));
    // GET PARENT
    const container = document.querySelector('.searchContainer');
    // GET SEARCH BOX
    const search = document.querySelector('.search');
    // INSERT ALLERT
    container.insertBefore(div, search);
    
    //TIMEOUT AFTER 3 SEC
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // CLEAR ALERT MESSAGE
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // CLEAR PROFILE WHEN THERE'S NOTHING IN INPUT
  clearProfile() {
    this.profile.innerHTML = '';
  }
}