/**
 * @author Kutsan Kaplan
 *         http://kutsankaplan.com
 *         22/05/16
 */

function updateTime()
{
    var d = new Date();
    var h = checkTime(d.getHours());
    var m = checkTime(d.getMinutes());
    var s = checkTime(d.getSeconds());
    
    document.getElementById("hex").innerHTML = "#" + h + m + s;
    document.body.style.backgroundColor = "#" + h + m + s;

    setTimeout(function() { updateTime(); }, 1000);
}

document.body.onload = function() {
    updateTime()();
};

function checkTime(i)
{
    if (i < 10)
        i = "0" + i;
    return i;
}
