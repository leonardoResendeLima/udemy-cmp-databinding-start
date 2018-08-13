import {
	Component,
	OnInit,
	Input,
	ViewEncapsulation,
	OnChanges,
	SimpleChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy,
	ViewChild,
	ElementRef,
	ContentChild
} from '@angular/core';


@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	// encapsulation : ViewEncapsulation.None // Not encapsulating the styles, but applies to all components
	encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
	OnInit,
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy {

	@Input('srvElement') element: { type: string, name: string, content: string };
	@Input() name: string;

	@ViewChild('heading') header: ElementRef;

	// get access to content that is beign passes from another app
	@ContentChild('contentParagraph') paragraph : ElementRef;

	constructor() {
		console.log('Constructor called');
	}

	// Lifecycle Hooks

	// ngonChanges           - Called aftera a bound input property changes
	// ngDoCheck   	         - Called every change detection run
	// ngAfterContentInit    - Called after content (ng-content) has been projected into view
	// ngAfterContentChecked - Called every time the projected content has been checked
	// ngAfterViewInit       - Called after the component's view (and child views) has been initialized
	// ngAfterViewChecked    - Called every time the view (anf child views) have been checked
	// ngOnDestroy 			 - Called once the component is about to be destroyed

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges called');
		console.log(changes);

	}

	// Called once the component is initialized
	ngOnInit() {
		console.log('ngOnInit called');
		console.log('Content Text : ' + this.header.nativeElement.textContent);
		console.log('Text Content Of paragraph : ' + this.paragraph.nativeElement.textContent);
	}

	ngDoCheck() {
		console.log('ngDoCheck called');
	}

	// Called only once
	ngAfterContentInit() {
		console.log('ngAfterContentInit called');
		console.log('Text Content Of paragraph : ' + this.paragraph.nativeElement.textContent);
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked called');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit called');
		console.log('Content Text : ' + this.header.nativeElement.textContent);
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');
	}
	ngOnDestroy() {
		console.log('ngOnDestroy called');
	}
	

}
