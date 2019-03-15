import { Component, OnInit, Renderer } from '@angular/core';
import { fromEvent, interval, timer, Observable, from, of } from 'rxjs';
import { take, map, filter, concatAll, takeUntil, skip, takeLast, last, concat, startWith, merge, combineLatest, zip, withLatestFrom
  ,scan,buffer,bufferCount,bufferTime,bufferToggle,bufferWhen,delay,debounceTime,throttleTime

} from 'rxjs/operators';
@Component({
  selector: 'app-anything',
  templateUrl: './anything.component.html',
  styleUrls: ['./anything.component.scss']
})
export class AnythingComponent implements OnInit {

  constructor(
    private renderer: Renderer
  ) { }
  subscription;
  num: any = "0";
  ngOnInit() {
    //var observable = interval(1000).pipe(map(x=>x+1),filter(x=>!(x%3)));
    //var observable = interval(1000).pipe(map(x=>this.format(x+1)),take(999));

    this.subscription = interval(1000).pipe(
      throttleTime(1000),
    ).subscribe({
      next: value => {
        this.num=value
      },
      error: error => {
        console.error(error)
      },
      complete: () => {
        console.info('complete')
      }
    })
  }

  validValue(value, max, min) {
    return Math.min(Math.max(value, min), max)
  }

  format(num) {
    if (num < 10) {
      return "00" + num
    } else if (num < 100) {
      return "0" + num
    } else {
      return num;
    }
  }
  currentStyles = {};

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
