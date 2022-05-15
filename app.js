console.log("LOGGED IN!!!!")
console.log(location)

window.addEventListener('load', function(){
  let parent = document.querySelector('.watch-active-metadata.style-scope.ytd-watch-flexy');
  console.log(parent, "parent")
  if(parent){
    let btn = makeButton();
    parent.insertBefore(btn, parent.firstChild);
    console.log(btn,"BUTTON")
  }
})

function makeButton(){
  let btn = document.createElement('div');
  btn.classList.add('tbn-ss-youtube');
  btn.innerHTML = `
    <tp-yt-paper-button class="ss-youtube-bg style-scope ytd-subscribe-button-renderer">Download</tp-yt-paper-button>
  `

  btn.addEventListener('click', function () {
    let href = location.href;
    let split = href.split('https://www.');
    let link = `https://www.ss${split[1]}`
    window.open(link, "_blank");
  });
  return btn;
}
