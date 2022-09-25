const todoInput = document.querySelector('.input-vezife')
const btnVezife = document.querySelector ('.btn-vezife-elaveet')
const vezifeSiyahi = document.querySelector ('.vezife-siyahisi')

btnVezife.addEventListener('click' , todoEx)
vezifeSiyahi.addEventListener('click' , hardWork)

function hardWork(e){
  const justToDo = e.target
  if(justToDo.classList.contains('vezife-btn-tamamlandi')){
    justToDo.parentElement.classList.toggle('vezife-tamamlandi')
  }
  if(justToDo.classList.contains('vezife-btn-sil')){
    justToDo.parentElement.classList.add('delete')
  }
}

function todoEx(e){
    e.preventDefault()
    
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('vezife-item')

    const todoLi = document.createElement('li')
    todoLi.classList.add('vezife-tanitim')
    todoLi.innerText= todoInput.value


    todoDiv.appendChild(todoLi)

    const menimButtonum = document.createElement('button')
    menimButtonum.classList.add('vezife-btn')
    menimButtonum.classList.add('vezife-btn-tamamlandi')
    menimButtonum.innerHTML= '<i class="fa fa-check" aria-hidden="true"></i>'
    
    todoDiv.appendChild(menimButtonum)

    const seninButtonun = document.createElement('button')
    seninButtonun.classList.add('vezife-btn')
    seninButtonun.classList.add('vezife-btn-sil')
    seninButtonun.innerHTML= '<i class="fa fa-trash" aria-hidden="true"></i>'
    
    todoDiv.appendChild(seninButtonun)




 
    vezifeSiyahi.appendChild(todoDiv)


    todoInput.value=''
}
