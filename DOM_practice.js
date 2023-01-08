// const fruitList = ["apple", "banana", "tomato"];
// const ul = document.getElementById('fruits');
// for (let i = 0; i < fruitList.length; i++) {
//     let li = document.createElement('li');
//     ul.append(li);
//     li.append(fruitList[i]);
// }
// // ------------------------------------
// const logoDiv = document.querySelector('div');
// const imageSrc = "https://crocoder.dev/icon.png";
// imgElement = document.createElement('img');

// imgElement.src = imageSrc;

// logoDiv.appendChild(imgElement);
// ------------------------------------------------
// const firstchild = [...document.querySelectorAll('ul > li:first-child')];
// const lastchild = [...document.querySelectorAll('ul > li:last-child')];

// firstchild.forEach((li) => (li.textContent = 'first'));
// lastchild.forEach((li) => (li.textContent = 'last'));

// EX 2
// // 1
// function changingH2 (e){
//     e.preventDefault();
//     let headline = document.getElementById('H2');
//     const user_input = document.getElementById('userInput').value;
//     headline.innerText = user_input;
//     document.getElementById('userInput').value = " "
// }

// 2
// let click = 0;
// function counter(e) {
//     e.preventDefault();
//     const parg = document.getElementById('count');
//     click += 1;
//     parg.innerText = click;
//     parg.style.fontSize = `${click}px`;
// }

// 3

// 4
// window.onload = () => {
//     const H1 = document.getElementById('H1');
//     H1.innerText = 'Hello World';
// }

// 5 how to add alert??
// function userText(e){
//     e.preventDefault();
//     let words = document.getElementById('user-text').value;
//     let newLine = document.getElementById('empty');
//     if (words){
//         newLine.innerText = words;
//         document.getElementById('user-text').value = "";
//     } else {
//         newLine.innerText = "your line is empty";
//     }
// }

// 6

// const hello = document.getElementById('Hello');
// const goodbye = document.getElementById('Goodbye');

// function alertHello(){
//     console.log('hello');
// }

// hello.addEventListener('click', alertHello);

// function alertGoodbye(){
//     console.log('goodbye');
// }

// goodbye.addEventListener('click', alertGoodbye);
    
// 7
function toDoList(e){
    e.preventDefault();
    let newMission = document.getElementById('user-input').value;
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = newMission;
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.value = 'checkbox value';
    checkbox.name = 'checkbox name';
    li.appendChild(checkbox);
    li.addEventListener('dblclick', () => {
        ul.removeChild(li);
    });
    document.getElementById('user-input').value = "";
}
// 8

