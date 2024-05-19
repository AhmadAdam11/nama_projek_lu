// Array: 
data = [ 
    { 
        'img1': '../asset/HousePR.jpg', 
        'img2': '../asset/BlenderPR.jpeg', 
        'title': 'Blender-Project:', 
        'subtitle': '(House & Kong)', 
        'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sequi, quisquam adipisci unde delectus possimus officiis laboriosam blanditiis aliquid porro eius quia perspiciatis nemo nisi.' 
    }, 
 
    { 
        'img1': '../asset/UnityPR.jpg', 
        'img2': '../asset/CSharpPR.png', 
        'title': 'Unity-Project:', 
        'subtitle': '(Create Map)', 
        'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sequi, quisquam adipisci unde delectus possimus officiis laboriosam blanditiis aliquid porro eius quia perspiciatis nemo nisi.' 
    }, 
 
    { 
        'img1': '../asset/FIGMAPR.png', 
        'img2': '../asset/PreviewFigma GOLD.png', 
        'title': 'Wireframe-Mobile:', 
        'subtitle': '(Gold Games)', 
        'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sequi, quisquam adipisci unde delectus possimus officiis laboriosam blanditiis aliquid porro eius quia perspiciatis nemo nisi.' 
    } 
] 
 
 
let container = document.querySelector('.container-project') 
 
data.forEach(element =>  { 
    container.innerHTML += 
 
    `<div class="project"> 
    <div class="img-project"> 
        <img src="`+element.img1+`" alt=""> 
        <img src="${element.img2}" alt=""> 
    </div> 
 
    <div class="desc-project"> 
        <h1>${element.title}</h1> 
        <h2>${element.subtitle}</h2> 
        <p>${element.desc}</p> 
    </div> 
 
    <button class="read-more"> 
        Baca Selengkapnya 
    </button> 
</div> 
` 
 
});