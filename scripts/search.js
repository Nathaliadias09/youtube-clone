function searchVideo(event) {
    const search = event.target.value;
    const videos = document.getElementsByClassName("video-card");
    
    for (const video of videos) {
        const [channelNameElement, categoryElement] = video.
        getElementsByTagName("p");

        const videoInfo = {
            title: video.getElementsByTagName("h3")[0].innerText,
            channelName: channelNameElement.innerText,
            category: categoryElement.innerText
        }
    }
}

function matches(videoInfo, searchTerm) {
    return (
        videoInfo.title.incluses(searchTerm) ||
        videoInfo.channelName.includes(searchTerm) ||
        videoInfo.category.includes(searchTerm) 
    ); 
}
