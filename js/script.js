function loadData(){
    // create a new request

    const xhr = new XMLHttpRequest();

    // What to do when response arrives

    xhr.onload = function (){
        const demo = document.querySelector('#demo');
        demo.innerHTML = xhr.responseText;

    }

    // prepare stage

    xhr.open( "GET" , "./data/data.text" )

    // send request

    xhr.send();


}

