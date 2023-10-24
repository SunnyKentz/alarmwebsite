function init(){
    $("#firstSideDiv").mouseover(function(){
        $(".mainContent").animate({"border-top-left-radius": "0px"},700);
    });

    $("#firstSideDiv").on('mouseleave', function() {
        $(".mainContent").animate({"border-top-left-radius": "20px"},700);
    });

    $(".sideBar").children(`:nth-child(1)`).mouseover(function(){
        $(".mainContent").empty()
        $(".mainContent").append($('<h1>').text("présentation"))
    });

    $(".sideBar").children(`:nth-child(2)`).mouseover(function(){
        $(".mainContent").empty()
        $(".mainContent").append($('<h1>').text("Compétence"))
    });

    $(".sideBar").children(`:nth-child(3)`).mouseover(function(){
        $(".mainContent").empty()
        $(".mainContent").append($('<h1>').text("Expérience professionnel"))
    });

    $(".sideBar").children(`:nth-child(4)`).mouseover(function(){
        $(".mainContent").empty()
        $(".mainContent").append($('<h1>').text("Expérience de Travail"))
    });

    $(".sideBar").children(`:nth-child(5)`).mouseover(function(){
        $(".mainContent").empty()
        $(".mainContent").append($('<h1>').text("Projets personels"))
    });

    $(".sideBar").children(`:nth-child(6)`).mouseover(function(){
        $(".mainContent").empty()
        $(".mainContent").append($('<h1>').text("Autres versions de ce site"))
    });

    $(".sideBar").children(`:nth-child(7)`).mouseover(function(){
        $(".mainContent").empty()
        $(".mainContent").append($('<h1>').text("C.V."))
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


async function presentation(){
    resetButtons()
    setButtons(1)
    
    await fetch("http://172.105.97.204/presentation",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json',
          'orggin' : "from-app"
        }
          
    })
    .then(function(answer){
        return answer.json()
    }).then(function(answer){

        var titre = $('<h2>').text(answer.francais.Titre)
        titre.addClass('content-title')
        var text = $('<p>').text(answer.francais.Text)
        text.addClass('content-text')

        var outerDiv = $('<div>');
        outerDiv.append(titre);
        outerDiv.append(text);

        var img = $(`<img src="${answer.src}" alt="profile">`);
        img.addClass('content-img')

        var content = $('<div>')
        content.addClass('content')
        content.append(outerDiv)
        content.append(img)

        $(".mainContent").empty()
        $(".mainContent").append(content)
    })
    
}

async function competence(){
    resetButtons()
    setButtons(2)

    await fetch("http://172.105.97.204/competence",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json',
          'orggin' : "from-app"
        }
          
    })
    .then(function(answer){
        return answer.json()
    }).then(function(answer){
        
        var outerDiv = $('<div>');

        var titre = $('<h2>').text(answer.francais.Titre)
        titre.addClass('content-title')
        outerDiv.append(titre);

        var text = $('<span>').text(answer.francais.sousTitre1)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text1)
        text.addClass('content-text')
        outerDiv.append(text);
        var text = $('<span>').text(answer.francais.sousTitre2)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text2)
        text.addClass('content-text')
        outerDiv.append(text);
        var text = $('<span>').text(answer.francais.sousTitre3)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text3)
        text.addClass('content-text')
        outerDiv.append(text);

        var img = $(`<img src="${answer.src}" alt="SocialSkills">`);
        img.addClass('content-img')

        var content = $('<div>')
        content.addClass('content')
        content.append(outerDiv)
        content.append(img)

        $(".mainContent").empty()
        $(".mainContent").append(content)
    })
}

async function professionnel(){
    resetButtons()
    setButtons(3)

    await fetch("http://172.105.97.204/professionnel",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json',
          'orggin' : "from-app"
        }
          
    })
    .then(function(answer){
        return answer.json()
    }).then(function(answer){
        
        var outerDiv = $('<div>');

        var titre = $('<h2>').text(answer.francais.Titre)
        titre.addClass('content-title')
        outerDiv.append(titre);

        var text = $('<span>').text(answer.francais.sousTitre1)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text1)
        text.addClass('content-text')
        outerDiv.append(text);

        var text = $('<p>').text(answer.francais.Text2)
        text.addClass('content-text')
        outerDiv.append(text);

        var text = $('<p>').text(answer.francais.Text3)
        text.addClass('content-text')
        outerDiv.append(text);
        
        var text = $('<p>').text(answer.francais.Text4)
        text.addClass('content-text')
        outerDiv.append(text);

        var img = $(`<img src="${answer.src}" alt="telcobridgesLogo">`);
        img.addClass('content-img')

        var content = $('<div>')
        content.addClass('content')
        content.append(outerDiv)
        content.append(img)

        $(".mainContent").empty()
        $(".mainContent").append(content)
    })
}

async function Travail(){
    resetButtons()
    setButtons(4)
    
    await fetch("http://172.105.97.204/travail",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json',
          'orggin' : "from-app"
        }
          
    })
    .then(function(answer){
        return answer.json()
    }).then(function(answer){
        
        var outerDiv = $('<div>');

        var titre = $('<h2>').text(answer.francais.Titre)
        titre.addClass('content-title')
        outerDiv.append(titre);

        var text = $('<span>').text(answer.francais.sousTitre1)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text1)
        text.addClass('content-text')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text2)
        text.addClass('content-text')
        outerDiv.append(text);

        var text = $('<span>').text(answer.francais.sousTitre2)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text3)
        text.addClass('content-text')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text4)
        text.addClass('content-text')
        outerDiv.append(text);

        var img = $(`<img src="${answer.src}" alt="coucheTard">`);
        img.addClass('content-img')

        var content = $('<div>')
        content.addClass('content')
        content.append(outerDiv)
        content.append(img)

        $(".mainContent").empty()
        $(".mainContent").append(content)
    })
}

async function projets(){
    resetButtons()
    setButtons(5)

    await fetch("http://172.105.97.204/projets",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json',
          'orggin' : "from-app"
        }
          
    })
    .then(function(answer){
        return answer.json()
    }).then(function(answer){
        
        var outerDiv = $('<div>');

        var titre = $('<h2>').text(answer.francais.Titre)
        titre.addClass('content-title')
        outerDiv.append(titre);

        var text = $('<span>').text(answer.francais.sousTitre1)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text1)
        text.addClass('content-text')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text2)
        text.addClass('content-text')
        outerDiv.append(text);

        var img = $(`<img src="${answer.src1}" alt="Chat app">`);
        img.addClass('content-img')
        outerDiv.append(img)

        var img = $(`<img src="${answer.src2}" alt="chat app 2">`);
        img.addClass('content-img')
        outerDiv.append(img)

        var text = $('<p>')
        text.addClass('content-text')
        outerDiv.append(text);

        var text = $('<span>').text(answer.francais.sousTitre2)
        text.addClass('content-subTitle')
        outerDiv.append(text);
        var text = $('<p>').text(answer.francais.Text3)
        text.addClass('content-text')
        outerDiv.append(text);

        var img = $(`<img src="${answer.src3}" alt="code">`);
        img.addClass('content-img')

        var content = $('<div>')
        content.addClass('content')
        outerDiv.append(img)
        content.append(outerDiv)

        $(".mainContent").empty()
        $(".mainContent").append(content)
    })
}

async function Autres(){
    resetButtons()
    setButtons(6)
    await fetch("http://172.105.97.204/autres",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers:{
          'Content-Type': 'application/json',
          'orggin' : "from-app"
        }
          
    })
    .then(function(answer){
        return answer.json()
    }).then(function(answer){
        
        var outerDiv = $('<div>');

        var titre = $('<h2>').text(answer.francais.Titre)
        titre.addClass('content-title')
        outerDiv.append(titre);

        var innerDiv = $('<div>');
        innerDiv.addClass('content')

        var cardDiv = $('<button>')
        cardDiv.addClass('cardDiv')
        var innerCardDiv = $('<div>');
        var text = $('<span>').text(answer.francais.sousTitre1)
        text.addClass('content-subTitle')
        innerCardDiv.append(text);
        var text = $('<p>').text(answer.francais.Text1)
        innerCardDiv.append(text);
        var img = $(`<img src="${answer.src1}" alt="spring">`);
        img.addClass('card-img')
        cardDiv.append(innerCardDiv);
        cardDiv.append(img)
        innerDiv.append(cardDiv)

        var cardDiv = $('<button>')
        cardDiv.addClass('cardDiv')
        var innerCardDiv = $('<div>');
        var text = $('<span>').text(answer.francais.sousTitre2)
        text.addClass('content-subTitle')
        innerCardDiv.append(text);
        var text = $('<p>').text(answer.francais.Text2)
        innerCardDiv.append(text);
        var img = $(`<img src="${answer.src2}" alt="dotnet">`);
        img.addClass('card-img')
        cardDiv.append(innerCardDiv);
        cardDiv.append(img)
        innerDiv.append(cardDiv)

        var cardDiv = $('<button>')
        cardDiv.addClass('cardDiv')
        var innerCardDiv = $('<div>');
        var text = $('<span>').text(answer.francais.sousTitre3)
        innerCardDiv.append(text);
        var text = $('<p>').text(answer.francais.Text3)
        innerCardDiv.append(text);
        var img = $(`<img src="${answer.src3}" alt="nodejs">`);
        img.addClass('card-img')
        cardDiv.append(innerCardDiv);
        cardDiv.append(img)
        innerDiv.append(cardDiv)

        outerDiv.append(innerDiv);

        var content = $('<div>')
        content.addClass('content')
        content.append(outerDiv)

        $(".mainContent").empty()
        $(".mainContent").append(content)
    })
}

async function cv(){
    resetButtons()
    setButtons(7)

    var outerDiv = $('<div>');

    var titre = $('<h2>').text("Mon CV")
    titre.addClass('content-title')
    outerDiv.append(titre);

    var link = $('<a href="http://172.105.97.204/cv">').text("download")
    outerDiv.append(link);

    var content = $('<div>')
    content.addClass('content')
    content.append(outerDiv)

    $(".mainContent").empty()
    $(".mainContent").append(content)
}

$(document).ready(init);