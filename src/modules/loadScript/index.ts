export default (src: string, onLoad?: () => void, onError?: () => void) : void => {
	var script = document.createElement('script');
	script.src = src;
	if(onLoad) {
		script.onload = () => { onLoad() };
	}
	if(onError) {
		script.onerror = () => { onError() };
	}

	document.body.appendChild(script);
}