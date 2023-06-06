let googleHead = document.getElementById('hplogo');

function replaceGoogleHeading(){
    const headImage = document.createElement('img');
    headImage.setAttribute('src','https://www.hackyourfuture.dk/static/logo-dark.svg');
    headImage.setAttribute('height','300');
    headImage.setAttribute('width','300');
    headImage.setAttribute('alt','head-image');
    googleHead.appendChild(headImage);

}
replaceGoogleHeading();