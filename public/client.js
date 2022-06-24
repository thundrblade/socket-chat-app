// const socket =io();

// let names;
// let textarea = document.querySelector('#textarea');
// let messageArea = document.querySelector('.message__area')  ;

// do {
//     names = prompt('please enter your name:')
// } while (!names);


// textarea.addEventListener('keyup',(e)=>{
//     if (e.key == 'Enter') {
//         sendMessage(e.target.value)
        
//     } 
// });

// function sendMessage(message) {
//     let msg = {
//         user:names ,
//         message : message.trim()

//     }

//     // Append Msg
//     appendMessage(msg,'outgoing');


//     // Send to server 
//     socket.emit('message',msg)
 
//         // OR

//     // socket.emit('message', {
//     //     user:names ,
//     //     message : message


//     // })

// // Send to server //


// function appendMessage(msg , type){

//     let mainDiv = document.createElement('div');
//     let className = type;
//     mainDiv.classList.add(className,'message');
// }

// let markup = 
//         `<h4>${msg.user}</h4>
//             <p>${msg.message}</p>
//             `

//     mainDiv.innerHTML = markup;
//     messageArea.appendChild(mainDiv);


//     // Receive message //

//     socket.on('message',(msg)=>{

//         console.log(msg);
//         console.log(appendMessage);

//         appendMessage(msg , 'incoming')
        
//     })
    

// }


const socket = io()
let names;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    names = prompt('Please enter your name: ')
} while(!names)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: names,
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}

