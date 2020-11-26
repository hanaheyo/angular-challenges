import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-directive-documentation',
  templateUrl: './directive-documentation.component.html',
  styleUrls: ['./directive-documentation.component.scss']
})
export class DirectiveDocumentationComponent implements OnInit, OnDestroy {
  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription;

  public ngOnInit(): void {
    const debounceTimeInMs = 500;

    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe((value: any) => this.debounceClick.emit(value));
  }

  public ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }
}
