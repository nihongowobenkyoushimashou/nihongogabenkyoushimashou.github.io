//<script src="https://www.w3schools.com/lib/w3.js"></script>

//Makes accordion work
function accordionFunction() {
  //Accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adtypding and removing the "active" class, to highlight the button that controls the panel */
      this.classList.toggle("activeAcc");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

//Calls openTab() and openNo() 
function openPage(evt, i, y, n) {
  openTab(evt, i);
  openNo(y, n);
}

//Calls openTab() and openNo() 
function openPageTitle(evt, i, y, n) {
  openTabTitle(evt, i);
  openNo(y, n);
}

//Changes "no honorifics" page to proper version
function openNo(y, n) {
  let text = document.getElementById(y).innerHTML; 
  let result = text.replace(/chapter tbp/gi, "Hi! This chapter is still being written, so check back later for more awesome content!");
  result = result.replace(/✧ | ✧|⚜ | ⚜|♩ | ♩| ⬖|⬖ | ⬗|⬗ /g, "");

  // 5AE
  result = result.replace(/Eleanor-sama|Eleanor-dono/gi, "Lady Eleanor");
  result = result.replace(/Eleanor-ojousama|Eleanor-jou/gi, "Young Lady Eleanor");
  result = result.replace(/Ellie-nee/gi, "Sister Ellie");
  result = result.replace(/Ellie-chan/gi, "Ellie");
  result = result.replace(/Perfect Memory-san/gi, "Ms. Perfect Memory");
  result = result.replace(/Elaina-san/gi, "Ms. Elaina");
  
  result = result.replace(/Aurora-sama/gi, "Lady Aurora");
  result = result.replace(/Aurora-okaasama/gi, "Mother Aurora");
  result = result.replace(/Aurora-kaachan/gi, "Mommy Aurora");
  
  result = result.replace(/Evena-sama/gi, "Lady Evena");
  result = result.replace(/Evena-okaasama/gi, "Mother Evena");
  result = result.replace(/Evena-kaachan/gi, "Mommy Evena");

  result = result.replace(/Evangeline-sama/gi, "Lady Evangeline");
  result = result.replace(/Evangeline-ojousama/gi, "Young Lady Evangeline");
  result = result.replace(/Evie-jouchan/gi, "Young Lady Evie");
  result = result.replace(/Evie-nee/gi, "Sister Evie");

  result = result.replace(/Amy-san/gi, "Ms. Amy");
  result = result.replace(/Amy-sama|Amy-dono/gi, "Lady Amy");
  
  result = result.replace(/Emmelyn-sama/gi, "Lady Emmelyn");
  result = result.replace(/Lyn-chan/gi, "Lyn");
  result = result.replace(/Emmelyn-himesama/gi, "Princess Emmelyn");

  result = result.replace(/Hailey-chan/gi, "Hailey");
  result = result.replace(/Hailey-sensei/gi, "Instructor Hailey");

  result = result.replace(/Jason-kun/gi, "Jason");
  result = result.replace(/Jay-kun/gi, "Jay");
  
  result = result.replace(/Finn-kun/gi, "Finn");
  result = result.replace(/Finn-san/gi, "Mr. Finn");

  result = result.replace(/Kit-denka/gi, "Prince Kit");
  result = result.replace(/Katt-sensei/gi, "Professor Katt");
  
  result = result.replace(/Elliana-sama/gi, "Lady Elliana");
  result = result.replace(/Erica-sama/gi, "Lady Erica");
  result = result.replace(/William-sama/gi, "Lord William");
  result = result.replace(/Delilah-sama/gi, "Lady Delilah");
  result = result.replace(/Kelly-san/gi, "Ms. Kelly");
  result = result.replace(/Luca-chan/gi, "Luca");
  result = result.replace(/Ronnie-nii/gi, "Brother Ronnie");
  result = result.replace(/Lina-obasama/gi, "Aunt Lina");
  result = result.replace(/Ernie-ojiichan/gi, "Grandpa Ernie");
  result = result.replace(/Marie-okusama/gi, "Madam Marie");
  result = result.replace(/Lisa-chan/gi, "Lisa");
  result = result.replace(/Jocelyn–san/gi, "Ms. Jocelyn");
  
  // Deuce
  result = result.replace(/Xiao-Yuan/gi, "Little Yuan");
  result = result.replace(/Ah-Yuan/gi, "Yuan");
  result = result.replace(/Xiao-Yu/gi, "Little Yu");
  
  result = result.replace(/Xiao-An/gi, "Little An");
  result = result.replace(/Lao Fu/gi, "Old Fu");
  result = result.replace(/Xiao-Chun/gi, "Little Chun");
  result = result.replace(/Lao He/gi, "Old He");
  result = result.replace(/merchant-gege/gi, "merchant brother");

  // Judgment
  result = result.replace(/Caden-denka/gi, "Prince Caden");
  result = result.replace(/Caden-aniue/gi, "Elder Brother Caden");

  // Shadow Monarch
  result = result.replace(/Egor-niisama/gi, "Brother Egor");
  result = result.replace(/Peter-sama/gi, "Lord Peter");
  result = result.replace(/Elliot-sama/gi, "Lord Elliot");
  result = result.replace(/Ivy-sama/gi, "Lady Ivy");
  result = result.replace(/Chase-sama/gi, "Lord Chase");
  result = result.replace(/Lucille-okusama/gi, "Madam Lucille");
  result = result.replace(/Jerard-sama/gi, "Lord Jerard");
  result = result.replace(/Allie-sama/gi, "Lady Allie");
  
  result = result.replace(/August-sama/gi, "Lord August");
  result = result.replace(/Rosa-sama/gi, "Lady Rosa");

  // Blood Ties
  result = result.replace(/Kayden-sama/gi, "Lord Kayden");
  result = result.replace(/Kayden-denka/gi, "Prince Kayden");
  
  result = result.replace(/Dianne-sama|Dianne-dono/gi, "Lady Dianne");
  result = result.replace(/Shia-ojisama/gi, "Uncle Shia");
  result = result.replace(/Layla-sama/gi, "Lady Layla");
  result = result.replace(/Alvar-sama/gi, "Lord Alvar");
  
  // Non-specific people
  result = result.replace(/hahaue|okaa-sama|kaa-sama/gi, "Mother");
  result = result.replace(/okaa-san|kaa-san/gi, "Mom");
  result = result.replace(/okaa-chan|kaa-chan/gi, "Mommy");
  
  result = result.replace(/chichiue|otou-sama|tou-sama/gi, "Father");
  result = result.replace(/otou-san|tou-san/gi, "Dad");
  result = result.replace(/otou-chan|tou-chan/gi, "Daddy");

  result = result.replace(/aniue|onii-sama|nii-sama|onii-san|nii-san|onii-chan|nii-chan|nii/gi, "Elder Brother");
  result = result.replace(/aneue|onee-sama|nee-sama|onee-san|nee-san|onee-chan|nee-chan/gi, "Elder Sister");
  result = result.replace(/Nee/g, "Elder Sister");
  
  result = result.replace(/obaue|oba-sama|oba-san|oba-chan|ba-sama|ba-san|ba-chan/gi, "Aunt");
  result = result.replace(/ojiue|oji-sama|oji-san|oji-chan|ji-sama|ji-san|ji-chan/gi, "Uncle");
  
  result = result.replace(/obaa-sama|obaa-san|baa-sama|baa-san/gi, "Grandmother");
  result = result.replace(/obaa-chan|baa-chan/gi, "Grandma");
  
  result = result.replace(/ojii-sama|ojii-san|jii-sama|jii-san/gi, "Grandfather");
  result = result.replace(/ojii-chan|jii-chan/gi, "Grandpa");

  result = result.replace(/ Ge|Ge. /g, "Brother");
  result = result.replace(/ Jie|Jie. /g, "Brother");

  result = result.replace(/goshujin-sama/gi, "Master");
  result = result.replace(/Go. Shu. Jin. Sa. Ma!/gi, "Ma. St. Er!");
  result = result.replace(/ojou-sama/gi, "Milady");
  result = result.replace(/hime-sama/gi, "Princess");
  result = result.replace(/ouji-sama/gi, "Prince");
  result = result.replace(/Danna-sama/gi, "Master");

  result = result.replace(/kouhai/gi, "underclassman");
  result = result.replace(/senpai/gi, "upperclassman");
  
  // Words / Greetings
  result = result.replace(/gokigenyou/gi, "Salutations");
  result = result.replace(/Ara,|Ara.| Ara /g, "Oh, my");

  
  result = result.replace(/Delilah-sama/gi, "Lady Delilah");
  result = result.replace(/Delilah-sama/gi, "Lady Delilah");
  result = result.replace(/Delilah-sama/gi, "Lady Delilah");
  result = result.replace(/Delilah-sama/gi, "Lady Delilah");
  result = result.replace(/Delilah-sama/gi, "Lady Delilah");
  result = result.replace(/Delilah-sama/gi, "Lady Delilah");
  
  document.getElementById(n).innerHTML = result;
}

//Opens a chapter button when it is clicked
function openTab(evt, ch) {
  // Declare all variables
  var i, tabcontent, tablinks;
      
  // Get all elements with class = "tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class = "tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
      
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(ch).style.display = "block";
  evt.currentTarget.className += " active";

  showTitle();
  padding85();
}

function openTabMult(evt, ch, str) {
  openTab(evt, ch);
   
  let result = "<h5>" + str + "</h5>";
  document.getElementById("title").innerHTML = result;
}

function openTabTitle(evt, ch) {
  openTab(evt, ch);

  hideTitle();
  padding0();
  topFunction();
}

function prevNextButton() {
  var x = document.getElementsByClassName("prevNextDiv");

  for (var i = 0; i < x.length; i+=2) {
    var a = x[i].innerHTML;
    x[i+1].innerHTML = a;
  };
}

function prevNextHover(str) {
  var x;
  
  switch(str) {
    case "prev":
      x = 0;
      break;
    case "toc":
      x = 1;
      break;
    case "next":
      x = 2;
      break;
  }

  var list = ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-list-ul"></i>', '<i class="fa fa-angle-double-right"></i>'];

  var elements = document.getElementsByClassName("prev-next-button");

  for (var i = 0; i < elements.length; i++) {
    if (i % 3 === x) {
      elements[i].innerHTML = list[x];
    }
  }
}

function prevNextHoverLeave(str) {
  var x;
  
  switch(str) {
    case "prev":
      x = 0;
      break;
    case "toc":
      x = 1;
      break;
    case "next":
      x = 2;
      break;
  }

  var list = ['&#8249;', '&#9776;', '&#8250;'];

  var elements = document.getElementsByClassName("prev-next-button");

  for (var i = 0; i < elements.length; i++) {
    if (i % 3 === x) {
      elements[i].innerHTML = list[x];
    }
  }
}

function padding0() {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++)
    tabcontent[i].style.paddingTop="0px"
}

function padding85() {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++)
    tabcontent[i].style.paddingTop="85px"
}

//Opens the tags filtered object and opens the corresponding div 
function filterTags(evt, c) {
  openTab(evt, c);
  filterSelection(c);
}

// Hides the "no honorifics" div
function openHonorifics() {
  w3.hide('.no');
}

// Toggles between "yes honorifics" and "no honorifics"
function switchHonorifics() {
  w3.toggleShow('.yes');
  w3.toggleShow('.no');
}

function scrollFunction() {
  //Making scroll-to-top button & execute stickyNav
  let topButton = document.getElementById("topBtn"); // Get the button:

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } 
  else {
    topButton.style.display = "none";
  }
}
    
function topFunction() { // When the user clicks on the button, scroll to the top of the document
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// Add the sticky class to the sticky navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyDiv() {
  if (window.pageYOffset >= sticky) {
    stick.classList.add("sticky")
  } else {
    stick.classList.remove("sticky");
  }
}

function progressBarFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function clickDropdown(id) {
  document.getElementById(id).classList.toggle("show");

  // Close the dropdown menu if the user clicks outside of it
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
}

/* function clickDropdown(id, link) {
  document.getElementById(id).classList.toggle("show");

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches(link)) {// original didn't have the second half of the or statement
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
} */

function doDarkMode(id, before, after, name, ori, temp) {
  w3.toggleClass(name, ori, temp);
  toggleText(id, before, after);
  activateDarkMode();
}

function darkMode(id, before, after) {
  toggleText(id, before, after);
  activateDarkMode();
}

function activateDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  w3.toggleClass('hr','normal-hr','dark-mode-hr');
  w3.toggleClass('.navBarLinks','black-font','white-font');
  w3.toggleClass('.dropbtn','black-font','white-font');
  w3.toggleClass('.tablinks','white-background','black-background');
  w3.toggleClass('.tablinks','black-font','white-font');
  w3.toggleClass('.tablinksZ','white-background','black-background');
  w3.toggleClass('.tablinksZ','black-font','white-font');
  w3.toggleClass('.panel','white-background','black-background');
  w3.toggleClass('.panel','black-font','white-font');
  w3.toggleClass('.dark-mode-button','white-background','black-background');
  w3.toggleClass('.dark-mode-button','black-font','white-font');
  w3.toggleClass('.dark-mode-button','white-font','black-font');
  w3.toggleClass('.secret','white-font','black-font');
  w3.toggleClass('#searchButton','black-font','white-font');
  w3.toggleClass('#searchButton','white-background','black-background');
  w3.toggleClass('#stickyNav','black-font','white-font');
  w3.toggleClass('#stickyNav','white-background','black-background');
  w3.toggleClass('.honorificsButton','white-background','black-background');
  w3.toggleClass('.honorificsButton','black-font','white-font');
  w3.toggleClass('.no_underline','black-font','white-font');
  w3.toggleClass('.para','black-font','white-font');
  w3.toggleClass('.tocLinks','black-botBot','white-botBor');

  toggleSunMoon();
}

function toggleSunMoon() {
  w3.toggleShow('#sun');
  w3.toggleShow('#moon');
  makeInline('sun');
  makeInline('moon');
}

function hideSun() {
  w3.hide('#sun');
}

function makeInline(id) {
  var x = document.getElementById(id);

  if (x.style.display === "block") {
    x.style.display = "inline-block";
  }
}

function toggleFont() {
  w3.toggleClass('body','fontComic','fontTimes');
  w3.toggleClass('.arrow', 'arrow2', 'arrowDouble')
}

// Search filter
function filterSearch() {
  var searchOptionsID = document.getElementById('searchOptionsID');
  searchOptionsID.style.display = 'block';
  
  var input, filter, a, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("searchBar");
  a = div.getElementsByTagName("a");
  
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "block";
    } 
    else {
      a[i].style.display = "none";
    }
  }
} 

function openSearch() {
  document.getElementById("searchBar").classList.toggle("show");
}

function openSearchOptionsID() {
  var searchOptionsID = document.getElementById('searchOptionsID');

  document.onclick = function (e) {
    if (e.target.id !== 'searchOptionsID') {
      //element clicked wasn't the div; hide the div
      searchOptionsID.style.display = 'none';
    }

    if (e.target.id == 'searchOptionsID') {
      searchOptionsID.style.display = 'block';
    }
  };
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function smoothScrolling() {
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
}

function toggleSecret() {
  var list = document.getElementsByClassName("secret");
  
  for (var i = 0; i < list.length; i++) {
    if (list[i].style.visibility==="hidden") {
      list[i].style.visibility="visible";
    }
    else {
      list[i].style.visibility="hidden";
    }
  }
}

function hideTitle() {
  w3.hide('#title');
}
    
function showTitle() {
  w3.show('#title');
}

function filterSelection(c) {
  c = " " + c + " ";
  var x, i;
  x = document.getElementsByClassName("filterTag");
  if (c == " ALL ") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    remClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function remClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function leaveClick(idPara) {
  if(e.target.id !== idPara){
    //element clicked wasn't the div; hide the div
    pop.style.display = 'none';
  }

  if(e.target.id == idPara){
    pop.style.display = 'block';
  };
}

function toggleText(id, before, after) {
  var x = document.getElementById(id);
  if (x.innerHTML === before) {
    x.innerHTML = after;
  } else {
    x.innerHTML = before;
  }
}

function typeWriter(id, txt, speed) {
  toggleHideShow('.start', '.stop');
  
  var i = 0;
  
  interval = setInterval(
    function() {
      typeLetter(id, txt, i);
      i++;
    }, speed);
}

function typeLetter(id, txt, i) {
  document.getElementById(id).innerHTML += txt.charAt(i);
  
  if (i == txt.length-1) {
    stop(interval);
  }
}

function stop(id) {
  clearInterval(id);
  toggleHideShow('.start', '.stop');
}

function toggleHideShow(x, y) {
  w3.toggleShow(x);
  w3.toggleShow(y);
}

function openTooltipSearch(x) {
  const nums = [];

  var list = document.getElementsByClassName("tooltiptextSearch");

  for (var j = 0; j < list.length; i++) {
    nums[j] = j * 24;
  }
  
  for (var i = 0; i < list.length; i++) {
    if (i === x) {
      list[i].style.display = "block";
    }
    else {
      list[i].style.display = "none";
    }

    if (i < x) {
      list[i].style.top = nums[i] + "px";
    }
  }

  // Close the tooltipSearch if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#searchBar')) { 
      for (i = 0; i < list.length; i++) {
        list[i].style.display = "none";
      }
    }
  }
  
}

function openDefault() {
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
}

function startup() {
  openDefault();
  openHonorifics();
  hideTitle();
  prevNextButton();
  //hideSun();
  accordionFunction();
  //hideSearch();
}

/*
function toggleSideNav() {
  var x = document.getElementById("sideNav");
  if (x.style.display == "none") {
      openSideNav();
    } else {
      closeSideNav();
    }
  }
};
*/


/*
function hideSearch(event) {
  // Get the element
  var pop = document.getElementById('searchOptions');

  // When the user clicks anywhere outside of the div, close it
  if (event.target == pop) {
    pop.style.display = "none";
  }
}
*/

/* Set the width of the side navigation to 25% and the left margin of the page content to 25% */
/*function openSideNav() {
  document.getElementById("sideNav").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("main").style.width = "75%";

  /*w3.show('.tablinks');
  w3.show('.tablinksZ');
  w3.show('.accordion');
  w3.show('.panel');*/
  /*w3.show('#sideNav');*/
/*}*/

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
/*function closeSideNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.width = "100%";
  
  /*w3.hide('.tablinks');
  w3.hide('.tablinksZ');
  w3.hide('.accordion');
  w3.hide('.panel');*/
  /*w3.hide('#sideNav');*/
/*}*/
