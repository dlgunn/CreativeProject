// function collapseSection() {
// 	let sections = document.querySelectorAll(".poemArticle");
// 	console.log(sections);
// 	sections.forEach((article) => {
// 		let expandButton = document.createElement("p");
// 		expandButton.appendChild(document.createTextNode("[Click to collapse]"));
// 		expandButton.addEventListener("mouseover", () => {
// 			expandButton.style.color = "grey";
// 		});
// 		console.log("made it this far");
// 		expandButton.addEventListener("mouseout", () => {
// 			expandButton.style.color = "black";
// 		});
// 		let title = article.firstElementChild.querySelector("h1").innerText;
// 		console.log(title);
// 		function hideSection() {
// 			let element = expandButton;
// 			while (element.nextElementSibling !== null) {
// 				element.nextElementSibling.style.display = "none";
// 				element = element.nextElementSibling;
// 			}
// 			expandButton.nextElementSibling.style.display = "none";
// 			expandButton.innerText = `[Click to expand] ${title}`;
// 			expandButton.onclick = showSection;
// 		}

// 		function showSection() {
// 			let element = expandButton;
// 			while (element.nextElementSibling !== null) {
// 				element.nextElementSibling.style.display = "block";
// 				element = element.nextElementSibling;
// 			}
// 			expandButton.innerText = "[Click to collapse]";
// 			expandButton.onclick = hideSection;
// 		}
// 		expandButton.onclick = hideSection;
// 		article.firstElementChild.insertBefore(
// 			expandButton,
// 			article.querySelector("h1")
// 		);
// 	});
// }
