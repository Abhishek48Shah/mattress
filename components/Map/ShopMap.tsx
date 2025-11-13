"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FiCompass, FiMaximize } from "react-icons/fi";

const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function ShopMap() {
    const mapRef = useRef<L.Map | null>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);

    const shopLocation = {
        lat: -37.6833,
        lng: 145.0167,
        name: "16 Cliveden Ct",
        address: "16 Cliveden Ct, Thomastown VIC 3074, Australia",
    };

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        // Initialize map with zoom control disabled
        const map = L.map(mapContainerRef.current, {
            zoomControl: false, // Disable default zoom control to add custom one
        }).setView([shopLocation.lat, shopLocation.lng], 15);

        // Add zoom control on top right for all viewports
        L.control
            .zoom({
                position: "topright",
            })
            .addTo(map);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
            detectRetina: true,
            tileSize: 256,
        }).addTo(map);

        const marker = L.marker([shopLocation.lat, shopLocation.lng], {
            icon: icon,
        }).addTo(map);

        marker.bindPopup(`
            <div style="text-align: center; padding: 6px;">
                <strong style="font-size: 18px; font-weight: 600; display: block; margin-bottom: 6px;">${shopLocation.name}</strong>
                <span style="font-size: 15px; color: #555; line-height: 1.5;">${shopLocation.address}</span>
            </div>
        `);

        mapRef.current = map;

        // Fix for mobile blur - invalidate size after mount
        setTimeout(() => {
            if (mapRef.current) {
                mapRef.current.invalidateSize(true);
            }
        }, 100);

        const handleResize = () => {
            if (mapRef.current) {
                mapRef.current.invalidateSize(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    const handleViewInGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${shopLocation.lat},${shopLocation.lng}`;
        window.open(googleMapsUrl, "_blank");
    };

    const handleViewLargerMap = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${shopLocation.lat},${shopLocation.lng}`;
        window.open(googleMapsUrl, "_blank");
    };

    return (
        <>
            <style jsx global>{`
                .leaflet-container {
                    width: 100%;
                    height: 100%;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, "Helvetica Neue", Arial, sans-serif;
                    -webkit-font-smoothing: subpixel-antialiased;
                    -moz-osx-font-smoothing: auto;
                    font-size: 16px;
                    image-rendering: -webkit-optimize-contrast;
                }

                .leaflet-control-zoom,
                .leaflet-control-attribution {
                    -webkit-font-smoothing: subpixel-antialiased;
                    -moz-osx-font-smoothing: auto;
                    font-weight: 400;
                }

                /* Zoom buttons - bigger and more visible */
                .leaflet-control-zoom {
                    margin-right: 10px !important;
                    margin-top: 10px !important;
                    border: 2px solid rgba(0, 0, 0, 0.2) !important;
                    border-radius: 8px !important;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
                    overflow: hidden;
                }

                .leaflet-control-zoom a {
                    width: 40px !important;
                    height: 40px !important;
                    line-height: 40px !important;
                    font-size: 24px !important;
                    font-weight: 700 !important;
                    background-color: white !important;
                    color: #333 !important;
                    border: none !important;
                }

                .leaflet-control-zoom a:hover {
                    background-color: #f4f4f4 !important;
                }

                .leaflet-control-zoom-in {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
                }

                .leaflet-popup-content-wrapper {
                    border-radius: 8px;
                }

                .leaflet-popup-content {
                    margin: 14px;
                    font-size: 16px;
                    line-height: 1.5;
                }

                .leaflet-tile {
                    image-rendering: -webkit-optimize-contrast;
                }

                /* Mobile specific styles */
                @media (max-width: 768px) {
                    .leaflet-container {
                        font-size: 18px;
                    }

                    .leaflet-control-zoom {
                        margin-right: 8px !important;
                        margin-top: 8px !important;
                    }

                    .leaflet-control-zoom a {
                        width: 46px !important;
                        height: 46px !important;
                        line-height: 46px !important;
                        font-size: 28px !important;
                    }

                    .leaflet-popup-content {
                        font-size: 17px;
                    }
                }
            `}</style>

            {/* Parent container with map and controls */}
            <div className="relative w-full h-full">
                <div
                    ref={mapContainerRef}
                    className="w-full h-full min-h-[500px]"
                />

                <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-[280px] sm:max-w-[320px]">
                    <div className="mb-3 hidden sm:block">
                        <h3 className="font-bold text-base text-gray-900 mb-1">
                            16 Cliveden Ct
                        </h3>
                        <p className="text-[13px] text-gray-600 leading-relaxed">
                            16 Cliveden Ct, Thomastown VIC 3074, Australia
                        </p>
                    </div>

                    <div className="space-y-2">
                        <button
                            onClick={handleViewInGoogleMaps}
                            className="w-full bg-[var(--primary)] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                        >
                            <FiCompass />
                            Directions
                        </button>

                        <button
                            onClick={handleViewLargerMap}
                            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm border border-gray-300 flex items-center justify-center gap-2"
                        >
                            <FiMaximize />
                            View larger map
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
