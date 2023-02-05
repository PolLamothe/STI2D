var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
var SIN = document.getElementById('SIN')

$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

/*$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});*/
function setDisplayNone(activeButtonElement, newButtonElement, transitiontype){
  activeButtonElement.style.display = 'none'
  if(transitiontype == "leftToRight"){
    activeButtonElement.classList.remove('getAwayLeft')
    newButtonElement.classList.remove('comingRight')
  }else if(transitiontype == "rightToLeft"){
    activeButtonElement.classList.remove('getAwayRight')
    newButtonElement.classList.remove('comingLeft')
  }
  
}

function Click(activeButton, newButton){
  var listOfDisplay = ['SIN','ITEC','AC','EE']
  newButton = newButton.replace('Button','')
  var activeButtonElement = document.getElementById(activeButton)
  var newButtonElement = document.getElementById(newButton)
  var transitiontype
  if(listOfDisplay.indexOf(activeButton) < listOfDisplay.indexOf(newButton)){
    activeButtonElement.classList.add('getAwayLeft')
    newButtonElement.style.display = 'inline'
    newButtonElement.classList.add('comingRight')
    transitiontype = "leftToRight"
  }else{
    activeButtonElement.classList.add('getAwayRight')
    newButtonElement.style.display = 'inline'
    newButtonElement.classList.add('comingLeft')
    transitiontype = "rightToLeft"
  }
  setTimeout(setDisplayNone, 1400, activeButtonElement, newButtonElement, transitiontype)
}

function tabsClick(element){
  var listOfButton = ['SINButton','ITECButton','ACButton','EEButton']
  var listOfDisplay = ['SIN','ITEC','AC','EE']
  var number = 0
  for (currentDisplay of listOfDisplay){
    if(document.getElementById(currentDisplay).classList.contains("getAwayRight") == false & document.getElementById(currentDisplay).classList.contains("getAwayLeft") == false){
      number++
    }
  }
  if(number == 4){//si aucun de nos élément de sont en mouvements
    var currentElement = document.getElementById(element)
    for(currentButton of listOfButton){
      if(document.getElementById(currentButton).classList.contains("active")){
        var activeButton = currentButton.replace('Button','')
        if(activeButton != element.replace('Button','')){
          document.getElementById(currentButton).classList.remove("active")
        }
      }
    }
    if(activeButton != element.replace('Button','')){//si le boutons sur lequelle l'utilisateur vient d'appuier n'est pas celui déja séléctionné
      currentElement.classList.add('active')
      var selector = document.getElementById('selector')
      selector.style.left = currentElement.offsetLeft + 'px'
      selector.style.width = currentElement.offsetWidth+ 'px'
      Click(activeButton, element)
    }
  }
}



