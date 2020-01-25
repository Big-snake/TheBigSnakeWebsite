function onload() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./luft.mp4");
    xhr.responseType = "arraybuffer";
 
    xhr.onload = function(error) {
        var blob = new Blob([xhr.response]);
        var blobUrl = URL.createObjectURL(blob);
        console.log(blobUrl);
        document.getElementById("blob").src = blobUrl;
    }
    xhr.send();
}
