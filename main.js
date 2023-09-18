const element = (e)=> document.querySelector(e)
const elements = (e)=> document.querySelectorAll(e)
const cronosContainer = element('main')
const divAddNewCronos = element('.newCronometro')



const geralControl = ()=>{

    const adquirirDados = ()=>{
        if(divAddNewCronos.className == 'newCronometro'){
            divAddNewCronos.innerHTML = `
        <form>
                <label for="nome" class="labelNome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="Nome" class="iptNome">
            </form>
            <button class="btnAdd">
                Adicionar
            </button>
        
        `
        divAddNewCronos.className = 'dataCronos'
        const btnAdd = element('button')
        const inputName = element('.iptNome')

        btnAdd.addEventListener('click',()=>{
            divAddNewCronos.className = 'newCronometro'
            divAddNewCronos.innerHTML = `
                <div class="line1"></div>
                <div class="line2"></div>
            `
            addNewCronos(inputName.value)
           
        })
        }
        

        
    }

    const makeCronos = (titulo,elemento)=>{
       elemento.innerHTML = `
        <div class="excluirCronos">
        <span class="material-symbols-outlined closeSymbol">
            close
        </span>
        </div>
        <div class="tempo"><span class="hr">00</span>:<span class="min">00</span>:<span class="seg">00</span></div>
        <h2>${titulo}</h2>
    
    `
    }
    const addNewCronos = (titulo)=>{
        const newCronos = document.createElement('div')
        newCronos.classList.add('cronometro')
        makeCronos(titulo,newCronos)
        cronosContainer.appendChild(newCronos)
    }
    divAddNewCronos.addEventListener('click',adquirirDados)
}
geralControl()


