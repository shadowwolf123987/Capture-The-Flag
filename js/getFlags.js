
function getFlags() {
	var flags = [localStorage.getItem('1HHHGGfW2aBCH'),localStorage.getItem('2T2yXjXQEMb01'),localStorage.getItem('3LWyyxL40pZWp'),localStorage.getItem('4MXKQ1EZ0yv6A'),localStorage.getItem('5fcyR2QUg0ivi'),localStorage.getItem('6HFgA8TNxYFrb')]
	var flagNames = ['1HHHGGfW2aBCH','2T2yXjXQEMb01','3LWyyxL40pZWp','4MXKQ1EZ0yv6A','5fcyR2QUg0ivi','6HFgA8TNxYFrb']
	var totalFlags = 0
	const flagNum = 7; //This is to indicate the number of flags in the list + 1, for some reason using length+1 slows the page down massively
	
	for (let i = 0; i < flagNum; i++) {
		if (flags[i] != null && flags[i] != 0) {
			totalFlags += 1
		}
		
	}
	document.getElementById('counter').innerHTML = totalFlags;

return totalFlags;
}

function reset() {
localStorage.setItem("1HHHGGfW2aBCH", 0);
localStorage.setItem("2T2yXjXQEMb01", 0);
localStorage.setItem("3LWyyxL40pZWp", 0);
localStorage.setItem("4MXKQ1EZ0yv6A", 0);
localStorage.setItem("5fcyR2QUg0ivi", 0);
localStorage.setItem("6HFgA8TNxYFrb", 0);

window.location.href = "Capture-The-Flag/"
}

function skip() {
	if(window.location.href.includes("flag5.html")) {
		window.location.href = "congrats.html"
	}

	else if(window.location.href.includes("flag")) {
		var page = window.location.href
		page = page.split("flag")
		page = page[1].replace(".html","")
		page = parseInt(page)+1

		window.location.href = "flag"+(page)+".html"
	}

	else{
		window.location.href = "pages/flag2.html";
	}

	}