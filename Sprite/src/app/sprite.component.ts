import { Component, Input } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'sprite',
    templateUrl: './sprite.component.html',
    styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {

    @Input("width")
    public width: number;


}