
  let b_m = document.getElementById("acc");
  let dr = document.getElementById("drop0_1");
  b_m.addEventListener("click", () =>{
    if(getComputedStyle(dr).display != "none"){
      mouseLeave0();
    }
    else
    {

      leaveall();
      document.getElementById("drop0_1").style.display = "block";   
      document.getElementById("drop0_1").style.borderRadius = "10px";
      document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
    }
  })
  let b_msw = document.getElementById("sw");
  let drmsw = document.getElementById("drop1_1");
  b_msw.addEventListener("click", () => {
    if (getComputedStyle(drmsw).display != "none") {
      mouseLeave1();
    }
    else {

      leaveall();
      document.getElementById("drop1_1").style.display = "block";
      document.getElementById("drop1_1").style.borderRadius = "10px";
      document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
    }
  }) 
  let b_repbut = document.getElementById("repbut");
  let dr_repbut = document.getElementById("Republic");
  b_repbut.addEventListener("click", () =>{
    if(getComputedStyle(dr_repbut).display != "none"){
      leavesw();
    }
    else
    {
      leavesw();
      replace_footer();

      document.getElementById('Republic').style.display = 'block';
      leaveall();
    }
  })
  function getRepublic()
  {
    var statistics = "https://my-json-server.typicode.com/MasterJediKnight/animals-starwars/Page"
    fetch(statistics)
    .then(response => response.json())                                    	 
    .then(function (stats) {
        statistics_data = stats;
        var i = 0;
        for(i = 0; i < 4; i++)
        {
          createRepublic(statistics_data[0].StarWarsI[0].Republic[i], statistics_data[0].StarWarsI[0].Republic[i].li);
        }
    });
  }
  function createRepublic(element, subelement1)
  {
    let newli1 = document.createElement("li");
    newli1.textContent = subelement1;
    let divmod= document.getElementById("Republic");
    divmod.appendChild(newli1);
    toimage_rep(element);
  }
  function toimage_rep(obj) {
     var img = new Image();
     img.src = obj.image;
     img.setAttribute("Id", "myImg");
     img.setAttribute("onclick", "showImg(this)");
     img.setAttribute("style","width:100%;max-width:300px");
     img.setAttribute("alt", obj.alt);
     document.getElementById("Republic").appendChild(img);
  }
  let b_csi = document.getElementById("csi");
  let dr_csi = document.getElementById("federation");
  b_csi.addEventListener("click", () =>{
    if(getComputedStyle(dr_csi).display != "none"){
      leavesw();
    }
    else
    {
      leavesw();
      document.getElementById('federation').style.display = 'block';
      replace_footer();
      leaveall();
    }
  })

  function getSeparatist()
  {
    var statistics = "https://my-json-server.typicode.com/MasterJediKnight/animals-starwars/Page"
    fetch(statistics)
    .then(response => response.json())                                    	 
    .then(function (stats) {
        statistics_data = stats;
        let i = 0;
        var republic_governor = statistics_data[0].StarWarsI[0].Republic[0].li;
        for(i = 0; i < 4; i++)
        {
          createSeparatist(statistics_data[0].StarWarsI[1].Separatist[i], republic_governor);
        }
    });
  }
  function createSeparatist(element, subelement1)
  {
    let newli1 = document.createElement("li");
    newli1.textContent = subelement1;
    let divmod= document.getElementById("federation");
    divmod.appendChild(newli1);
    toimage_sep(element);
  }
  function toimage_sep(obj) {
     var img = new Image();
     img.src = obj.image;
     img.setAttribute("Id", "myImg");
     img.setAttribute("onclick", "showImg(this)");
     img.setAttribute("style","width:100%;max-width:300px");
     img.setAttribute("alt", obj.alt);
     document.getElementById("federation").appendChild(img);
  }
  let b_neutr = document.getElementById("neutr");
  let dr_neutr = document.getElementById("neutral");
  b_neutr.addEventListener("click", () =>{
    if(getComputedStyle(dr_neutr).display != "none"){
      leavesw();
    }
    else
    {
      leavesw();
      document.getElementById('neutral').style.display = 'block';
      replace_footer();
      leaveall();
    }
  })

  function getNeutral()
  {
    var statistics = "https://my-json-server.typicode.com/MasterJediKnight/animals-starwars/Page"
    fetch(statistics)
    .then(response => response.json())                                    	 
    .then(function (stats) {
        statistics_data = stats;
        let i = 0;
        for(i = 0; i < 3; i++)
        {
          createNeutral(statistics_data[0].StarWarsI[2].Neutral[i], statistics_data[0].StarWarsI[2].Neutral[i].li);
        }
    });
  }
  function createNeutral(element, subelement1)
  {
    let newli1 = document.createElement("li");
    newli1.textContent = subelement1;
    let divmod= document.getElementById("neutral");
    divmod.appendChild(newli1);
    toimage_neu(element);
  }
  function toimage_neu(obj) {
     var img = new Image();
     img.src = obj.image;
     img.setAttribute("Id", "myImg");
     img.setAttribute("onclick", "showImg(this)");
     img.setAttribute("style","width:100%;max-width:300px");
     img.setAttribute("alt", obj.alt);
     document.getElementById("neutral").appendChild(img);
  }
  function mouseLeave0() {
    leaveall();
    document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }

  //Menu drop 2
  function mouseEnter1() {
    leaveall();
    document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
    document.getElementById("drop1_1").style.display = "block";
    document.getElementById("drop1_1").style.borderRadius = "10px";
    replace_footer();
  }
  function mouseLeave1() {
    leaveall();
    document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  function mouseEnter2() {
    leaveall();
    document.getElementById("mamif").innerHTML = "Animaux<img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
    replace_footer();
  }
  function mouseLeave2() {
    leaveall();
    document.getElementById("mamif").innerHTML = "Animaux <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  function mouseEnter3() {
    leaveall();
    document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
    replace_footer();
  }
  function mouseLeave3() {
    leaveall();
    document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  function mouseEnter4() {
    leaveall();
    document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
    replace_footer();
  }
  function mouseLeave4() {
    leaveall();
    document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  /******/
  //ZOOMS
  var modal = document.getElementById("myModal");
  var i;

  var imag = document.getElementsByClassName("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  function showImg(ele) {
    modal.style.display = "block";
    modalImg.src = ele.src;
    captionText.innerHTML = ele.alt;
  }
  var span = document.getElementsByClassName("close")[0];

  /*****/
  //LEAVE ALL
  function leaveall() {
    document.getElementById("drop0_1").style.display = "none";
    document.getElementById("drop1_1").style.display = "none";
    document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("mamif").innerHTML = "Animaux <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("Footer").style.bottom = "27px";
    document.getElementById("allrights").style.bottom = "0";
  }
  function replace_footer()
  {
    document.getElementById("Footer").style.bottom = "27px";
    document.getElementById("allrights").style.bottom = "0";
    document.getElementById("Footer").style.transition = "all 1s ease-out;";
    document.getElementById("allrights").style.transition = "all 1s ease-out;";
  }
  function leavesw()
  { 
    document.getElementById('neutral').style.display = 'none';
    document.getElementById('federation').style.display = 'none';
    document.getElementById('Republic').style.display = 'none';
  } 
  window.onload = leaveall();
  window.onload = leavesw();
  window.onload = getRepublic();
  window.onload = getSeparatist();
  window.onload = getNeutral();
