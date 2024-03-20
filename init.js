preload = new Image();
preload.src = "imgs/op.png";

cat = document.getElementById("p")

pops = [
    "pops/pop1.mp3",
    "pops/pop2.mp3",
    "pops/pop3.mp3",
    "pops/pop4.mp3",
]
pop_i = 0

pop_count = 0
cat.innerHTML = ""

op_func = function(){
    cat.id = "op"

    a = new Audio(pops[pop_i])
    a.load()
    a.play()

    pop_i = (pop_i+1)%pops.length

    pop_count++
    cat.innerHTML = pop_count
}

p_func = () => setTimeout(() => {
    cat.id = "p"
}, 25)

document.addEventListener("pointerup", p_func)
document.addEventListener("keyup", p_func)
document.addEventListener("pointerdown", op_func)
document.addEventListener("keydown", op_func)