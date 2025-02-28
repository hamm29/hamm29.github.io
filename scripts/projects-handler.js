var projectsDiv = document.getElementById("projects");

for (let i = 0; i < PROJECTS.length; i++) {
    var currentProject = PROJECTS[i];

    // Create project div
    var projectDiv = document.createElement("div");
    projectDiv.setAttribute("style", "display: inline-block; width: 300px; margin: 10px;");

    // Title
    var title = document.createElement("h3");
    var textNode = document.createTextNode(currentProject.title);
    title.appendChild(textNode);

    // Image
    var imge = document.createElement("img");
    imge.setAttribute("src", "./img/" + currentProject.img);
    imge.setAttribute("style", "width: 185px; height: 140px;");

    // Description
    var p = document.createElement("p");
    var pNode = document.createTextNode(currentProject.description);
    p.appendChild(pNode);

    // Append elements
    projectDiv.appendChild(title);
    projectDiv.appendChild(imge);
    projectDiv.appendChild(p);
    projectsDiv.appendChild(projectDiv);
}
