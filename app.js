function rhs() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./luft.mp4");
    xhr.responseType = "arraybuffer";
 
    xhr.onload = function(error) {
        var blob = new Blob([xhr.response]);
        var blobUrl = URL.createObjectURL(blob);
        console.log(blobUrl); 
        var playe =  document.getElementById("blobluft_html5_api").src = blobUrl;
        
    }
    xhr.send();
}
             document.getElementById("blobluft").src = blobUrl;
