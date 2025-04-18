// src/Map.jsx
import React, { useEffect, useRef, useState } from 'react';

//
// Your Kakao JavaScript API key
//
const KAKAO_APP_KEY = '7a1e48880ae38fcc21ffae680e45255f';

//
// Dummy listing data with coordinates.
// You can replace or extend this array to test more markers.
//
const DUMMY_LISTINGS = [
  {
    id: 'sinchon-room-1',
    title: 'Studio near Sogang Univ.',
    description: 'Cozy studio, 10 min walk to campus.',
    lat: 37.5524,
    lng: 126.9352,
  },
  {
    id: 'yeonnam-room-1',
    title: 'One-room near Hongdae',
    description: 'Modern one-room, nightlife area.',
    lat: 37.5648,
    lng: 126.9255,
  },
  {
    id: 'changjeon-room-1',
    title: 'Studio with view',
    description: 'Lovely view of the hills.',
    lat: 37.5497,
    lng: 126.9334,
  },
];

export default function Map() {
  // Ref to the div where Kakao map will be rendered
  const mapContainerRef = useRef(null);

  // Hold map instance
  const [mapInstance, setMapInstance] = useState(null);

  // Track if Kakao SDK is loaded
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // Load Kakao SDK script
  useEffect(() => {
    // Don't load twice
    if (window.kakao && window.kakao.maps) {
      setSdkLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      setSdkLoaded(true);
    };

    script.onerror = () => {
      console.error('Failed to load Kakao Maps SDK');
    };

    // Cleanup: remove script if component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Initialize map once SDK is ready
  useEffect(() => {
    if (!sdkLoaded) return;

    window.kakao.maps.load(() => {
      // Map options: center near Sogang Univ.
      const options = {
        center: new window.kakao.maps.LatLng(37.5533, 126.9368),
        level: 4,
      };

      // Create map inside the ref div
      const map = new window.kakao.maps.Map(mapContainerRef.current, options);
      setMapInstance(map);
    });
  }, [sdkLoaded]);

  // Add markers once map instance is available
  useEffect(() => {
    if (!mapInstance) return;

    // InfoWindow instance (we'll reuse one window)
    const infoWindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    DUMMY_LISTINGS.forEach((listing) => {
      // Create marker
      const marker = new window.kakao.maps.Marker({
        map: mapInstance,
        position: new window.kakao.maps.LatLng(listing.lat, listing.lng),
        title: listing.title,
      });

      // Add click listener to marker to open InfoWindow
      window.kakao.maps.event.addListener(marker, 'click', function () {
        const content = `
          <div style="padding:8px; min-width:200px; font-size:14px;">
            <strong>${listing.title}</strong><br/>
            <span style="color:#555;">${listing.description}</span>
          </div>`;
        infoWindow.setContent(content);
        infoWindow.open(mapInstance, marker);
      });

      // Optional: close InfoWindow on map click
      window.kakao.maps.event.addListener(mapInstance, 'click', function () {
        infoWindow.close();
      });
    });

    // Cleanup markers on unmount
    return () => {
      window.kakao.maps.clear(mapInstance);
    };
  }, [mapInstance]);

  return (
    <div className="map-wrapper relative w-full h-full">
      {/*
        The container must have an explicit width & height.
        We're using Tailwind classes when consumed in App.jsx.
      */}
      <div
        id="map"
        ref={mapContainerRef}
        className="w-full h-full rounded-xl shadow-lg border"
        style={{ minHeight: '500px' }}
      />
    </div>
  );
}
