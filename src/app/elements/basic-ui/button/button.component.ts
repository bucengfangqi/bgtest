import { Component, OnInit } from '@angular/core';
import { Observable, of, from, fromEvent, interval, timer, } from 'rxjs';
import {
  map, mapTo, filter,
  take, takeLast, first, takeUntil,
  concatAll, skip, concat, startWith, merge, combineLatest, withLatestFrom
} from 'rxjs/operators';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],

})
export class ButtonComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    const validValue = (value, max, min) => {
      return Math.min(Math.max(value, min), max)
    }

    const video = document.getElementById('video');
    const anchor = document.getElementById('anchor');
    const scroll = fromEvent(document, 'scroll');

    scroll.pipe(map(e => {
      return anchor.getBoundingClientRect().bottom < 0
    })).subscribe(bool => {
      if (bool) {
        video.classList.add('video-fixed')
      } else {
        video.classList.remove('video-fixed')
      }
    })

    const mousedown = fromEvent(document, 'mousedown');
    const mouseup = fromEvent(document, 'mouseup');
    const mousemove = fromEvent(document, 'mousemove');

    mousedown
      .pipe(
        filter(e => {
          return video.classList.contains('video-fixed')
        }),
        map(e => {
          return mousemove.pipe(takeUntil(mouseup));
        }),
        concatAll(),
        withLatestFrom(mousedown, (move, down) => {
          return {
            x: validValue(move['clientX'] - down['offsetX'], window.innerWidth - 320, 0),
            y: validValue(move['clientY'] - down['offsetY'], window.innerHeight - 180, 0)
          }
        }),
      )

      .subscribe(pos => {
        console.log(pos)
        video.style.top = pos.y + 'px';
        video.style.left = pos.x + 'px';
      })


  }


}
