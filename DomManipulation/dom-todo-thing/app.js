console.log("Script Connected ...");

function showButton(){
    console.log("executed after time.")
    let changeColorbtn = document.createElement('button');
    changeColorbtn.textContent = "Click Me"
    changeColorbtn.onclick = changeColor;
    document.body.appendChild(changeColorbtn)
}

function changeColor(){
    // alert("reached")
    let colors = ['black', 'blue', 'green', 'white']
    // document.body.backgroundColor = "red"
    let currentColor = document.body.style.backgroundColor;

    for(let i = 0; i < colors.length; i++){
        if(colors[i] != currentColor){
            // console.log(colors[i])
            document.querySelector('body').style.backgroundColor = colors[i]
        }
    }
}
// const timeBeforeButtonDisplay = setTimeout(showButton, 2000)

const postCollector = document.querySelector('#post-collector')

let testFeed = document.querySelector('.posts')

function addPostToFeed(post){
    let feed = document.querySelector('.posts')
    let postNode = document.createElement("p")
    postNode.textContent = post
    feed.appendChild(postNode)
}

function testAddFeed(){
    let testData = [
        "First Post",
        "Having a nice day at beach :)",
        "Weekends are near ;)"
    ]

    let p1 = document.createElement('p')
    p1.textContent = testData[0]
    testFeed.appendChild(p1)
}

postCollector.addEventListener(
    'submit', (event)=>{
        event.preventDefault()
        // use "event.preventDefault()" to stop the page from reloading 
        // it actually does not send the data back to server it stores it in the local browser 
        // call "event.submit()" or form.submit() to send data to server 
        // since this is only a demo for frontend it is not required to handle data 
        let post = postCollector.elements['post'].value
        addPostToFeed(post)
    }
)