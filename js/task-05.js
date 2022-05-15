const refs = {
inputRef: document.querySelector('#name-input'),
spanRef: document.querySelector('#name-output'),
};
const spanText = refs.spanRef.textContent;
     
refs.inputRef.addEventListener('input', onInput);

function onInput(events) {
    refs.spanRef.textContent = events.currentTarget.value ? events.currentTarget.value : spanText;
}

