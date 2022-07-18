class Reel {  
  constructor(images) {
    this.images = images;
    this.startIndex = this.images.length - 3;
    this.endIndex = this.images.length - 1;
  }
  
  getReel() {
    if (this.startIndex > this.endIndex) {
      return this.images.slice(this.startIndex).concat(this.images.slice(0, this.endIndex + 1));
    }
    
    return this.images.slice(this.startIndex, this.endIndex + 1);
  }
  
  getHeight() {
    return this.getReel().reduce((currentSum, currentImg) => currentSum + currentImg.height, 0);
  }
  
  exitImageHeight() {
    return this.images[this.endIndex].height;
  }
  
  decrementIndex(index) {
    return index - 1 < 0 ? this.images.length - 1 : index - 1;
  }
  
  update() {
    this.startIndex = this.decrementIndex(this.startIndex);
    this.endIndex = this.decrementIndex(this.endIndex);;
    console.log(this.startIndex, this.endIndex);
  }
}

export class WaterfallSlideshow {
  constructor(images, canvasHeight, scrollSpeed) {
    this.height = canvasHeight;
    this.scrollSpeed = scrollSpeed;
    this.reel = new Reel(images);
    this.resetStartPosition();
  } 
  
  draw(p5) {
    let yOffset = 0;
  
    this.reel.getReel().forEach((img) => {
      p5.image(img, 0, this.startPosition + yOffset);
      yOffset += img.height;
    });

    this.startPosition += this.scrollSpeed;

    // Check image exited
    let exitedLength = this.getExitedLength();

    if (exitedLength >= this.reel.exitImageHeight()) {
      this.handleImageExit();
    }
  }
  
  getExitedLength() {
    return this.reel.getHeight() - this.height + this.startPosition;
  }

  resetStartPosition() {
    this.startPosition = this.height - this.reel.getHeight();
  }

  handleImageExit() {
    this.reel.update();
    this.resetStartPosition();
  }
}