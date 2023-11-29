const image_input = document.querySelector("#image_input");
const uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        uploaded_image = reader.result;
        document.getElementById("display_image").style. = `url(${uploaded_image})`
    })
    read.readAsDataURL(this.files[0]);
    display_image
})