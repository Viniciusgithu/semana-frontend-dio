

let txtName = window.document.querySelector('#txtName')
let txtEmail = window.document.querySelector('#txtEmail');
let txtLevel = window.document.querySelector('#txtLevel')
let txtCharacter = window.document.querySelector('#txtCharacter')
let btn = window.document.querySelector('#btnSubscribe')

btn.addEventListener('click', () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }

  console.log(subscription)

})


function switchTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}


