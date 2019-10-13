import {ComponentFactory} from "iizuna";
import {LoadPriorityComponent, PageTransitionComponent} from "iizuna-page-transition";

/**
 * Initializing all used Components
 */
ComponentFactory.registerComponents([
	PageTransitionComponent,
	LoadPriorityComponent
]);