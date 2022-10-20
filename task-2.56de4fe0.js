const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],a=(e,a)=>new Promise((n=>{n(e.map((e=>e.name===a?{...e,active:!e.active}:e)))})),n=e=>console.table(e);a(e,"Mango").then(n),a(e,"Lux").then(n);
//# sourceMappingURL=task-2.56de4fe0.js.map
