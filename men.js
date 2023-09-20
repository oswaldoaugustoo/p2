document.getElementById("submitButton").addEventListener("click", function(){
const routerLocation = document.getElementById("routerLocation").value;
const tvBoxModel = document.getElementById("tvBoxModel").value;
const distanceRouterTvBox = document.getElementById("distanceRouterTvBox").value;
const distanceTvTvBox = document.getElementById("distanceTvTvBox").value;
const internetQuality = document.querySelector('input[name="internetQuality"]:checked');
const wallMaterial = document.getElementById("wallMaterial").value;
const magnetProximity = document.getElementById("magnetProximity").checked;
if (routerLocation && tvBoxModel && distanceRouterTvBox && distanceTvTvBox && internetQuality && wallMaterial) {
const resultMessage = `Configuração completa:<br>
Roteador posicionado na ${routerLocation}.<br>
TV Box modelo: ${tvBoxModel}.<br>
Distância entre Roteador e TV Box: ${distanceRouterTvBox} metros.<br>
Distância entre TV e TV Box: ${distanceTvTvBox} metros.<br>
Qualidade da Internet: ${internetQuality.value}.<br>
Material entre as paredes: ${wallMaterial}.<br>
Imãs próximos: ${magnetProximity ? "Sim" : "Não"}.`;
document.getElementById("resultMessage").innerHTML = resultMessage;
} else {
document.getElementById("resultMessage").innerHTML = "Por favor, preencha todos os campos obrigatórios.";}});