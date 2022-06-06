console.log("mark was here");

// Custom CSS for aesthetics
var styles = `
.bookmark {
        min-height: 0px;
	padding: 0px;
}
.eevent-bookmark {
        display: none;
}`;

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
// Custom CSS for aesthetics

// hide/show events cheveron
 var bookeventss = document.getElementsByClassName("event-bookmark");
 if (bookeventss.length > 0) {

	const rooms = document.getElementsByClassName("bookmarks-section-header")[0];

	var downHtml =
								`<div id="downnn" class="textclass">
									<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
										<style>
											i {
											color: #669FAB;
											font-size: 34px !important;
														}
										</style>
									<i class="material-icons">
										expand_more
									</i>
								</div>
	`;
	var upHtml =
								`<div id="uppp" class="textclass" style="display:none">
									<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
										<style>
											i {
											color: #669FAB;
											font-size: 34px !important;
														}
										</style>
									<i class="material-icons">
										expand_less
									</i>
								</div>
	`;

	rooms.insertAdjacentHTML("afterend", downHtml);
	rooms.insertAdjacentHTML("afterend", upHtml);
	for (var i = 0; i < bookeventss.length; i ++) {
		bookeventss[i].style.display = 'none';
	};

	document.getElementById("uppp").addEventListener("click", function(e) {
		var bookevents = document.getElementsByClassName("event-bookmark");
			for (var i = 0; i < bookevents.length; i ++) {
				bookevents[i].style.display = 'none';
			};
		document.getElementById("downnn").style.display = 'block';
		document.getElementById("uppp").style.display = 'none';
	});

	document.getElementById("downnn").addEventListener("click", function(e) {
		var bookevents = document.getElementsByClassName("event-bookmark");
			for (var i = 0; i < bookevents.length; i ++) {
				bookevents[i].style.display = 'block';
			};
		document.getElementById("downnn").style.display = 'none';
		document.getElementById("uppp").style.display = 'block';
	});
 };
// hide/show events cheveron
