import { Component, OnInit } from '@angular/core';
import { Observable, of, from, fromEvent, interval, timer, never, throwError } from 'rxjs';
import { SelectService } from './select.service';
import {
  map, mapTo, filter,
  take, takeLast, first, takeUntil,
  concatAll, skip, concat, startWith,
  merge, combineLatest, withLatestFrom, zip, scan,
  buffer, bufferCount, bufferTime
} from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(
    private selectService: SelectService
  ) { }
    
  ngOnInit() {
    document.getElementsByClassName("class")
    var click = fromEvent(document.body, 'click');
    var source = interval().pipe(zip(click, (x, y) => x + ""))
    var example = source.pipe(scan((origin, next) => next, ''))

    example.subscribe({
      next: function (value) {
        console.log(value);
      },
      error: function (error) {
        console.log(error)
      },
      complete: function () {
        console.log('complete')
      }
    })
  }

}
