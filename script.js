let load = {
  text: null,
  imageGrid: null,

  initialize: function() {
    this.text = document.getElementById("textToChange");
    this.imageGrid = document.querySelector(".image-grid");

    document.getElementById("submitUsername").addEventListener("click", this.displayUsername.bind(this));
    this.imageGrid.style.display = "none"; 
  },

  displayUsername: function() {
    let usernameInput = document.getElementById("username");
    let username = usernameInput.value;
    if (username !== "") {
      this.text.textContent = `Hello, ${username}! Here are Recommended Games For You!!`;
      this.imageGrid.style.display = "grid";
      usernameInput.value = ""; 
    } else {
      alert("Please enter a username!");
    }
  }
}

window.addEventListener("load", function() {
  load.initialize();
  }
)
