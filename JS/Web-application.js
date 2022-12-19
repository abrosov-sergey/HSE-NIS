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
        wrapper.removeChild(wrapper.children[1]);
        wrapper.appendChild(img);
        img.width = 500;
        img.height = 500;
        img.src = reader.result;
        // img.hidden = "hidden";
        img.id = "mainImage";

        img.onload = function() {
            canvas = document.getElementById("field");
            context = canvas.getContext("2d");
            context.drawImage(img, 0, 0, 500, 500);

            width = Number(canvas.getAttribute("width"));
            height = Number(canvas.getAttribute("height"));
            cellCountX = width / cellSize;
            cellCountY = height / cellSize;

            drawGrid();
        };
    }
}

function deletePhoto() {
    let img = document.createElement('img');
    // <img width="800" height="600" src="../Images/UploadPhoto.jpg" alt="Фото указывающее на место для разметки" usemap="#useCase">
    img.src = "../Images/UploadPhoto.jpg";
    img.alt = "Фото указывающее на место для разметки";
    img.useMap = "#useCase";
    // img.hidden = "hidden"
    img.width = 500;
    img.height = 500;
    img.id = "mainImage";

    wrapper.removeChild(wrapper.children[1]);
    wrapper.appendChild(img);
}

// + include / пунктик / обратная стрелка / 3 / не кнопка для увеличения громкости, а увеличение громкости 
// + реализовать по 2-3 пункта в сценариях использования и отправить (для каждого)

// canvas - холст ()
