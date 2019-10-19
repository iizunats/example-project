import {AbstractComponent, Component, GlobalEventListener} from "iizuna";
import {EndEvent, MiddleEvent, StartEvent} from "@iizuna/page-transition";

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