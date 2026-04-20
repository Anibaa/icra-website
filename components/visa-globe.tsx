"use client"

import { GlobeFlights } from "@/components/ui/cobe-globe-flights"

// Tunisia coordinates: [36.8065, 10.1815]
const tunisiaLocation: [number, number] = [36.8065, 10.1815]

// Major cities from visa-free countries with connections to Tunisia
const visaFreeArcs = [
  // From Tunisia to major European cities
  { id: "tn-paris", from: tunisiaLocation, to: [48.8566, 2.3522] }, // Paris, France
  { id: "tn-london", from: tunisiaLocation, to: [51.5074, -0.1278] }, // London, UK
  { id: "tn-berlin", from: tunisiaLocation, to: [52.5200, 13.4050] }, // Berlin, Germany
  { id: "tn-rome", from: tunisiaLocation, to: [41.9028, 12.4964] }, // Rome, Italy
  { id: "tn-madrid", from: tunisiaLocation, to: [40.4168, -3.7038] }, // Madrid, Spain
  
  // From Tunisia to Middle East
  { id: "tn-dubai", from: tunisiaLocation, to: [25.2048, 55.2708] }, // Dubai, UAE
  { id: "tn-doha", from: tunisiaLocation, to: [25.2854, 51.5310] }, // Doha, Qatar
  
  // From Tunisia to Americas
  { id: "tn-nyc", from: tunisiaLocation, to: [40.7128, -74.0060] }, // New York, USA
  { id: "tn-toronto", from: tunisiaLocation, to: [43.6532, -79.3832] }, // Toronto, Canada
  { id: "tn-saopaulo", from: tunisiaLocation, to: [-23.5505, -46.6333] }, // São Paulo, Brazil
  
  // From Tunisia to Asia-Pacific
  { id: "tn-tokyo", from: tunisiaLocation, to: [35.6762, 139.6503] }, // Tokyo, Japan
  { id: "tn-singapore", from: tunisiaLocation, to: [1.3521, 103.8198] }, // Singapore
  { id: "tn-sydney", from: tunisiaLocation, to: [-33.8688, 151.2093] }, // Sydney, Australia
]

const visaFreeMarkers = [
  { id: "tunisia", location: tunisiaLocation },
  { id: "paris", location: [48.8566, 2.3522] as [number, number] },
  { id: "london", location: [51.5074, -0.1278] as [number, number] },
  { id: "berlin", location: [52.5200, 13.4050] as [number, number] },
  { id: "rome", location: [41.9028, 12.4964] as [number, number] },
  { id: "madrid", location: [40.4168, -3.7038] as [number, number] },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number] },
  { id: "doha", location: [25.2854, 51.5310] as [number, number] },
  { id: "nyc", location: [40.7128, -74.0060] as [number, number] },
  { id: "toronto", location: [43.6532, -79.3832] as [number, number] },
  { id: "saopaulo", location: [-23.5505, -46.6333] as [number, number] },
  { id: "tokyo", location: [35.6762, 139.6503] as [number, number] },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number] },
  { id: "sydney", location: [-33.8688, 151.2093] as [number, number] },
]

export function VisaGlobe() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <GlobeFlights 
        arcs={visaFreeArcs} 
        markers={visaFreeMarkers}
        speed={0.002}
        className="w-full"
      />
      <div className="text-center mt-2 space-y-0.5">
        <p className="text-xs text-muted-foreground">
          Visa-free travel connections
        </p>
        <p className="text-[10px] text-muted-foreground/70">
          Drag to rotate
        </p>
      </div>
    </div>
  )
}
