// Dom selectioin
let inputField = document.getElementById('input-field')
let submitBtn = document.getElementById('submit-btn')
let tBody = document.getElementById('table-body')

let count = 0


// event section
submitBtn.addEventListener('click', function(){
    if(inputField.value == ''){
        alert('Please, provide a valid text')
    } else {
        let newRow = document.createElement('tr')

        count++
        newRow.innerHTML = `
            <td>${count}</td>
            <td>${inputField.value}</td>
            <td>
                <button class="btn btn-danger">Delete</button>
            </td>
        `

        tBody.appendChild(newRow)
        inputField.value = ''


        // delete button
        let deletebBtn = document.getElementsByClassName('btn-danger')
        for(dBtn of deletebBtn){
            dBtn.addEventListener('click', function(e){
                e.target.parentNode.parentNode.style.display = 'none'
            })
        }
    }
})