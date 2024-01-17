let title = document.createElement('div')
title.classList.add('title')

let h1 = document.createElement('h1')
h1.textContent='Todo List'
h1.classList.add('h1')

let main = document.createElement('div')
main.classList.add('box')

let inp = document.createElement('input')
inp.classList.add('inp')


let btn = document.createElement('button')
btn.classList.add('btn')
btn.textContent='Добавить'

let index = 0

btn.onclick=function(){
    if(inp.value === ''){
        li.remove()
    }
    let li = document.createElement('li')
    li.classList.add('li')

    let del = document.createElement('div')
    del.classList.add('p')
    del.textContent='удалить'
    li.append(del)
    main.append(li)
   
    index++
    li.textContent=`${index}) ${inp.value}`
    inp.value=''
    if(index >= 11){
        li.remove()
    }
}

title.append(h1)
main.append(inp,btn)
document.body.append(title,main)
