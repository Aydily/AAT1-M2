/* import "./style.css";
import "./src/app"; */
function cargarFooter() {
  fetch('src/pages/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', cargarFooter);


console.log("....");