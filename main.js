function sessionRun(){window.localStorage.setItem("sessionjs",JSON.stringify(window.session||{})||"{}"),window.rqfa(sessionRun)}function sessionBegin(){window.session=JSON.parse(window.localStorage.getItem("sessionjs")||"{}")||{},"function"!=typeof window.rqfa&&(window.rqfa=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.khtmlRequestAnimationFrame||window.webkitRequestAnimationFrame),window.rqfa(sessionRun)}sessionBegin();
