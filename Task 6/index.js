function handleSelect(e) {
    console.log(e.target.value)
    document.querySelector("#progress").value = e.target.value
}


document.querySelector("#selected").addEventListener('change' , handleSelect)

// document.querySelector("#selected").addEventListener('select' , handleSelect)