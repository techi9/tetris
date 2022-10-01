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
        if(storeName()){
            animate(onInit)
            showGame()
        }

        console.log('start pressed')
    })
}

function storeName(): boolean{
    let textArea : HTMLInputElement | null = document.getElementById('input_field') as HTMLInputElement
    let text = textArea.value

    //TODO shake if wrong text
    
    return !!text.length;

}

function animate(after: () => void){
    let welcomeScreen: Element | null = document.querySelector('.welcome')
    console.log(welcomeScreen)
    welcomeScreen?.classList.add('hidden')
    welcomeScreen?.addEventListener('transitionend', ()=>{
        welcomeScreen?.classList.add('none')
        after()
    })
}

function showGame(){

}