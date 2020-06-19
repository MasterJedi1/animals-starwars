
  function launch_scrawl() {/*Transcrit de CSS et HTML par David et Vincent*/

    let sectionintro1 = document.createElement("section");
    sectionintro1.textContent = "A long time ago, in a galaxy far,";
    sectionintro1.setAttribute("class", "introspan");
    let sectionintro2 = document.createElement("section");
    sectionintro2.textContent = "far away....";
    sectionintro2.setAttribute("class", "introspan");
    let sectionintro = document.createElement("section");
    sectionintro.appendChild(sectionintro1);
    sectionintro.appendChild(sectionintro2);
    sectionintro.setAttribute("class", "intro");

    let sectionlogo = document.createElement("section");

    let logo_img = new Image();
    logo_img.src = "logo/1280px-star_wars_logo.png";
    sectionlogo.appendChild(logo_img);
    sectionlogo.setAttribute("class", "logo");


    let div_board = document.createElement("div");


    let newcontent = document.createElement("div");

    let newp1 = document.createElement("p");
    // newp1.textContent = x1.value;
    newp1.textContent = document.getElementById("in1").value;
    newp1.setAttribute("Id", "title");

    let newp2 = document.createElement("p");

    newp2.textContent = document.getElementById("in2").value;
    newp2.setAttribute("Id", "subtitle");
    let newp3 = document.createElement("p");

    newp3.textContent = document.getElementById("in3").value;

    newcontent.appendChild(newp1);
    newcontent.appendChild(newp2);
    newcontent.appendChild(newp3);
    newcontent.setAttribute("Id", "content");
    div_board.appendChild(newcontent);
    div_board.setAttribute("Id", "board");
    document.getElementById("taches").style.display = "none";
    document.getElementById("buttonhavetohide").style.display = "none";
    document.getElementById("bodyweb").appendChild(sectionintro);
    document.getElementById("bodyweb").appendChild(sectionlogo);
    document.getElementById("bodyweb").appendChild(div_board);
    document.getElementById("player").play();
    stars();
  }


  window.addEventListener("resize", stars());
  

  // For every star we want to display
  function stars()
  {
    document.getElementById("bodyweb").style.backgroundColor = "black";
    document.getElementById("bodyweb").style.width ="100%";
    document.getElementById("bodyweb").style.height ="100%";

    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.className = "star";
      var xy = getRandomPosition();
      star.style.top = xy[0] + 'px';
      star.style.left = xy[1] + 'px';
      document.body.append(star);
    }
  }
  // Gets random x, y values based on the size of the container
  function getRandomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }