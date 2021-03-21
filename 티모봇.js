guswo = 100000
chdao = 0
chdvud = 0
aoehrksmd = 0
wktks = 500000

load()
start()

function tn() {
    i = Number(document.getElementById("tn").value)
    if (wktks >= guswo * i) {
        wktks -= guswo * i
        chdao += guswo * i
        aoehrksmd += i
        document.getElementById("wktks").innerHTML = "자산 : " + wktks
        document.getElementById("aoehrksmd").innerHTML = "매도가능 : " + aoehrksmd
        document.getElementById("chdaodlq").innerHTML = "총매입 : " + chdao
    }
}

function eh() {
    i = Number(document.getElementById("eh").value)
    if (aoehrksmd - i >= 0) {
        wktks += guswo * i
        aoehrksmd -= i
        chdao -= guswo * i
        if (chdao < 0) {
            chdao = 0
        }
        document.getElementById("wktks").innerHTML = "자산 : " + wktks
        document.getElementById("aoehrksmd").innerHTML = "매도가능 : " + aoehrksmd
        document.getElementById("chdaodlq").innerHTML = "총매입 : " + chdao
    }
}

function start() {
    setInterval (function () {
        document.getElementById("chdvudrk").innerHTML = "총평가 : " + guswo * aoehrksmd
        jbRandom = Math.random();
        i = Math.floor(jbRandom * 2)
        if (i == 0) {
            guswo += 1000
            document.getElementById("guswo").innerHTML = "현재가 : " + guswo + "↑"
        }
        else {
            if (guswo > 0) {
                guswo -= 1000
                document.getElementById("guswo").innerHTML = "현재가 : " + guswo + "↓"
            }
        }
        save()
    }, 1000);
}

function save() {
    localStorage.setItem("guswo", guswo)
    localStorage.setItem("chdao", chdao)
    localStorage.setItem("chdvud", chdvud)
    localStorage.setItem("aoehrksmd", aoehrksmd)
    localStorage.setItem("wktks", wktks)
}

function load() {
    i = localStorage.getItem('guswo')
    if (i != null) {
        guswo = Number(localStorage.getItem("guswo"))
        chdao = Number(localStorage.getItem("chdao"))
        chdvud = Number(localStorage.getItem("chdvud"))
        aoehrksmd = Number(localStorage.getItem("aoehrksmd"))
        wktks = Number(localStorage.getItem("wktks"))
    }
    else {
        reset()
    }
}

function reset() {
    localStorage.setItem("guswo", 100000)
    localStorage.setItem("chdao", 0)
    localStorage.setItem("chdvud", 0)
    localStorage.setItem("aoehrksmd", 0)
    localStorage.setItem("wktks", 500000)
}