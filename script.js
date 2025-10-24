//dropdown functions//

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // fechando o dropdown
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction2() {
    var x = document.getElementById("search");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.className = 'fa fa-eye-slash showpwd';
    } else {
      x.type = "password";
      el.className = 'fa fa-eye showpwd';
    }
  }

/*Scroll reveal*/

window.revelar = ScrollReveal({reset:true});


revelar.reveal('.reveal-1', {
    duration: 1500,
    scale: '0.8',
    delay: 400
})
revelar.reveal('.reveal-2', {
    duration: 1500,
    scale: '1'
})