import { Component, OnInit } from '@angular/core';

//import COCO-SSD model as cocoSSD
import * as cocoSSD from '@tensorflow-models/coco-ssd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{
  title = 'TF-ObjectDetection';
  private video: HTMLVideoElement;
  

  ngOnInit()
  { 
    this.webcam_init();
    this.predictWithCocoModel();
  }

public async predictWithCocoModel(){
  const model = await cocoSSD.load('lite_mobilenet_v2');
  this.detectFrame(this.video,model);
  console.log('model loaded');
  
}

webcam_init()
  {  
  this.video = <HTMLVideoElement> document.getElementById("vid");
  
     navigator.mediaDevices
    .getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
    }
     })
    .then(stream => {
    this.video.srcObject = stream;
    this.video.onloadedmetadata = () => {
      this.video.play();
    };
    });
  }
  
  detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  }

  renderPredictions = predictions => {
    const canvas = <HTMLCanvasElement> document.getElementById("canvas");
    
    const ctx = canvas.getContext("2d");
    
    canvas.width  = 300;
    canvas.height = 300;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.drawImage(this.video,0, 0,300,300);

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      var cont_bottle = 0;
      var cont_person = 0;
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
  
      console.log(prediction.class);
      if (prediction.class == "bottle"){
        //console.log(prediction.class)
        cont_bottle = cont_bottle + 1;
        console.log(cont_bottle);
        if(cont_bottle = 25){
          window.location.href = "https://www.google.com/search?q=cheese&rlz=1C1CHZL_esCO698CO698&sxsrf=ACYBGNRin_ABRQth9cNE4ctO9QApniP4pw:1572542172355&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi5h8-MgMflAhWorFkKHVI_BYYQ_AUIEigB&biw=1280&bih=648";
          //"https://opticart.000webhostapp.com/?product=carton-de-leche";
        }
      }else if(prediction.class == "person"){
        cont_person = cont_person + 1;
        console.log(cont_person); 
        if (cont_person = 25) {
          window.location.href = "https://www.google.com/search?q=milk&tbm=isch&ved=2ahUKEwj-vLmPgMflAhUCgVkKHeVKDu4Q2-cCegQIABAA&oq=milk&gs_l=img.3..0i67l7j0j0i67l2.11433.11861..12057...0.0..0.132.512.0j4......0....1..gws-wiz-img.......35i39.VDRVZfIfiVY&ei=4ha7Xf7DEYKC5gLllbnwDg&bih=648&biw=1280&rlz=1C1CHZL_esCO698CO698"; 
          //"https://opticart.000webhostapp.com/?product=queso";
      }else{
        console.log("Not sure");
      }
    });
  };

}
