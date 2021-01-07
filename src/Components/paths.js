import 'phaser'

export default class Path{
  constructor(graphics){
    this._graphics = graphics
    this._graphics.lineStyle(5, 0x000000, 5);
    this._graphics.fillStyle(0x00ff00, 1);
    this._pathOne()
    this._pathTwo()
    this._pathThree()
    this._pathFour()
    this.pathSetting = {
      duration: 35000,
      yoyo: true,
      repeat: -1,
      rotateToPath: true,
      rotationOffset: 90,
      verticalAdjust: false,
      onComplete:()=>{
        // count++
        // if (count === 1) {
        //   this.enemy1.setPath(curve2)
        // } else if(count > 1){
        //   count = 0
        //   pathSetting.yoyo = true
        //   this.enemy1.startFollow(pathSetting)
        //   this.enemy1.setPath(curve)
        // } 
      }
    }
  }

  _draw(path) {
    path.draw(this._graphics, 64)
  }

  _pathOne(){
    this._pathOne = new Phaser.Curves.Path(80, 80)
    this._pathOne.lineTo(new Phaser.Math.Vector2(650, 80))
    this._pathOne.lineTo(new Phaser.Math.Vector2(650, 1000));
    this._pathOne.lineTo(new Phaser.Math.Vector2(80, 1000));
    this._pathOne.lineTo(new Phaser.Math.Vector2(80, 1520));
    this._pathOne.lineTo(new Phaser.Math.Vector2(650, 1520));
    this._pathOne.lineTo(new Phaser.Math.Vector2(650, 2190));
    this._pathOne.lineTo(new Phaser.Math.Vector2(80, 2190));
    this._pathOne.lineTo(new Phaser.Math.Vector2(80, 80));
    this._draw(this._pathOne)
    this._pathOne.points = {x:80, y:80}
  }

  _pathTwo() {
    this._pathTwo = new Phaser.Curves.Path(650, 80)
    this._pathTwo.lineTo(new Phaser.Math.Vector2(1180, 80))
    this._pathTwo.lineTo(new Phaser.Math.Vector2(1180, 1000));
    this._pathTwo.lineTo(new Phaser.Math.Vector2(650, 1000));
    this._pathTwo.lineTo(new Phaser.Math.Vector2(650, 1520));
    this._pathTwo.lineTo(new Phaser.Math.Vector2(1180, 1520));
    this._pathTwo.lineTo(new Phaser.Math.Vector2(1180, 80))
    this._pathTwo.lineTo(new Phaser.Math.Vector2(80, 80))
    this._draw(this._pathTwo)
    this._pathTwo.points = {x:650, y:80}
  }

  _pathThree() {
    this._pathThree = new Phaser.Curves.Path(650, 2190)
    this._pathThree.lineTo(new Phaser.Math.Vector2(1180, 2190))
    this._pathThree.lineTo(new Phaser.Math.Vector2(1180, 1800))
    this._pathThree.lineTo(new Phaser.Math.Vector2(1700, 1800))
    this._pathThree.lineTo(new Phaser.Math.Vector2(1700, 1520))
    this._pathThree.lineTo(new Phaser.Math.Vector2(1180, 1520))
    this._pathThree.lineTo(new Phaser.Math.Vector2(1180, 2190))
    this._pathThree.lineTo(new Phaser.Math.Vector2(650, 2190))
    this._draw(this._pathThree)
    this._pathThree.points = {x:650, y:2190}
  }

  _pathFour() {
    this._pathFour = new Phaser.Curves.Path(1180, 80)
    this._pathFour.lineTo(new Phaser.Math.Vector2(1690, 80))
    this._pathFour.lineTo(new Phaser.Math.Vector2(1690, 1000))
    this._pathFour.lineTo(new Phaser.Math.Vector2(1190, 1000))
    this._pathFour.lineTo(new Phaser.Math.Vector2(1190, 1220))
    this._pathFour.lineTo(new Phaser.Math.Vector2(1690, 1220))
    this._pathFour.lineTo(new Phaser.Math.Vector2(1690, 80))
    this._draw(this._pathFour)
    this._pathFour.points = {x:1180, y:80}
  }


  get pathOne() {
    return this._pathOne;
  }
  get pathTwo(){
    return this._pathTwo
  }
  get pathThree(){
    return this._pathThree
  }
  get pathFour(){
    return this._pathFour
  }
}