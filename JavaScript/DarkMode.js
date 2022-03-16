let DarkMode = () => {
  if (
    document.querySelector('html').getAttribute('data-theme') == 'light'
  )
  {
    document.querySelector('html').setAttribute('data-theme', 'dark');
  }
  else {
    document.querySelector('html').setAttribute('data-theme', 'light');
  }
}