import {loadGLTF} from "./libs/loader.js"
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
    const start = async() => {
      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.body,
        imageTargetSrc: './targetsBurger.mind',
        uiScanning: "no",
        uiLoading: "no",
      });
      const {renderer, scene, camera} = mindarThree;
  
      const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
      scene.add(light);
  
      const burger1 = await loadGLTF('./models/cheesburger/scene.gltf');
      burger1.scene.scale.set(0.5, 0.5, 0.5);
      burger1.scene.rotation.set(90,0,0);
      burger1.scene.position.set(0, -0.4, 0);
  
      const burger2 = await loadGLTF('./models/jumping_hamburger/scene.gltf');
      burger2.scene.scale.set(0.5, 0.5, 0.5);
      burger2.scene.rotation.set(90,0,0);
      burger2.scene.position.set(0, -0.4, 0);

      const burger3 = await loadGLTF('./models/vegetable_burgur_fbx/scene.gltf');
      burger3.scene.scale.set(0.5, 0.5, 0.5);
      burger3.scene.rotation.set(90,0,0);
      burger3.scene.position.set(0, -0.4, 0);
      
      const burger4 = await loadGLTF('./models/back_yard_burgers_-_classic_burger/scene.gltf');
      burger4.scene.scale.set(0.1, 0.1, 0.1);
      burger4.scene.rotation.set(90,0,0);
      burger4.scene.position.set(0, -0.4, 0);
      
      const burger5 = await loadGLTF('./models/burger/scene.gltf');
      burger5.scene.scale.set(0.5, 0.5, 0.5);
      burger5.scene.rotation.set(90,0,0);
      burger5.scene.position.set(0, -0.4, 0);

      const burger6 = await loadGLTF('./models/burger-2/scene.gltf');
      burger6.scene.scale.set(0.5, 0.5, 0.5);
      burger6.scene.rotation.set(90,0,0);
      burger6.scene.position.set(0, -0.4, 0);
      
      const burger7 = await loadGLTF('./models/burger-3/scene.gltf');
      burger7.scene.scale.set(10, 10, 10);
      burger7.scene.rotation.set(90,0,0);
      burger7.scene.position.set(0, -0.4, 0);



// Anchors
  
      const burger1Anchor = mindarThree.addAnchor(0);
      burger1Anchor.group.add(burger1.scene);
  
      const burger2Anchor = mindarThree.addAnchor(1);
      burger2Anchor.group.add(burger2.scene);
      
      const burger3Anchor = mindarThree.addAnchor(2);
      burger3Anchor.group.add(burger3.scene);
  
      const burger4Anchor = mindarThree.addAnchor(3);
      burger4Anchor.group.add(burger4.scene);

      const burger5Anchor = mindarThree.addAnchor(4);
      burger5Anchor.group.add(burger5.scene);

      const burger6Anchor = mindarThree.addAnchor(5);
      burger6Anchor.group.add(burger6.scene);

      const burger7Anchor = mindarThree.addAnchor(6);
      burger7Anchor.group.add(burger7.scene);


  
      await mindarThree.start();
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    }
    start();
  });
  