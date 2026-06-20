const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'You clicked! Git saves every change you make.';
});
