window.onload = function() {

    var ph = document.getElementById('hidden');
    var ad = document.getElementById('ad');

    ad.onclick = function hello() {

        ph.style.display = 'block';
        ad.style.display = 'none';
    }
}
