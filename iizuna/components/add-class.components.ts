import {AbstractComponent, Component, GlobalEventListener} from "iizuna";
import {StartEvent} from "iizuna-page-transition/lib/events/start.event";
import {EndEvent} from "iizuna-page-transition/lib/events/end.event";
import {MiddleEvent} from "iizuna-page-transition/lib/events/middle.event";

@Component({
	selector: 'add-class'
})
export class AddClassComponents extends AbstractComponent {
	element: HTMLElement;

	@GlobalEventListener(StartEvent.eventName)
	public added() {
		this.element.classList.add('animation-start');
		this.element.classList.add('is-animated');
	}

	@GlobalEventListener(MiddleEvent.eventName)
	public middle() {
		this.element.classList.remove('animation-start');
		this.element.classList.add('animation-end');
	}

	@GlobalEventListener(EndEvent.eventName)
	public remove() {
		this.element.classList.remove('animation-end');
		this.element.classList.remove('is-animated');
	}
}