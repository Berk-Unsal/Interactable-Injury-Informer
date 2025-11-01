import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- Styles for Interactivity ---
// We'll apply these styles to the clickable paths
const clickableStyle = {
  cursor: 'pointer',
};

const hoverStyle = {
  cursor: 'pointer',
  fill: '#3b82f6', // Midnight blue highlight color
  fillOpacity: 0.9,
  filter: 'drop-shadow(0 0 16px rgba(59, 130, 246, 0.8))',
  transition: 'fill 0.5s cubic-bezier(0.4, 0, 0.2, 1), fillOpacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s cubic-bezier(0.4, 0, 0.2, 1), strokeWidth 0.5s cubic-bezier(0.4, 0, 0.2, 1), strokeOpacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  stroke: '#60a5fa',
  strokeWidth: 2,
  strokeOpacity: 0.8,
  opacity: 1,
};

const defaultStyle = {
  cursor: 'pointer',
  fill: '#1e40af',
  fillOpacity: 0.3,
  filter: 'drop-shadow(0 0 2px rgba(30, 64, 175, 0.2))',
  transition: 'fill 0s, fillOpacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), filter 1.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0s, strokeWidth 1.2s cubic-bezier(0.4, 0, 0.2, 1), strokeOpacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)', // Instant color change, slow fade for opacity/glow
  stroke: '#3b82f6',
  strokeWidth: 0.5,
  strokeOpacity: 0.2,
  opacity: 0.6,
};
// ---------------------------------

const partToRouteMap = {
  'shoulder': '/shoulder',
  'left-trap': '/traps',
  'rhomboid': '/rhomboids',
  'teres': '/teres-minor',
  'chest': '/chest',
  'tricep': '/tricep',
  'bicep': '/bicep',
  'lat': '/lat',
  'forearm': '/forearm',
  'lowerback': '/lowerback',
  'glute': '/glute',
  'hamstring': '/hamstring',
  'quad': '/quad',
  'calf': '/calf', // <-- I also fixed a small typo here (was 'calf', now '/calf')
  'anterior': '/anterior'
};

// 2. Get the list of all prefixes once.
const routePrefixes = Object.keys(partToRouteMap);

function AnatomyDiagram() {
  const navigate = useNavigate();
  const [hoveredPart, setHoveredPart] = React.useState(null);

  // 3. Use the map inside the handler
  const handlePartClick = (partId) => {
    console.log(`Clicked on part: ${partId}`);
    
    // Find which prefix (e.g., 'shoulder') the partId ('shoulder-1') starts with
    const matchingPrefix = routePrefixes.find(prefix => partId.startsWith(prefix));

    if (matchingPrefix) {
      // Get the path (e.g., '/shoulder') from the map using the found prefix
      const path = partToRouteMap[matchingPrefix];
      navigate(path);
    } else {
      // Optional: Log a warning if a clicked part has no route
      console.warn(`No route defined for partId: ${partId}`);
    }
  };

  // This function gets the correct style for a path
  const getStyle = (partId, originalStyle) => {
    let style = { ...clickableStyle, ...originalStyle }; // Combine base styles

    if (hoveredPart === partId) {
      // Apply hover style on top
      style = { ...style, ...hoverStyle };
    }
    return style;
  };

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="612.000000pt"
      height="612.000000pt"
      viewBox="0 0 612.000000 612.000000"
      preserveAspectRatio="xMidYMid meet">
      <g
        transform="translate(0.000000,612.000000) scale(0.100000,-0.100000)"
        fill="#F4F4F4"
        stroke="none">
        
        {/* --- I've converted your comments and added interactivity --- */}
        
        {/*Ignore Head | BackView */}
        <path d="M1529 5817 c-88 -47 -144 -160 -137 -278 1 -32 1 -59 -2 -59 -3 0 -11 -4 -19 -9 -11 -7 -10 -20 9 -75 12 -36 25 -66 30 -66 4 0 10 -21 13 -47 6 -56 23 -73 105 -103 75 -29 150 -23 224 16 46 25 54 34 62 69 4 22 16 58 26 80 33 73 42 119 25 131 -11 8 -15 30 -15 76 0 86 -20 149 -66 205 -67 82 -168 106 -255 60z" />
        {/*Ignore (Head) not a muscle */}
        <path d="M4404 5821 c-79 -36 -124 -121 -124 -235 0 -66 -2 -75 -20 -81 -11 -3 -20 -14 -20 -24 0 -25 28 -102 44 -121 7 -8 19 -42 26 -74 10 -44 16 -54 21 -40 4 10 16 41 25 68 10 27 33 64 51 83 31 30 39 33 97 33 92 0 123 -29 166 -154 l17 -51 13 55 c7 30 21 69 30 85 10 17 24 52 31 79 11 44 10 50 -6 62 -15 11 -19 29 -21 85 -5 120 -65 214 -152 239 -57 15 -132 12 -178 -9z" />
        
        {/*Left Trap | BackView */}
        <path
          d="M4461 5314 c-7 -35 -16 -76 -21 -90 -15 -38 -106 -131 -183 -185 l-68 -48 38 -6 c32 -5 172 -43 224 -61 14 -5 17 20 27 198 7 112 15 213 18 224 4 14 0 23 -9 27 -12 4 -18 -8 -26 -59z"
          id="left-trap-back"
          style={getStyle('left-trap-back')}
          onClick={() => handlePartClick('left-trap-back')}
          onMouseEnter={() => setHoveredPart('left-trap-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Trap | BackView */}
        <path
          d="M4533 5372 c-7 -5 -8 -34 -3 -97 5 -49 11 -150 15 -223 6 -118 9 -133 24 -127 31 12 186 54 225 60 l39 6 -50 34 c-62 41 -156 127 -186 169 -12 17 -29 66 -37 108 -11 51 -19 74 -27 70z"
          id="left-trap-back-2"
          style={getStyle('left-trap-back-2')}
          onClick={() => handlePartClick('left-trap-back-2')}
          onMouseEnter={() => setHoveredPart('left-trap-back-2')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore*/}
        <path d="M4393 5327 c-19 -27 -23 -46 -23 -108 l1 -74 20 38 c17 33 40 177 28 177 -2 0 -14 -15 -26 -33z" />
        <path d="M4601 5320 c-1 -57 15 -126 34 -154 14 -19 15 -15 15 49 0 57 -5 78 -25 110 l-24 40 0 -45z" />
        <path d="M1477 5166 c-4 -9 -4 -31 -1 -49 7 -42 105 -247 116 -241 4 3 8 23 8 45 0 27 -15 69 -50 137 -63 125 -66 128 -73 108z" />
        <path d="M1697 5067 c-54 -108 -65 -145 -51 -182 10 -26 111 167 119 228 12 85 -8 71 -68 -46z" />
        <path d="M1574 5129 c-4 -7 45 -169 51 -169 4 0 55 155 55 169 0 9 -100 9 -106 0z" />
        <path d="M1355 5034 c-71 -36 -103 -59 -94 -69 3 -3 25 -8 50 -11 41 -6 47 -3 92 36 44 39 62 80 35 80 -7 -1 -44 -17 -83 -36z" />
        <path d="M1780 5053 c0 -9 21 -36 48 -60 46 -43 48 -44 97 -38 78 10 79 9 -49 78 -78 41 -96 45 -96 20z" />
        <path d="M1455 4977 c-19 -29 -13 -47 15 -47 27 0 33 16 17 46 l-14 27 -18 -26z" />
        <path d="M1741 4974 c-13 -30 -7 -44 19 -44 27 0 34 18 19 46 -16 31 -23 30 -38 -2z" />
        
        {/*Left Rhomboid | BackView */}
        <path
          d="M4060 4951 c-19 -5 -29 -9 -22 -10 67 -6 124 -73 179 -209 50 -123 90 -201 130 -250 35 -43 109 -99 118 -90 10 10 16 324 8 398 -8 73 -9 75 -48 97 -84 47 -284 82 -365 64z"
          id="rhomboid-left-back"
          style={getStyle('rhomboid-left-back')}
          onClick={() => handlePartClick('rhomboid-left-back')}
          onMouseEnter={() => setHoveredPart('rhomboid-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Rhomboid | BackView */}
        <path
          d="M4782 4949 c-74 -9 -173 -40 -219 -68 -29 -18 -32 -24 -38 -97 -8 -82 -1 -381 8 -391 9 -9 73 34 106 72 44 50 77 112 132 242 26 64 60 133 74 155 29 44 78 77 115 79 31 2 -55 18 -90 17 -14 0 -54 -4 -88 -9z"
          id="rhomboid-right-back"
          style={getStyle('rhomboid-right-back')}
          onClick={() => handlePartClick('rhomboid-right-back')}
          onMouseEnter={() => setHoveredPart('rhomboid-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/* --- INTERACTIVE SHOULDER PARTS --- */}
        
        {/*Left:Side Shoulder | FrontView*/}
        <path
          d="M1076 4935 c-84 -30 -116 -91 -116 -222 l0 -68 45 92 c30 61 64 111 103 152 53 56 56 61 32 61 -14 -1 -42 -7 -64 -15z"
          id="shoulder-left-side"
          style={getStyle('shoulder-left-side')}
          onClick={() => handlePartClick('shoulder-left-side')}
          onMouseEnter={() => setHoveredPart('shoulder-left-side')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right:Side Shoulder | FrontView*/}
        <path
          d="M2112 4921 c45 -38 131 -165 148 -218 21 -64 30 -61 30 8 -1 153 -48 220 -166 235 l-49 6 37 -31z"
          id="shoulder-right-side"
          style={getStyle('shoulder-right-side')}
          onClick={() => handlePartClick('shoulder-right-side')}
          onMouseEnter={() => setHoveredPart('shoulder-right-side')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Left Front Shoulder | FrontView*/}
        <path
          d="M1213 4909 c-78 -38 -189 -174 -214 -261 -9 -35 6 -36 69 -8 81 37 176 161 197 258 8 38 4 39 -52 11z"
          id="shoulder-left-front"
          style={getStyle('shoulder-left-front')}
          onClick={() => handlePartClick('shoulder-left-front')}
          onMouseEnter={() => setHoveredPart('shoulder-left-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Rigt Front Shoulder | FrontView*/}
        <path
          d="M1984 4899 c19 -97 104 -211 188 -253 61 -31 78 -32 78 -8 0 76 -158 258 -249 287 -23 7 -24 6 -17 -26z"
          id="shoulder-right-front"
          style={getStyle('shoulder-right-front')}
          onClick={() => handlePartClick('shoulder-right-front')}
          onMouseEnter={() => setHoveredPart('shoulder-right-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
          
        {/*Left Chest | FrontView */}
        <path
          d="M1352 4883 c-47 -23 -112 -100 -149 -175 -57 -116 -60 -108 59 -167 127 -62 205 -84 260 -72 75 17 78 25 78 195 0 170 -4 182 -70 216 -48 25 -132 26 -178 3z"
          id="chest-left-front"
          style={getStyle('chest-left-front')}
          onClick={() => handlePartClick('chest-left-front')}
          onMouseEnter={() => setHoveredPart('chest-left-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Chest | FrontView */}
        <path
          d="M1708 4880 c-64 -34 -68 -47 -68 -216 0 -131 2 -153 18 -166 60 -54 177 -34 353 58 81 43 80 41 27 153 -36 75 -96 145 -150 172 -49 25 -131 24 -180 -1z"
          id="chest-right-front"
          style={getStyle('chest-right-front')}
          onClick={() => handlePartClick('chest-right-front')}
          onMouseEnter={() => setHoveredPart('chest-right-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Left Shoulder | BackView */}
        <path
          d="M3912 4880 c-42 -26 -73 -93 -75 -163 -2 -62 10 -127 23 -127 20 0 250 256 250 277 0 36 -145 45 -198 13z"
          id="shoulder-left-back"
          style={getStyle('shoulder-left-back')}
          onClick={() => handlePartClick('shoulder-left-back')}
          onMouseEnter={() => setHoveredPart('shoulder-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Shoulder | BackView */}
        <path
          d="M4920 4893 c-49 -18 -32 -46 144 -238 79 -86 89 -82 94 35 4 67 0 87 -18 126 -30 62 -69 84 -145 83 -33 0 -67 -3 -75 -6z"
          id="shoulder-right-back"
          style={getStyle('shoulder-right-back')}
          onClick={() => handlePartClick('shoulder-right-back')}
          onMouseEnter={() => setHoveredPart('shoulder-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Left Teres Minor | BackView */}
        <path
          d="M4088 4783 c-54 -57 -98 -123 -98 -148 0 -18 9 -24 53 -34 70 -15 187 -29 191 -22 14 24 -74 241 -97 241 -7 0 -29 -17 -49 -37z"
          id="teres-left-minor-back"
          style={getStyle('teres-left-minor-back')}
          onClick={() => handlePartClick('teres-left-minor-back')}
          onMouseEnter={() => setHoveredPart('teres-left-minor-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Teres Minor | BackView */}
        <path
          d="M4826 4773 c-27 -55 -68 -182 -62 -192 6 -9 142 6 198 23 26 7 44 19 46 29 6 31 -115 187 -145 187 -7 0 -23 -21 -37 -47z"
          id="teres-right-minor-back"
          style={getStyle('teres-right-minor-back')}
          onClick={() => handlePartClick('teres-right-minor-back')}
          onMouseEnter={() => setHoveredPart('teres-right-minor-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Left Tricep | BackView */}
        <path
          d="M3942 4609 c-12 -16 -32 -49 -44 -76 -19 -44 -20 -57 -13 -183 4 -74 8 -159 9 -187 1 -29 3 -53 6 -52 14 1 56 68 78 122 22 56 24 70 18 157 -4 52 -12 129 -19 171 l-12 75 -23 -27z"
          id="tricep-left-back"
          style={getStyle('tricep-left-back')}
          onClick={() => handlePartClick('tricep-left-back')}
          onMouseEnter={() => setHoveredPart('tricep-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Tricep | BackView */}
        <path
          d="M5026 4623 c3 -11 -2 -59 -10 -109 -18 -101 -20 -203 -6 -254 11 -40 70 -142 85 -147 10 -3 11 8 17 262 3 128 1 143 -19 180 -11 22 -32 51 -46 64 -23 21 -25 21 -21 4z"
          id="tricep-right-back"
          style={getStyle('tricep-right-back')}
          onClick={() => handlePartClick('tricep-right-back')}
          onMouseEnter={() => setHoveredPart('tricep-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Left Bicep | FrontView */}
        <path
          d="M1004 4581 c-43 -19 -78 -65 -95 -123 -12 -43 -30 -273 -23 -293 8 -19 43 -19 71 0 29 20 110 129 140 189 26 51 42 170 29 220 -5 22 -12 26 -44 26 -20 0 -55 -9 -78 -19z"
          id="bicep-left-front"
          style={getStyle('bicep-left-front')}
          onClick={() => handlePartClick('bicep-left-front')}
          onMouseEnter={() => setHoveredPart('bicep-left-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Bicep | FrontView */}
        <path
          d="M2119 4578 c-16 -30 -4 -149 21 -206 24 -53 96 -156 138 -195 19 -19 38 -28 53 -25 24 3 24 3 21 128 -4 146 -21 216 -63 265 -48 54 -148 74 -170 33z"
          id="bicep-right-front"
          style={getStyle('bicep-right-front')}
          onClick={() => handlePartClick('bicep-right-front')}
          onMouseEnter={() => setHoveredPart('bicep-right-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/* Ignore */}
        <path d="M1162 4448 c7 -115 25 -193 43 -193 20 0 17 144 -5 210 -38 113 -46 109 -38 -17z" />
        <path d="M2057 4490 c-22 -56 -27 -86 -27 -156 0 -93 13 -108 36 -43 11 34 31 269 22 269 -2 0 -16 -31 -31 -70z" />
        
        {/*Left Latissimus | BackView */}
        <path
          d="M4005 4494 c10 -97 40 -181 102 -287 83 -143 122 -223 137 -279 7 -29 18 -54 23 -55 17 -6 102 96 134 159 39 78 59 158 59 240 l0 67 -62 48 c-35 26 -88 71 -119 99 -60 55 -43 50 -225 70 l-57 7 8 -69z"
          id="lat-left-back"
          style={getStyle('lat-left-back')}
          onClick={() => handlePartClick('lat-left-back')}
          onMouseEnter={() => setHoveredPart('lat-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Latissimus | BackView */}
        <path
          d="M4860 4549 c-95 -11 -115 -20 -168 -72 -23 -24 -69 -63 -102 -88 -50 -38 -60 -50 -65 -84 -17 -107 52 -299 139 -389 25 -25 49 -46 55 -46 5 0 12 17 16 38 8 46 66 166 139 291 67 114 95 193 103 289 7 83 19 76 -117 61z"
          id="lat-right-back"
          style={getStyle('lat-right-back')}
          onClick={() => handlePartClick('lat-right-back')}
          onMouseEnter={() => setHoveredPart('lat-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore*/}
        <path d="M3825 4486 c-28 -64 -55 -202 -55 -284 0 -30 2 -53 4 -51 2 2 14 60 25 129 12 69 30 154 41 189 11 36 17 67 15 70 -3 2 -16 -21 -30 -53z" />
        <path d="M5143 4525 c3 -11 13 -45 21 -75 9 -30 25 -109 36 -174 11 -66 22 -122 25 -124 10 -11 4 99 -10 181 -15 86 -47 183 -67 202 -7 7 -8 4 -5 -10z" />
        <path d="M1242 4499 c7 -21 89 -80 106 -77 8 2 19 13 23 26 8 20 4 25 -28 39 -56 23 -107 29 -101 12z" />
        <path d="M1921 4492 c-50 -19 -57 -30 -38 -56 12 -16 17 -17 38 -6 38 20 89 60 89 71 0 14 -40 10 -89 -9z" />
        <path d="M1495 4425 c-59 -21 -95 -66 -95 -117 0 -38 1 -40 18 -26 18 17 65 33 124 42 39 7 48 20 48 71 0 47 -24 55 -95 30z" />
        <path d="M1672 4432 c-9 -6 -12 -25 -10 -53 3 -48 -1 -45 103 -69 27 -6 58 -19 69 -28 18 -17 19 -16 14 31 -6 50 -26 80 -68 102 -36 18 -92 27 -108 17z" />
        <path d="M1245 4410 c-7 -12 63 -90 81 -90 9 0 14 12 14 34 0 30 -4 36 -40 50 -47 19 -47 19 -55 6z" />
        <path d="M1950 4406 c-30 -11 -35 -18 -38 -49 -2 -26 1 -37 10 -37 20 0 78 62 78 83 0 20 -3 20 -50 3z" />
        <path d="M3832 4302 c-7 -42 -12 -91 -12 -109 0 -35 17 -53 31 -32 11 18 12 206 1 213 -5 3 -14 -30 -20 -72z" />
        <path d="M5142 4269 c2 -74 7 -114 15 -116 6 -2 14 5 18 17 8 25 -14 198 -27 206 -5 3 -7 -43 -6 -107z" />
        <path d="M1240 4308 c0 -7 17 -35 36 -62 39 -53 53 -50 46 9 -3 27 -11 39 -33 50 -34 18 -49 19 -49 3z" />
        <path d="M1959 4305 c-28 -15 -49 -79 -31 -97 11 -11 82 80 82 106 0 10 -24 6 -51 -9z" />
        <path d="M2130 4266 c0 -46 136 -186 181 -186 7 0 -7 18 -34 41 -26 22 -68 70 -93 105 -25 35 -48 64 -50 64 -2 0 -4 -11 -4 -24z" />
        <path d="M1055 4218 c-26 -35 -67 -79 -91 -98 -46 -37 -45 -51 3 -27 31 17 143 130 143 145 0 6 3 17 6 26 13 35 -16 13 -61 -46z" />
        <path d="M1485 4261 c-61 -28 -87 -61 -83 -106 l3 -38 85 2 c47 1 86 3 87 5 1 1 5 32 9 70 5 53 4 70 -7 77 -21 13 -50 10 -94 -10z" />
        <path d="M1671 4271 c-11 -7 -13 -24 -8 -76 4 -38 8 -69 9 -71 2 -1 41 -4 88 -5 l85 -4 3 39 c4 46 -22 79 -83 107 -44 20 -73 23 -94 10z" />
        <path d="M1230 4221 c0 -6 5 -32 11 -60 8 -38 18 -56 44 -75 19 -14 36 -26 39 -26 3 0 6 20 6 44 0 35 -4 46 -19 51 -11 3 -34 22 -50 41 -17 19 -31 30 -31 25z" />
        <path d="M1992 4200 c-13 -17 -34 -36 -48 -42 -20 -9 -24 -18 -24 -56 l0 -44 33 20 c23 15 37 35 50 73 24 69 19 90 -11 49z" />
        
        {/*Left Forearm | FrontView */}
        <path
          d="M827 4061 c-54 -58 -105 -155 -141 -271 -15 -47 -47 -129 -72 -184 -52 -113 -52 -141 0 -40 19 38 68 116 110 174 42 58 94 141 115 185 39 78 64 185 44 185 -6 0 -31 -22 -56 -49z"
          id="forearm-left-front"
          style={getStyle('forearm-left-front')}
          onClick={() => handlePartClick('forearm-left-front')}
          onMouseEnter={() => setHoveredPart('forearm-left-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Forearm | FrontView */}
        <path
          d="M2350 4106 c0 -2 5 -28 10 -57 14 -73 77 -196 157 -304 37 -49 86 -126 110 -170 55 -104 55 -81 -1 43 -24 53 -56 135 -71 182 -38 118 -87 212 -138 265 -37 38 -67 57 -67 41z"
          id="forearm-right-front"
          style={getStyle('forearm-right-front')}
          onClick={() => handlePartClick('forearm-right-front')}
          onMouseEnter={() => setHoveredPart('forearm-right-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore */}
        <path d="M1434 4056 c-30 -14 -44 -38 -44 -83 0 -37 26 -53 86 -53 31 0 64 -5 76 -11 11 -6 22 -8 25 -5 3 3 8 34 10 69 4 51 2 66 -11 80 -21 21 -97 22 -142 3z" />
        <path d="M1670 4051 c-5 -11 -10 -50 -10 -87 0 -64 1 -66 23 -59 12 4 52 11 90 15 76 8 74 7 77 35 7 66 1 86 -35 101 -52 21 -132 19 -145 -5z" />
        <path d="M3662 4038 c-19 -25 -186 -476 -198 -538 -6 -28 20 -61 35 -44 4 5 20 65 35 134 29 127 107 383 132 433 15 28 13 36 -4 15z" />
        <path d="M5335 4035 c4 -11 24 -71 45 -132 32 -92 92 -316 116 -430 5 -27 17 -29 38 -8 14 14 10 31 -38 168 -76 215 -131 360 -151 393 -9 16 -13 20 -10 9z" />
        <path d="M928 3992 c-58 -66 -103 -131 -94 -139 4 -4 40 11 81 32 l75 40 0 52 c0 28 -4 54 -9 57 -5 4 -29 -16 -53 -42z" />
        <path d="M2258 4028 c-3 -7 -4 -33 -4 -57 1 -33 6 -47 21 -55 11 -6 41 -23 66 -38 91 -55 92 -31 3 80 -66 83 -78 92 -86 70z" />
        
        {/*Left LowerBack | BackView */}
        <path
          d="M4410 3985 c-18 -28 -55 -78 -82 -113 l-49 -63 18 -29 c10 -15 47 -62 83 -104 l65 -77 7 53 c8 70 8 326 -1 358 -7 24 -8 23 -41 -25z"
          id="lowerback-left-back"
          style={getStyle('lowerback-left-back')}
          onClick={() => handlePartClick('lowerback-left-back')}
          onMouseEnter={() => setHoveredPart('lowerback-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right LowerBack | BackView */}
        <path
          d="M4530 3838 c0 -106 3 -203 6 -215 5 -20 12 -15 63 45 71 84 101 126 101 144 0 8 -11 25 -24 37 -13 12 -48 58 -77 101 -30 44 -57 79 -61 80 -5 0 -8 -87 -8 -192z"
          id="lowerback-right-back"
          style={getStyle('lowerback-right-back')}
          onClick={() => handlePartClick('lowerback-right-back')}
          onMouseEnter={() => setHoveredPart('lowerback-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore*/}
        <path d="M1290 4008 c-1 -7 -3 -95 -6 -194 l-6 -181 23 -17 c13 -9 36 -16 52 -16 27 0 29 2 24 33 -3 17 -9 99 -13 180 -6 138 -9 151 -31 178 -26 31 -43 37 -43 17z" />
        <path d="M1915 3994 c-26 -28 -30 -53 -41 -271 -6 -119 -5 -123 15 -123 11 0 32 5 46 12 l25 11 0 199 c0 131 -4 198 -10 198 -6 0 -22 -12 -35 -26z" />
        <path d="M3647 3881 c-63 -147 -97 -257 -97 -306 l0 -30 20 25 c37 48 89 156 110 230 18 68 39 220 29 220 -2 0 -30 -63 -62 -139z" />
        <path d="M5293 3955 c12 -126 48 -235 120 -352 17 -29 34 -53 38 -53 7 0 -4 78 -21 140 -12 44 -127 320 -137 330 -3 3 -3 -26 0 -65z" />
        <path d="M4180 3881 c0 -63 4 -111 9 -111 6 0 22 10 36 23 l26 22 -26 82 c-14 45 -30 85 -35 88 -6 4 -10 -36 -10 -104z" />
        <path d="M4777 3938 c-16 -32 -29 -76 -30 -98 -2 -35 2 -43 25 -57 15 -10 30 -15 33 -11 3 3 4 54 3 114 l-3 109 -28 -57z" />
        <path d="M3880 3970 c-8 -4 -30 -10 -48 -13 -48 -8 -70 -41 -136 -198 -19 -46 -46 -110 -60 -142 -31 -70 -17 -66 47 13 83 102 228 333 216 345 -2 2 -11 0 -19 -5z" />
        <path d="M5100 3971 c0 -14 124 -216 178 -288 28 -37 65 -81 82 -98 l32 -30 -17 40 c-9 22 -32 78 -51 125 -19 47 -51 116 -72 154 -35 65 -40 69 -92 87 -66 22 -60 21 -60 10z" />
        <path d="M1410 3840 c0 -63 56 -315 84 -375 17 -37 31 -55 43 -55 44 1 45 8 42 208 -4 173 -6 192 -24 212 -29 32 -69 50 -110 50 -34 0 -35 -1 -35 -40z" />
        <path d="M1728 3858 c-20 -12 -42 -33 -48 -47 -6 -17 -9 -96 -8 -211 l3 -185 24 0 c32 0 57 36 80 116 28 98 65 313 58 332 -9 24 -64 21 -109 -5z" />
        
        <path d="M844 3820 c-48 -31 -182 -206 -229 -300 -21 -42 -18 -39 96 95 93 108 173 214 167 220 -2 2 -17 -5 -34 -15z" 
          id="foreram-2"
          style={getStyle('forearm-2')}
          onClick={() => handlePartClick('forearm-2')}
          onMouseEnter={() => setHoveredPart('forearm-2')}
          onMouseLeave={() => setHoveredPart(null)}        
        />
        <path d="M870 3751 c-36 -47 -108 -129 -160 -181 -88 -88 -91 -91 -32 -46 89 70 202 192 235 254 16 29 27 55 25 57 -1 1 -32 -36 -68 -84z" />
        <path d="M2325 3793 c41 -77 110 -159 195 -231 108 -91 128 -97 36 -11 -44 41 -115 119 -159 174 -100 126 -106 132 -72 68z" />
        <path d="M2370 3831 c0 -20 251 -331 268 -331 7 0 -48 91 -97 160 -72 103 -171 202 -171 171z"
          id="foreram-2.1"
          style={getStyle('forearm-2.1')}
          onClick={() => handlePartClick('forearm-2.1')}
          onMouseEnter={() => setHoveredPart('forearm-2.1')}
          onMouseLeave={() => setHoveredPart(null)}  
        />
        <path d="M4189 3700 c-9 -5 -26 -31 -37 -58 -24 -55 -47 -180 -28 -148 29 47 51 67 108 96 34 17 79 33 100 36 21 4 38 10 38 14 0 9 -41 45 -67 59 -26 13 -92 14 -114 1z" />
        <path d="M4673 3694 c-43 -22 -71 -52 -52 -58 153 -48 193 -71 231 -130 l20 -31 -6 45 c-11 72 -24 114 -49 151 -19 29 -29 34 -67 37 -26 1 -58 -5 -77 -14z" />
        
        {/*Left Glute | BackView */}
        <path
          d="M4320 3559 c-68 -13 -167 -66 -195 -104 -14 -18 -30 -48 -35 -66 -15 -52 19 -319 41 -319 5 0 9 6 9 13 0 24 43 54 150 104 108 51 173 105 185 155 3 13 5 68 3 123 l-3 100 -55 2 c-30 1 -75 -3 -100 -8z"
          id="glute-left-back"
          style={getStyle('glute-left-back')}
          onClick={() => handlePartClick('glute-left-back')}
          onMouseEnter={() => setHoveredPart('glute-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Glute | BackView */}
        <path
          d="M4510 3454 c0 -109 2 -122 24 -155 31 -45 82 -80 176 -120 97 -41 120 -57 135 -93 12 -29 13 -29 29 44 10 41 20 117 23 169 5 89 4 98 -18 130 -57 81 -157 129 -291 138 l-78 6 0 -119z"
          id="glute-right-back"
          style={getStyle('glute-right-back')}
          onClick={() => handlePartClick('glute-right-back')}
          onMouseEnter={() => setHoveredPart('glute-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore*/}
        <path d="M1281 3535 c-2 -68 50 -240 169 -560 28 -77 60 -171 70 -210 l19 -70 0 85 c1 95 -20 251 -45 338 -23 79 -63 164 -129 277 -31 53 -63 113 -70 133 l-14 37 0 -30z" />
        <path d="M1801 3456 c-57 -51 -107 -99 -111 -107 -8 -13 30 -119 52 -146 15 -19 28 -6 28 26 0 43 23 100 85 212 31 56 55 103 53 105 -2 2 -50 -39 -107 -90z" />
        <path d="M1947 3526 c-4 -16 -37 -79 -73 -141 -80 -138 -117 -231 -143 -360 -23 -115 -38 -354 -19 -295 34 106 93 273 143 409 68 187 107 329 103 379 -3 37 -3 37 -11 8z" />
        
        {/*Right Quads | FrontView */}
        <path
          d="M1976 3429 c-21 -68 -62 -196 -91 -284 -70 -210 -79 -277 -72 -534 6 -221 14 -274 39 -279 13 -3 16 15 20 130 5 123 8 140 40 224 95 240 133 445 125 664 -3 80 -9 158 -14 174 -8 26 -13 17 -47 -95z"
          id="quad-right-front"
          style={getStyle('quad-right-front')}
          onClick={() => handlePartClick('quad-right-front')}
          onMouseEnter={() => setHoveredPart('quad-right-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Left Quads | FrontView */}
        <path
          d="M1210 3438 c-25 -199 11 -440 102 -690 50 -139 52 -147 57 -277 6 -134 16 -167 40 -123 17 32 34 280 28 413 -7 148 -27 252 -67 352 -15 40 -52 152 -81 250 -29 97 -56 177 -60 177 -4 0 -12 -46 -19 -102z"
          id="quad-left-front"
          style={getStyle('quad-left-front')}
          onClick={() => handlePartClick('quad-left-front')}
          onMouseEnter={() => setHoveredPart('quad-left-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore*/}
        <path d="M1340 3537 c0 -2 27 -54 61 -116 39 -73 64 -133 71 -171 7 -33 15 -60 18 -60 8 0 56 97 65 131 6 23 -5 36 -86 113 -82 77 -129 115 -129 103z" />
        <path d="M3353 3392 c-21 -26 -46 -64 -57 -83 l-19 -35 50 -52 c73 -76 91 -70 128 37 21 60 20 167 -1 175 -40 15 -64 6 -101 -42z" />
        <path d="M5541 3431 c-24 -15 -18 -125 10 -196 33 -82 55 -85 119 -13 47 52 48 53 33 83 -9 17 -33 54 -55 83 -41 53 -72 65 -107 43z" />
        <path d="M478 3383 c-20 -27 -44 -65 -54 -85 l-17 -37 38 -43 c60 -67 72 -73 96 -52 26 24 59 134 59 199 0 46 -3 53 -22 59 -48 12 -64 6 -100 -41z" />
        <path d="M2661 3421 c-19 -12 -10 -151 14 -209 29 -71 46 -72 110 -7 l55 55 -16 33 c-9 17 -34 56 -55 85 -40 53 -72 66 -108 43z" />
        <path d="M2774 3415 c-5 -11 5 -27 31 -48 80 -67 118 -88 155 -85 59 5 46 17 -133 121 -41 24 -48 26 -53 12z" />
        <path d="M348 3362 c-101 -59 -120 -82 -69 -82 45 0 72 14 139 70 109 90 72 96 -70 12z" />
        <path d="M3222 3360 c-56 -33 -102 -65 -102 -71 0 -19 31 -21 74 -5 42 16 156 109 156 127 0 19 -29 7 -128 -51z" />
        <path d="M5650 3411 c0 -25 109 -113 161 -130 35 -11 69 -7 69 8 0 10 -202 131 -218 131 -7 0 -12 -4 -12 -9z" />
        <path d="M1551 3234 c-42 -90 -44 -98 -31 -127 7 -18 16 -59 19 -92 5 -52 8 -57 18 -40 6 11 16 47 22 80 12 62 27 275 20 275 -2 0 -24 -43 -48 -96z" />
        <path d="M1644 3243 c9 -107 26 -222 37 -251 13 -34 29 -17 29 32 0 24 6 59 14 78 14 33 13 38 -27 126 -23 50 -46 91 -51 92 -4 0 -5 -35 -2 -77z" />
        <path d="M3224 3176 c-37 -80 -47 -123 -29 -127 11 -3 55 82 76 143 9 29 10 41 1 50 -9 9 -20 -7 -48 -66z" />
        <path d="M5726 3243 c-13 -13 -5 -46 30 -123 59 -128 79 -88 23 46 -31 74 -41 89 -53 77z" />
        <path d="M346 3154 c-37 -89 -45 -129 -23 -122 16 6 89 177 83 195 -11 28 -25 10 -60 -73z" />
        <path d="M2844 3225 c-12 -30 66 -203 85 -190 12 7 -2 58 -39 140 -31 68 -37 75 -46 50z" />
        <path d="M4385 3194 c-76 -51 -78 -62 -40 -268 14 -75 30 -182 37 -238 l12 -103 7 62 c4 34 20 110 34 170 18 71 27 137 27 193 1 113 -11 210 -26 210 -6 0 -29 -12 -51 -26z" />
        <path d="M4543 3163 c-15 -106 -7 -231 21 -348 15 -60 30 -137 33 -170 7 -59 7 -58 24 75 9 74 26 184 38 243 33 169 30 181 -59 240 -40 27 -48 21 -57 -40z" />
        <path d="M3292 3193 c-23 -42 -72 -175 -72 -193 0 -38 21 -20 50 43 41 91 56 145 43 158 -8 8 -14 6 -21 -8z" />
        <path d="M5684 3195 c-12 -30 67 -232 86 -220 16 10 12 33 -26 129 -41 103 -50 117 -60 91z" />
        <path d="M381 3095 c-24 -61 -40 -114 -36 -123 5 -15 8 -14 23 6 9 12 32 61 51 108 29 75 32 88 19 100 -13 13 -20 2 -57 -91z" />
        <path d="M2803 3183 c-11 -28 70 -229 88 -218 19 12 7 54 -55 198 -18 41 -24 45 -33 20z" />
        <path d="M4060 3026 c0 -85 3 -162 7 -171 4 -11 14 12 30 66 l24 83 -22 88 c-11 49 -25 88 -30 88 -5 0 -9 -69 -9 -154z" />
        <path d="M4911 3144 c-36 -136 -35 -130 -10 -221 21 -74 25 -82 30 -57 4 16 7 88 8 159 1 140 -10 187 -28 119z" />
        <path d="M3302 3088 c-36 -94 -37 -98 -18 -98 15 0 66 108 69 147 4 53 -19 31 -51 -49z" />
        <path d="M5645 3161 c-9 -15 19 -107 45 -150 16 -24 24 -31 32 -23 8 8 2 33 -21 89 -36 86 -45 100 -56 84z" />
        <path d="M427 3073 c-23 -58 -32 -91 -26 -98 12 -12 24 6 56 84 24 56 30 101 14 101 -5 0 -25 -39 -44 -87z" />
        <path d="M1185 3087 c-4 -42 -5 -148 -2 -235 6 -194 17 -237 128 -522 18 -43 29 -2 29 106 0 88 -6 127 -51 305 -28 112 -61 254 -74 314 l-23 110 -7 -78z" />
        <path d="M2042 3105 c-7 -33 -40 -172 -74 -308 -54 -220 -61 -260 -62 -357 -2 -155 9 -158 65 -15 84 220 108 368 93 595 l-9 145 -13 -60z" />
        <path d="M2765 3151 c-14 -23 52 -181 76 -181 16 0 10 25 -22 101 -35 82 -44 96 -54 80z" />
        <path d="M3393 3138 c-11 -12 -43 -92 -43 -104 0 -2 5 -4 11 -4 13 0 51 86 47 107 -3 14 -4 14 -15 1z" />
        <path d="M5595 3103 c14 -45 39 -82 50 -72 5 6 -23 87 -38 107 -20 26 -25 10 -12 -35z" />
        <path d="M500 3094 c-21 -49 -25 -74 -12 -74 9 0 35 55 47 98 12 41 -15 23 -35 -24z" />
        <path d="M2714 3104 c8 -43 31 -84 47 -84 6 0 8 9 3 23 -26 85 -62 130 -50 61z" />
        
        {/*Left Hamstring | BackView */}
        <path
          d="M4266 3068 c-45 -155 -58 -229 -63 -363 -7 -165 5 -222 70 -358 l42 -89 2 89 c8 399 6 563 -10 662 -9 57 -19 106 -21 108 -2 3 -11 -19 -20 -49z"
          id="hamstring-left-back"
          style={getStyle('hamstring-left-back')}
          onClick={() => handlePartClick('hamstring-left-back')}
          onMouseEnter={() => setHoveredPart('hamstring-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Hamstring | BackView */}
        <path
          d="M4707 3099 c-20 -83 -31 -219 -31 -389 -1 -182 6 -440 11 -440 6 0 63 121 84 180 21 58 23 83 23 220 1 141 -2 166 -31 280 -17 69 -36 136 -41 149 l-9 25 -6 -25z"
          id="hamstring-right-back"
          style={getStyle('hamstring-right-back')}
          onClick={() => handlePartClick('hamstring-right-back')}
          onMouseEnter={() => setHoveredPart('hamstring-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        <path d="M4765 3069 c59 -185 81 -402 55 -552 -11 -65 -10 -81 4 -123 8 -27 20 -74 25 -104 l9 -55 1 58 c0 32 10 119 22 194 24 157 23 369 -3 461 -15 52 -60 111 -102 134 -17 9 -18 8 -11 -13z" />
        
        {/*Ignore*/}
        <path d="M4172 3036 c-23 -25 -44 -55 -47 -68 -22 -98 -26 -137 -26 -243 0 -69 9 -177 20 -255 12 -74 22 -155 22 -180 2 -33 3 -37 6 -15 2 17 13 62 25 102 18 61 19 79 9 117 -14 57 -14 261 0 362 9 68 32 153 54 207 14 33 -22 18 -63 -27z" />
        <path d="M1461 2715 c1 -77 -3 -187 -10 -245 -12 -112 -6 -163 22 -168 10 -2 23 10 34 30 26 49 24 268 -5 402 -32 151 -44 146 -41 -19z" />
        <path d="M1763 2815 c-29 -95 -45 -231 -41 -345 5 -122 19 -170 49 -170 26 0 33 38 24 139 -4 47 -10 160 -14 251 -6 150 -7 161 -18 125z" />
        <path d="M4347 2635 c-10 -181 -9 -415 2 -415 4 0 14 21 21 46 10 34 11 93 6 232 -9 256 -20 308 -29 137z" />
        <path d="M4638 2720 c-14 -67 -29 -324 -23 -374 23 -177 45 -163 44 27 -2 223 -12 390 -21 347z" />
        <path d="M4172 2238 c-39 -245 -54 -373 -49 -413 5 -53 83 -218 99 -213 6 2 19 15 29 29 15 22 16 32 3 119 -8 52 -17 205 -20 339 -4 230 -10 271 -34 271 -4 0 -17 -60 -28 -132z" />
        <path d="M4782 2361 c-9 -5 -13 -69 -17 -247 -2 -131 -10 -288 -18 -348 -15 -107 -15 -110 6 -138 20 -27 22 -28 35 -11 23 30 58 105 77 162 17 51 17 60 1 185 -26 199 -57 390 -64 398 -4 4 -13 4 -20 -1z" />
        
        {/*Left Calf | BackView */}
        <path
          d="M4257 2308 c-15 -58 28 -613 50 -648 27 -43 66 -80 85 -80 27 0 31 35 25 213 -4 159 -5 164 -47 282 -23 66 -56 151 -74 190 -30 65 -33 68 -39 43z"
          id="calf-left-back"
          style={getStyle('calf-left-back')}
          onClick={() => handlePartClick('calf-left-back')}
          onMouseEnter={() => setHoveredPart('calf-left-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Right Calf | BackView */}
        <path
          d="M4699 2255 c-77 -168 -110 -286 -119 -423 -11 -158 -3 -245 23 -250 21 -4 59 28 87 73 14 24 21 74 35 250 9 121 15 267 13 325 l-3 105 -36 -80z"
          id="calf-right-back"
          style={getStyle('calf-right-back')}
          onClick={() => handlePartClick('calf-right-back')}
          onMouseEnter={() => setHoveredPart('calf-right-back')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore */}
        <path d="M1746 2209 c-8 -70 7 -146 53 -269 l20 -55 1 56 c0 30 -10 91 -21 135 -12 43 -27 106 -34 139 l-12 60 -7 -66z" />
        <path d="M1488 2254 c-5 -4 -8 -19 -8 -34 0 -15 -11 -64 -25 -110 -14 -47 -28 -116 -30 -155 l-5 -70 36 90 c29 70 38 108 42 170 5 87 1 121 -10 109z" />
        
        {/*Right AnteriorTibialis | FrontView */}
        <path
          d="M1931 1978 c-51 -155 -79 -293 -101 -498 -12 -107 -30 -229 -41 -272 -10 -42 -19 -86 -19 -97 0 -35 19 -23 26 17 32 182 91 453 124 572 34 117 43 167 47 258 3 61 3 112 0 112 -3 0 -19 -42 -36 -92z"
          id="anterior-right-tibialis-front"
          style={getStyle('anterior-right-tibialis-front')}
          onClick={() => handlePartClick('anterior-right-tibialis-front')}
          onMouseEnter={() => setHoveredPart('anterior-right-tibialis-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        {/*Left AnteriorTibialis | FrontView */}
        <path
          d="M1275 2037 c-12 -44 11 -192 50 -327 19 -69 58 -235 85 -369 27 -134 51 -246 54 -249 19 -18 17 22 -6 121 -15 62 -30 148 -33 192 -18 224 -73 496 -128 626 l-14 34 -8 -28z"
          id="anterior-left-tibialis-front"
          style={getStyle('anterior-left-tibialis-front')}
          onClick={() => handlePartClick('anterior-left-tibialis-front')}
          onMouseEnter={() => setHoveredPart('anterior-left-tibialis-front')}
          onMouseLeave={() => setHoveredPart(null)}
        />
        
        {/*Ignore*/}
        <path d="M1492 1936 c-54 -119 -64 -462 -20 -716 l11 -65 28 145 c43 216 61 350 54 395 -8 46 -55 258 -59 262 -2 2 -8 -8 -14 -21z" />
        <path d="M1738 1955 c-22 -37 -53 -220 -52 -310 0 -88 50 -411 71 -465 24 -60 54 445 35 585 -13 91 -45 205 -54 190z" />
        <path d="M1257 1798 c4 -88 15 -141 74 -361 70 -262 97 -342 98 -300 1 12 -4 34 -10 50 -6 15 -26 116 -44 223 -28 160 -104 472 -118 487 -2 2 -2 -43 0 -99z" />
        <path d="M1942 1740 c-24 -89 -56 -236 -72 -329 -15 -93 -36 -196 -46 -230 -9 -34 -14 -64 -11 -67 7 -8 48 122 112 357 45 168 56 227 62 318 3 61 4 111 2 111 -2 0 -23 -72 -47 -160z" />
        <path d="M4196 1564 c-13 -34 -5 -96 24 -177 46 -130 70 -242 76 -352 6 -119 11 -145 25 -145 34 0 -53 629 -93 677 -14 17 -25 16 -32 -3z" />
        <path d="M4761 1567 c-39 -47 -125 -677 -93 -677 15 0 20 25 26 135 6 114 28 223 72 349 19 55 34 118 34 141 0 48 -20 74 -39 52z" />
        <path d="M4396 1543 c-8 -32 -22 -279 -30 -498 l-5 -150 10 135 c5 74 18 205 29 291 22 168 25 249 11 249 -5 0 -12 -12 -15 -27z" />
        <path d="M4573 1483 c3 -49 13 -141 22 -206 9 -64 20 -177 25 -250 l9 -132 -5 150 c-7 213 -22 465 -30 498 -3 15 -11 27 -17 27 -6 0 -8 -31 -4 -87z" />
        <path d="M1430 1065 c0 -8 16 -43 35 -77 l35 -63 0 56 c0 45 -4 60 -23 77 -27 25 -47 28 -47 7z" />
        <path d="M1766 1055 c-22 -21 -26 -32 -26 -82 l0 -58 30 54 c16 29 35 60 41 67 12 15 6 44 -9 44 -5 0 -21 -11 -36 -25z" />
        <path d="M1407 983 c-4 -3 -7 -23 -7 -43 0 -20 -5 -52 -11 -70 -12 -32 -11 -34 34 -74 25 -23 53 -53 62 -68 26 -42 35 -34 35 32 0 106 -78 259 -113 223z" />
        <path d="M1797 972 c-20 -22 -63 -117 -70 -157 -3 -16 -3 -49 1 -71 l7 -42 63 68 62 68 -11 76 c-12 79 -22 91 -52 58z" />
        <path d="M4250 783 c-30 -80 -45 -141 -37 -149 11 -11 102 -17 141 -10 35 7 36 9 36 50 0 23 -5 69 -12 101 l-12 59 -13 -59 c-16 -72 -32 -115 -44 -115 -5 0 -16 11 -25 25 -13 20 -16 40 -11 90 2 36 3 65 2 65 -2 0 -13 -26 -25 -57z" />
        <path d="M4726 779 c3 -43 1 -72 -8 -88 -29 -54 -48 -33 -72 84 l-13 60 -11 -53 c-7 -29 -12 -75 -12 -101 0 -54 9 -61 81 -61 61 0 99 11 99 29 0 17 -56 180 -65 189 -2 3 -2 -24 1 -59z" />
        <path d="M1318 725 c-27 -35 -48 -68 -48 -73 0 -11 57 -22 112 -22 32 0 37 4 47 31 19 55 14 86 -18 108 -16 12 -33 21 -38 21 -4 0 -29 -29 -55 -65z" />
        <path d="M1836 769 c-20 -16 -26 -29 -26 -60 0 -61 14 -79 59 -79 57 0 101 11 101 25 0 16 -87 135 -99 135 -4 0 -20 -9 -35 -21z" />
        <path d="M1457 724 c-4 -4 -7 -27 -7 -51 0 -39 2 -43 25 -43 21 0 25 5 25 29 0 31 -30 77 -43 65z" />
        <path d="M1753 696 c-19 -40 -12 -66 17 -66 26 0 34 20 26 65 -9 44 -22 44 -43 1z" />
      </g>
    </svg>
  );
}

export default AnatomyDiagram;