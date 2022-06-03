pipButton.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

pipButton.addEventListener('click', function () {

    if (!document.pictureInPictureElement) {
        video.requestPictureInPicture()
            .then(pipWindow => {
                updateVideoSize(pipWindow.width, pipWindow.height);
                pipWindow.addEventListener('resize', function (event) {
                    updateVideoSize(pipWindow.width, pipWindow.height);
                });
            })
            .catch(error => {

            });
    } else {
        document.exitPictureInPicture()
            .catch(error => {

            });
    }
});

function updateVideoSize(width, height) {

}

video.addEventListener('enterpictureinpicture', function () {

});

video.addEventListener('leavepictureinpicture', function () {

});

pipButtontwo.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

pipButtontwo.addEventListener('click', function () {

    if (!document.pictureInPictureElement) {
        videotwo.requestPictureInPicture()
            .then(pipWindow => {
                updateVideoSize(pipWindow.width, pipWindow.height);
                pipWindow.addEventListener('resize', function (event) {
                    updateVideoSize(pipWindow.width, pipWindow.height);
                });
            })
            .catch(error => {

            });
    } else {
        document.exitPictureInPicture()
            .catch(error => {

            });
    }
});

function updateVideoSize(width, height) {

}

video.addEventListener('enterpictureinpicture', function () {

});

video.addEventListener('leavepictureinpicture', function () {

});

pipButtonthree.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

pipButtonthree.addEventListener('click', function () {

    if (!document.pictureInPictureElement) {
        videothree.requestPictureInPicture()
            .then(pipWindow => {
                updateVideoSize(pipWindow.width, pipWindow.height);
                pipWindow.addEventListener('resize', function (event) {
                    updateVideoSize(pipWindow.width, pipWindow.height);
                });
            })
            .catch(error => {

            });
    } else {
        document.exitPictureInPicture()
            .catch(error => {

            });
    }
});

function updateVideoSize(width, height) {

}

video.addEventListener('enterpictureinpicture', function () {

});

video.addEventListener('leavepictureinpicture', function () {

});

pipButtonfour.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

pipButtonfour.addEventListener('click', function () {

    if (!document.pictureInPictureElement) {
        videofour.requestPictureInPicture()
            .then(pipWindow => {
                updateVideoSize(pipWindow.width, pipWindow.height);
                pipWindow.addEventListener('resize', function (event) {
                    updateVideoSize(pipWindow.width, pipWindow.height);
                });
            })
            .catch(error => {

            });
    } else {
        document.exitPictureInPicture()
            .catch(error => {

            });
    }
});

function updateVideoSize(width, height) {

}

video.addEventListener('enterpictureinpicture', function () {

});

video.addEventListener('leavepictureinpicture', function () {

});