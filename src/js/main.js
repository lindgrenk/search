var words = ['hej', 'båt', 'kristian', 'amanda', 'amandaa', 'martin', 'niclas', 'tårta'];

function findWords(event) {
	var regex = new RegExp(event.split('').join('\\w*').replace(/\W/, ""), 'i');

	return words.filter(function(word) {
		if (word.match(regex)) {
			return word;
		}
	});
}

function replaceWord(replace, inputField) {
	var result = findWords(replace);
	var getDiv = document.getElementById('result');
	var inputField = document.getElementById('search').value;
	getDiv.innerHTML = '';

	if (inputField) {
		for (var i = 0; i < result.length; i++) {
			var createDiv = document.createElement('div');

			getDiv.appendChild(createDiv);
			createDiv.className = "test";
			createDiv.innerHTML = result[i];
			createDiv.addEventListener("mouseover", fillInput);
			createDiv.addEventListener("click", closeList);
		}
	}else {
		getDiv.innerHTML = '';
	}
}

function fillInput() {
	var selectedText = this.innerHTML;
	document.getElementById("search").value = selectedText;
}

function closeList() {
	var selectedDiv = document.getElementById("result");
	while (selectedDiv.firstChild) {
		selectedDiv.removeChild(selectedDiv.firstChild);
	}
}

function buildContent() {
	event.preventDefault();

	var inputField = document.getElementById('search').value;
	var selectContent = document.getElementById('content');

	if (inputField) {
		selectContent.innerHTML = "<h2>" + inputField + "</h2>";
		selectContent.innerHTML += "<p> Lorem ipsum dolor sit amet, velit dolore ei eum, an sit mazim iisque pertinacia. Vim accusam delicatissimi eu, id reque corpora vel. Mei ne omnesque posidonium. Illud menandri mel et. Integre ancillae assentior cu nam, no inani regione his. </p>"
	} else {
		selectContent.innerHTML = "<h2> You need to search for something</h2>";
	}
}
