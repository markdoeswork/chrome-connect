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
