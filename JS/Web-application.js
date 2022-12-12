// window.onload = () => {
//     const uploadFile = document.getElementById("upload-file")


//     // const uploadBtn = document.getElementById("upload-btn")
//     // const uploadText = document.getElementById("upload-text");

//     // uploadBtn.addEventListener("click", function() {
//     //     console.log("no");
//     //     console.log("no");
//     //     console.log("no");
//     //     console.log("no");
//     //     uploadFile.click();
//     // });

//     // uploadFile.addEventListener("change", function() {
//     //     // console.log(uploadFile.value);
//     //     console.log("no");

//     //     if (uploadFile.value) {
//     //         console.log("no");
//     //         console.log("no");
//     //         console.log("no");
//     //         uploadText.textContent = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
//     //     } else {
//     //         console.log("yes");
//     //         console.log("yes");
//     //         console.log("yes");
//     //         uploadText.textContent = "Файл не выбран";
//     //     }
//     // });
// }

let wrapper = document.querySelector('.img__wrapper');

function donwload(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        let img = document.createElement('img');
        wrapper.appendChild(img);
        img.src = reader.result;
    }
}