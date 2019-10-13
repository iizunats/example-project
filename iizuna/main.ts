import {ComponentFactory} from "iizuna";
import {LoadPriorityComponent, PageTransitionComponent} from "iizuna-page-transition";

/**
 * The PageTransitionComponent has to cache all wanted components.
 * That's why we have to pass them to the config method.
 *
 * The config method returns the passed components.
 * @type {AbstractComponent[]}
 */
const COMPONENTS = PageTransitionComponent.config([
	PageTransitionComponent,
	LoadPriorityComponent
]);

/**
 * Initializing all used Components
 */
ComponentFactory.registerComponents(COMPONENTS);