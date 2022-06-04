let setTheme = (param) => {
  document.querySelector('html').setAttribute('data-theme', param);
  localStorage.setItem("theme", param);
}
if (localStorage.getItem("theme") == 'dark') {
  setTheme('dark');
}

let DarkMode = () => {
  if (
    document.querySelector('html').getAttribute('data-theme') !== 'dark'
  ) {
    setTheme('dark');
  }
  else {
    setTheme('light');
  }
}