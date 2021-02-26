import { Component } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprite';

  private HWname = 'Домашнее задание — проект Sprite';

  private pictureSprite = 'http://fe.it-academy.by/Examples/cards2.png';

  private widthSprite: number = 574;

  private heightSprite = 2712;

  // сами задаем число стролбцов и строк в sprite
  private columnNumber: number = 4;

  private rowNumber = 14;

  //расчет шага
  private stepXSprite: number = this.widthSprite / this.columnNumber;

  private stepYSprite = this.heightSprite / this.rowNumber;

  //cчетчик кликов
  private counter = 0;

  getName() {
    return this.HWname;
  }

  getUrl() {
    return this.pictureSprite;
  }

  getWidth(): number {
    return this.stepXSprite;
  }

  getHeight() {
    return this.stepYSprite;
  }

  getX() {
    return 0;
  }

  getY() {
    return 0;
  }

  // расчет размера картинки
  // НЕ РАБОТАЕТ!!! после запуска начинается зацикливание и бесконечный вывод значений
  getPicSize(_src: any) {
    let img = document.createElement('img');
    img.src = _src;
    img.onload = function () {
      console.log("Height : ", img.height, "Width:", img.width);
    };
  }

  checkSize() {
    // this.getPicSize(this.pictureSprite, function (w: number, h: number) {
    //   console.log("Height : ", h, "Width:", w);
    // });
  }


}
