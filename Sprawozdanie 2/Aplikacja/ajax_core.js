function loadDoc(metoda, url, gdzie, parametry, funkcja) {
    let  xhr = new XMLHttpRequest();
    if (xhr) {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4)
                if (xhr.status == 200) {
                    if (funkcja != "") funkcja(gdzie, xhr.responseText);
                    else {
                        if (gdzie != "")
                        {
                            let zmiana = document.getElementById(gdzie);
                            zmiana.innerHTML = xhr.responseText;
                        }

                    }
                } else {
                    alert("Błąd żądania: " + xhr.status + " " + xhr.statusText);
                }
        }
        if (metoda == "GET") {
            if (parametry == "") url += "?t=" + Math.random();
            else {
                url += "?" + parametry;
                url += "&t=" + Math.random();
            }
            xhr.open("GET", url, true);
            xhr.send();
        } else {
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(parametry);    
        }
    }
}
