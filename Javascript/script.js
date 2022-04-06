function switchStyle(title){
    let links = document.getElementsByTagName("link");
    for(let i = 0; i < links.length ; i++){
        const link = links[i];
        const attribute = link.getAttribute("rel");
        const linkTitle = link.getAttribute("title");
        if(attribute.indexOf("style") !== -1 && attribute.indexOf("alt") !== -1 && linkTitle && linkTitle !== title){
            link.disabled = true;
        }

        if(linkTitle === title){
            link.disabled = !link.disabled;
        }
    }
}