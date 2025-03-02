
   window.addEventListener('keydown', (e) => {
       if(e.ctrlKey && e.shiftKey && e.code === 'KeyW') {
           wolf.material.wireframe = !wolf.material.wireframe;
       }
   });
