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

function downloadPhoto(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        let img = document.createElement('img');
        wrapper.removeChild(wrapper.children[0]);
        wrapper.appendChild(img);
        img.src = reader.result;
    }
}

function deletePhoto() {
    let img = document.createElement('img');
    // <img width="800" height="600" src="../Images/UploadPhoto.jpg" alt="Фото указывающее на место для разметки" usemap="#useCase">
    img.width = 800;
    img.height = 600;
    img.src = "../Images/UploadPhoto.jpg";
    img.alt = "Фото указывающее на место для разметки";
    img.useMap = "#useCase";

    wrapper.removeChild(wrapper.children[0]);
    wrapper.appendChild(img);
}

// + include / пунктик / обратная стрелка / 3 / не кнопка для увеличения громкости, а увеличение громкости 

// canvas - холст ()
// реализовать по 2-3 пункта в сценариях использования и отправить (для каждого)