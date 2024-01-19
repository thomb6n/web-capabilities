// Geolocation API
const getLocationButton = document.getElementById("get-location");

function getLocation() {
  const locationParagraph = document.getElementById("location");

  if ("geolocation" in navigator) {
    const showPosition = (position) => {
      locationParagraph.textContent = `Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}.`;
      getLocationButton.textContent = "Update my location";
    };

    const handleError = (error) => {
      if (error.PERMISSION_DENIED) {
        locationParagraph.textContent =
          "You denied permission for sharing your current location with the browser.";
      } else {
        console.error(error.message);
      }
    };

    navigator.geolocation.getCurrentPosition(showPosition, handleError);
  } else {
    locationParagraph.textContent = "The Geolocation API is not available.";
  }
}

getLocationButton.onclick = getLocation;

// Screen Orientation API
const orientationSpan = document.getElementById("orientation");

function updateOrientation() {
  const currentOrientation = screen.orientation;
  orientationSpan.textContent = currentOrientation.type;
}

updateOrientation();

// Web Share API
const shareButton = document.getElementById("share-button");
shareButton.onclick = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Web Capabilities Repository",
        text: "Sent with the Web Share API",
        url: "https://github.com/thomb6n/web-capabilities",
      })
      .catch((err) => console.log(err));
  } else {
    console.log("The Web Share API is not supported in your browser.");
  }
};
