/*Preloading alternate cat image*/
preload = new Image();
preload.src = "imgs/op.png";

/*Cat elem*/
cat = document.getElementById("p")

/*Pop mp3s*/
pops = [
    "pops/pop1.mp3",
    "pops/pop2.mp3",
    "pops/pop3.mp3",
    "pops/pop4.mp3",
]
pop_i = 0

/*Cookie utils*/
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

pop_count = getCookie("pop_count")
cat.innerHTML = pop_count > 0 ? pop_count : ""

op_func = function(){
    /*Chance cat image to op.jpg via css*/
    cat.id = "op"

    /*Play pop noise*/
    a = new Audio(pops[pop_i])
    a.load()
    a.play()

    /*Increment index for next pop noise*/
    pop_i = (pop_i+1)%pops.length

    /*Increment pop count*/
    pop_count++
    cat.innerHTML = pop_count
    setCookie("pop_count",pop_count,365)

    /*Fire google analytics event for pop*/
    // gtag('event', 'pop');
}
p_func = () => setTimeout(() => cat.id = "p", 25)

document.addEventListener("pointerup", p_func)
document.addEventListener("keyup", p_func)
document.addEventListener("pointerdown", op_func)
document.addEventListener("keydown", op_func)