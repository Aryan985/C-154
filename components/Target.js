AFRAME.registerComponent("ring",{
    init:function(){
        for (var i=1;i<21;i++){
            var id = "ring"+i
            var posx=(Math.random()*400)
            var posy=(Math.random()*500)
            var posz=(Math.random()*-500)
            var pos={x:posx,y:posy,z:posz}
            this.createring(id,pos)
        }
    },
    createring:function(id,pos){
       var land=document.querySelector("#terrain") 
       var ring=document.createElement("a-entity")
       ring.setAttribute("id",id)
       ring.setAttribute("position",pos)
       ring.setAttribute("material",{"color":"red"})
       ring.setAttribute("geometry",{primitive:"torus",radius:10})
       land.appendChild(ring)
    }
})



AFRAME.registerComponent("bird",{
    init:function(){
        for (var i=1;i<11;i++){
            var id = "bird"+i
            var posx=(Math.random()*400)
            var posy=(Math.random()*500)
            var posz=(Math.random()*-500)
            var pos={x:posx,y:posy,z:posz}
            this.createbird(id,pos)
        }
    },
    createbird:function(id,pos){
       var land=document.querySelector("#terrain") 
       var bird=document.createElement("a-entity")
       bird.setAttribute("id",id)
       bird.setAttribute("position",pos)
       bird.setAttribute("scale",{x:500,y:500,z:500})
       bird.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
       bird.setAttribute("animation-mixer",{})
       land.appendChild(bird)
    }
})
