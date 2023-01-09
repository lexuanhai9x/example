// var options1 = {
//     width: 400,
//     zoomWidth: 500,
//     offset: {vertical: 0, horizontal: 10}
//     };

//    var options2 = {
//   fillContainer: true,
//   offset: {vertical: 0, horizontal: 10},
  
//   };
//   new ImageZoom(document.getElementById("img-container"), options2);



//   function img(anything) {
//     document.querySelector('.slide').src = anything;
//   }

//   function change(change) {
//     const line = document.querySelector('.home');
//     line.style.background = change;
//   }



// tab-content 
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'white');