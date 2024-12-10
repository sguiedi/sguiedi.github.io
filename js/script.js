
imageIndicies={
    "image1" : 0,
    "image2" : 0,
    "image3" : 0,
    "image4" : 0,
}

imageArrays={
    "image1" : ["img/ed0.png", "img/ed1.png", "img/ed2.png"],
    "image2" : ["img/sprites1.png", "img/sprites0.png"],
    "image3" : ["img/steelseraph4.png", "img/steelseraph1.jpg", "img/steelseraph3.png"],
    "image4" : ["img/img1.png", "img/img2.png", "img/img3.png"],
}

function NextImage(id)
{
    if (imageIndicies[id] < imageArrays[id].length - 1)
        imageIndicies[id] += 1;
    else
        imageIndicies[id] = 0;

    document.getElementById(id).src=imageArrays[id][imageIndicies[id]];
}

function PreviousImage(id)
{
    if (imageIndicies[id] > 0)
        imageIndicies[id] -= 1;
    else
        imageIndicies[id] = imageArrays[id].length - 1;

    document.getElementById(id).src=imageArrays[id][imageIndicies[id]];
}

function SetActive(id)
{
    active = document.getElementsByClassName("active");

    // remove active from any active buttons
    for (i = 0; i < active.length; i++)
    {
        active[i].classList.remove("active");
    }

    // set the clicked button to active
    document.getElementById(id).classList.add("active");
}