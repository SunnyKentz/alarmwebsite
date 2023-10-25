/**
 * 
 * 
 * HEY!!! GET OUT OF HERE WIN FAIRLY. DONT !
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * HEY!!! GOOOO AWAAAAYYYYY
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
let visitor = 0;
function init(){
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); get(); } 
    form.addEventListener('submit', handleForm);

    fetch("./visitors",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json'
        }
    })
    .then(function(answer){
        return answer.json()
    }).then(function(answer){
        visitor = answer.visitors;
        document.getElementById("intro").append(`you are the ${visitor}th visitor`)
    });
}
function resetButtons(except=null){
    
    for(let i=1; i<8;i++){

        if(except!=null){
            if (i == except){
                i++
            }
        }
        $(".sideBar").children(`:nth-child(${i})`).css('background-color','');
    }
    init();

}

function setButtons(button){
    $(".sideBar").children(`:nth-child(${button})`).css('background-color','white');
    $(".sideBar").children(`:nth-child(${button})`).off('mouseover');

    if(button == 1){
        $("#firstSideDiv").mouseover(function(){
            $(".mainContent").animate({"border-top-left-radius": "0px"},700);
        });
    
        $("#firstSideDiv").on('mouseleave', function() {
            $(".mainContent").animate({"border-top-left-radius": "20px"},700)
        });
    }
}

function get(){
    var text = document.getElementById("endpoint").value;
    var text = text.toLowerCase();
    var text = text.replaceAll("!","");
    var text = text.replaceAll(" ","");
    let endpoint = text.trim();
    
        fetch("http://localhost:8080/"+endpoint,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json'}
        
    }).then(async function(ans) {
        if(ans.ok) {
            let answer = await ans.json();

        var content = $('<div>');
        content.addClass('mainContent');

        //add title
        var titre = $('<h1>').text(answer.title)
        content.append(titre);

        //add image
        var img = $(`<img src="${answer.src}">`);
        img.addClass('logo');
        img.add
        content.append(img);

        //add text
        var text = $('<p>').text(answer.text)
        content.append(text);

        //add input
        var form = $('<form id="myForm">')
        var inp = $('<input id="endpoint" type="text" onsubmit="return get()">')
        form.append(inp);
        content.append(form);

        $("#modifiable").empty()
        $("#modifiable").append(content)
        
        
        var form = document.getElementById("myForm");
        function handleForm(event) { event.preventDefault(); get(); } 
        form.addEventListener('submit', handleForm);
        }else{
            err();
        }

    });
    
}


function err(){

    var content = $('<div>');
    content.addClass('mainContent');

    //add title
    var titre = $('<h1>').text("wrong answer")
    content.append(titre);

    //add image
    var img = $('<img src="logoIOS.png" class="logo">');
    img.addClass('logo');
    img.add
    content.append(img);

    //add text
    var text = $('<p>').text("The rules are simple : in my pinned video there is a text that the app shows when you haven't scanned your nfc tag yet and the alarm is ringing, type down the text ⬇️")
    content.append(text);

    //add input
    var form = $('<form id="myForm">')
    var inp = $('<input id="endpoint" type="text" onsubmit="return get()">')
    form.append(inp);
    content.append(form);

    $("#modifiable").empty()
    $("#modifiable").append(content)


    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); get(); } 
    form.addEventListener('submit', handleForm);
}

$(document).ready(init);