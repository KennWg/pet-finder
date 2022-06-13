import React from 'react';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY


function googleMap() {
    <>
        <h3>My Google Maps Demo</h3>
        {/* <!--The div element for the map --> */}
        <div id="map"></div>

        {/* <!--
        The `defer` attribute causes the callback to execute after the full HTML
        document has been parsed. For non-blocking uses, avoiding race conditions,
        and consistent behavior across browsers, consider loading using Promises
        with https://www.npmjs.com/package/@googlemaps/js-api-loader.
    --> */}
        <script
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap&v=weekly`}
            defer
        ></script>
    </>

}

export default googleMap;