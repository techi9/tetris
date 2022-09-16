export default function initForm(onInit: () => void){
    // let form: HTMLElement | null = document.getElementById('name_form')
    // form?.addEventListener('submit', (e) => {
    //     storeName()
    //     animate()
    //     e.preventDefault()
    // })

    let button: HTMLElement | null = document.getElementById('start_button')
    button?.addEventListener('click', (e) => {
        e.preventDefault()
        storeName()
        animate(onInit)
        showGame()
        console.log('start pressed')
    })
}

function storeName(){
    let textArea : Element | null = document.getElementById('input_field')
    localStorage[]
}

function animate(after: () => void){
    let welcomeScreen: Element | null = document.getElementsByClassName('welcome').item(0)
    console.log(welcomeScreen)
    welcomeScreen?.classList.add('hidden')
    welcomeScreen?.addEventListener('transitionend', ()=>{
        welcomeScreen?.classList.add('none')
        after()
    })
}

function showGame(){

}