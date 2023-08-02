const slider = document.querySelector("#slider")
slider.addEventListener("input", (event) => changeColor(event.target.value))

function switchMode(mode){
    const value = mode === "dark" ? 90 : 10
    slider.value = value
    changeColor(value)
}

function changeColor(value)
{
    const brightnessBg = 100 - value
    const brightnessThumb = 40 + value / 4
    document.body.style.setProperty("--brightnessBg", `${brightnessBg}%`)
    document.body.style.setProperty("--brightnessThumb", `${brightnessThumb}%`)

}