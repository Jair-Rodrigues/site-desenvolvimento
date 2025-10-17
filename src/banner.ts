
const bannerHeader = document.getElementById("bannerHeader") as HTMLHeadElement;
window.addEventListener("load", carregarBanner)
function carregarBanner(){
    const bannerContainer = document.createElement("div")
    const bannerImg = document.createElement("img");
    bannerImg.src = "imagens/banner.png";
    bannerImg.alt = "Um grupo diverso de jovens está em uma sala de informática moderna, usando computadores e fones de ouvido, participando do curso técnico em desenvolvimento de sistemas no Instituto Benjamin Constant. O ambiente é inclusivo e colaborativo, voltado para o aprendizado em tecnologia.";
    bannerImg.style.height = "400px";
    bannerImg.style.width = "600px";
    bannerContainer.appendChild(bannerImg)
    bannerHeader.appendChild(bannerContainer);
}