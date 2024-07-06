const img = document.querySelector(".animation-left-bar-img");

const MAIN_PATH = "./src/media/";
const PHOTO_PATHS = ["photo_2024-04-28_20-32-06.jpg", "Krq1n1OiIps.jpg", "normphoto.jpg", "Pe6muFU0zCc.jpg"];
function changePhoto() {
    setTimeout(() => {
        img.classList.add("opacity-off");
        setTimeout(() => {
            const poped = PHOTO_PATHS.pop();
            img.src = MAIN_PATH + poped;
            PHOTO_PATHS.unshift(poped);
            img.classList.remove("opacity-off");
            changePhoto();
        }, 1000);
    }, 5000);
}

changePhoto();
