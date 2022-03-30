function updateHTML(elmId, value) {
    var elem = document.getElementById(elmId);
    if(typeof elem !== 'undefined' && elem !== null) {
      elem.innerHTML = value;
    }
  }