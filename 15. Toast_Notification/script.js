let toastBox = document.querySelector("#toast-box");
let successMsg = "<i class='fa-solid fa-circle-check' style='color:green'></i> Successfully Submitted";
let errorMsg = '<i class="fa-solid fa-circle-xmark" style="color:red"></i> Please fix the error!';
let invalidMsg = "<i class='fa-solid fa-circle-exclamation' style='color:orange'></i> Invalid input, check again";

function showToast(msg, type){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (type === 'error') {
        toast.classList.add('error');
    } else if (type === 'invalid') {
        toast.classList.add('invalid');
    }
    

    setTimeout(() => {
        toast.remove();
    },6000)
}

