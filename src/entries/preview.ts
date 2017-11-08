import runPreview from '../preview/component';
const CONTENT_ELEMENT_CLASS = 'page_content';

document.addEventListener("DOMContentLoaded", () => {
	const element = document.getElementsByClassName(CONTENT_ELEMENT_CLASS)[0];
	if (!!element && element instanceof HTMLElement) {
		runPreview(element);
	} else {
		throw new Error(`The element with class "${CONTENT_ELEMENT_CLASS}" is not found.`);
	}
});