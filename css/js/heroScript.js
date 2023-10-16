function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        //swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
var imgCount = 3;
var dir = 'css/images/';

var randomCount = shuffle(Array.from(Array(80).keys()));
var images = Array.from(Array(80).keys());

var i = 0;
images.forEach((element) => {
    images[i] = ("Image-" + i + ".JPEG");
    i++;
});
document.getElementById("hero-1").style.backgroundImage = "url(" + dir + images[randomCount[0]] + ")";
document.getElementById("hero-2").style.backgroundImage = "url(" + dir + images[randomCount[1]] + ")";
document.getElementById("hero-3").style.backgroundImage = "url(" + dir + images[randomCount[2]] + ")";
document.getElementById("hero-4").style.backgroundImage = "url(" + dir + images[randomCount[3]] + ")";
document.getElementById("hero-5").style.backgroundImage = "url(" + dir + images[randomCount[4]] + ")";
document.getElementById("hero-6").style.backgroundImage = "url(" + dir + images[randomCount[5]] + ")";
document.getElementById("hero-7").style.backgroundImage = "url(" + dir + images[randomCount[6]] + ")";
document.getElementById("hero-8").style.backgroundImage = "url(" + dir + images[randomCount[7]] + ")";
document.getElementById("hero-9").style.backgroundImage = "url(" + dir + images[randomCount[8]] + ")";
document.getElementById("hero-10").style.backgroundImage = "url(" + dir + images[randomCount[9]] + ")";
document.getElementById("hero-11").style.backgroundImage = "url(" + dir + images[randomCount[10]] + ")";
document.getElementById("hero-12").style.backgroundImage = "url(" + dir + images[randomCount[11]] + ")";
document.getElementById("hero-13").style.backgroundImage = "url(" + dir + images[randomCount[12]] + ")";
document.getElementById("hero-14").style.backgroundImage = "url(" + dir + images[randomCount[13]] + ")";
document.getElementById("hero-15").style.backgroundImage = "url(" + dir + images[randomCount[14]] + ")";
document.getElementById("hero-16").style.backgroundImage = "url(" + dir + images[randomCount[15]] + ")";
document.getElementById("hero-17").style.backgroundImage = "url(" + dir + images[randomCount[16]] + ")";
document.getElementById("hero-18").style.backgroundImage = "url(" + dir + images[randomCount[17]] + ")";
document.getElementById("hero-19").style.backgroundImage = "url(" + dir + images[randomCount[18]] + ")";
document.getElementById("hero-20").style.backgroundImage = "url(" + dir + images[randomCount[19]] + ")";
document.getElementById("hero-20").style.backgroundImage = "url(" + dir + images[randomCount[20]] + ")";
document.getElementById("hero-21").style.backgroundImage = "url(" + dir + images[randomCount[21]] + ")";
document.getElementById("hero-22").style.backgroundImage = "url(" + dir + images[randomCount[22]] + ")";
document.getElementById("hero-23").style.backgroundImage = "url(" + dir + images[randomCount[23]] + ")";
document.getElementById("hero-24").style.backgroundImage = "url(" + dir + images[randomCount[24]] + ")";
document.getElementById("hero-25").style.backgroundImage = "url(" + dir + images[randomCount[25]] + ")";
document.getElementById("hero-26").style.backgroundImage = "url(" + dir + images[randomCount[26]] + ")";
document.getElementById("hero-27").style.backgroundImage = "url(" + dir + images[randomCount[27]] + ")";
document.getElementById("hero-28").style.backgroundImage = "url(" + dir + images[randomCount[28]] + ")";
document.getElementById("hero-29").style.backgroundImage = "url(" + dir + images[randomCount[29]] + ")";
document.getElementById("hero-30").style.backgroundImage = "url(" + dir + images[randomCount[30]] + ")";
