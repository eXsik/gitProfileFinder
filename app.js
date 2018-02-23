// INIT GITHUB
const github = new Github;
// INIT UI
const ui = new UI;

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listner
searchUser.addEventListener('keyup', (e) => {
  // GET INPUT TEXT
  const userText = e.target.value;

  if(userText !== '') {
    //MAKE HTTP CALL
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // SHOW ALERT
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // SHOW PROFILE
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // CLEAR PROFILE
    ui.clearProfile();

  }
})