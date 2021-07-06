window.onload = function() {


    function setRem() {
        var ui_w = 365;
        var c_w = document.documentElement.clientWidth || document.body.clientWidth;
        document.getElementsByTagName('html')[0].style.fontSize = (c_w / ui_w) * 100 + 'px';
    }
    setRem();
    window.onresize = setRem;
}