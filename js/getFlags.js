
function getFlags() {
	var flags = [localStorage.getItem('1HHHGGfW2aBCH'),localStorage.getItem('2T2yXjXQEMb01'),localStorage.getItem('3LWyyxL40pZWp'),localStorage.getItem('4MXKQ1EZ0yv6A'),localStorage.getItem('5fcyR2QUg0ivi'),localStorage.getItem('6HFgA8TNxYFrb')]
	var flagNames = ['1HHHGGfW2aBCH','2T2yXjXQEMb01','3LWyyxL40pZWp','4MXKQ1EZ0yv6A','5fcyR2QUg0ivi','6HFgA8TNxYFrb']
	var totalFlags = 0
	const flagNum = 7; //This is to indicate the number of flags in the list + 1, for some reason using length+1 slows the page down massively
	
	for (let i = 0; i < flagNum; i++) {
		if (flags[i] != null) {
			totalFlags += 1
		}
		
	}
	
	document.getElementById('counter').innerHTML = totalFlags;
}
