const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

//canvas.width = window.innerWidth
//canvas.height = window.innerHeight
canvas.width = 600
canvas.height = 400

let isPainting = false
let lineWidth = 1

function download() {
    const download = document.getElementById("download-link");
    const image = document.getElementById("canvas").toDataURL("image/png")
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousedown', function(e) {
    isPainting = true
    ctx.beginPath()
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
})

canvas.addEventListener('mouseup', function() {
    //ctx.stroke()
    ctx.closePath()
    isPainting = false
})

canvas.addEventListener('mousemove', function(e) {
    if (isPainting) {
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
        ctx.lineWidth = lineWidth
        ctx.stroke()
    }
})

canvas.addEventListener('mouseout', function() {
    //ctx.stroke()
    ctx.closePath()
    isPainting = false
})
