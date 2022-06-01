console.log("mark was here");

// Your CSS as text
var styles = `
.bookmark {
        min-height: 0px;
	padding: 0px;
}
.event-bookmark {
        display: none;
}`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

const rooms = document.getElementsByClassName("bookmarks-subheader")[0];

const expander = document.createElement('a');

         rooms.insertAdjacentHTML("afterend", '<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"> <style> i {color: #669FAB;font-size: 34px !important; /* 24px preferred icon size */}</style><i class="material-icons">expand_more</i>');

rooms.appendChild(expander);
