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
