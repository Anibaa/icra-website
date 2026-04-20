// Country name to ISO code mapping
export const countryNameToCode: Record<string, string> = {
  // Visa-free countries
  'Algeria': 'DZ',
  'Andorra': 'AD',
  'Angola': 'AO',
  'Antigua and Barbuda': 'AG',
  'Argentina': 'AR',
  'Australia': 'AU',
  'Bahrain': 'BH',
  'Barbados': 'BB',
  'Benin': 'BJ',
  'Bosnia and Herzegovina': 'BA',
  'Brazil': 'BR',
  'Brunei': 'BN',
  'Burkina Faso': 'BF',
  'Canada': 'CA',
  'Cape Verde': 'CV',
  'Chile': 'CL',
  'Comoros': 'KM',
  'Costa Rica': 'CR',
  'Cote d\'Ivoire': 'CI',
  'Equatorial Guinea': 'GQ',
  'Fiji': 'FJ',
  'Gabon': 'GA',
  'Gambia': 'GM',
  'Guinea': 'GN',
  'Guinea Bissau': 'GW',
  'Hong Kong': 'HK',
  'Honduras': 'HN',
  'Iceland': 'IS',
  'Japan': 'JP',
  'Jordan': 'JO',
  'Kiribati': 'KI',
  'South Korea': 'KR',
  'Kuwait': 'KW',
  'Libya': 'LY',
  'Liechtenstein': 'LI',
  'Malaysia': 'MY',
  'Maldives': 'MV',
  'Mali': 'ML',
  'Mauritania': 'MR',
  'Mauritius': 'MU',
  'Mexico': 'MX',
  'Moldova': 'MD',
  'Monaco': 'MC',
  'Montenegro': 'ME',
  'Morocco': 'MA',
  'Namibia': 'NA',
  'New Zealand': 'NZ',
  'Niger': 'NE',
  'North Macedonia': 'MK',
  'Norway': 'NO',
  'Oman': 'OM',
  'Qatar': 'QA',
  'Russia': 'RU',
  'Saint Kitts and Nevis': 'KN',
  'Saint Lucia': 'LC',
  'San Marino': 'SM',
  'Saudi Arabia': 'SA',
  'Senegal': 'SN',
  'Serbia': 'RS',
  'Seychelles': 'SC',
  'Singapore': 'SG',
  'South Africa': 'ZA',
  'Switzerland': 'CH',
  'Turkey': 'TR',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  'United States': 'US',
  'Vatican City': 'VA',
  
  // EU countries
  'Austria': 'AT',
  'Belgium': 'BE',
  'Bulgaria': 'BG',
  'Croatia': 'HR',
  'Cyprus': 'CY',
  'Czech Republic': 'CZ',
  'Denmark': 'DK',
  'Estonia': 'EE',
  'Finland': 'FI',
  'France': 'FR',
  'Germany': 'DE',
  'Greece': 'GR',
  'Hungary': 'HU',
  'Ireland': 'IE',
  'Italy': 'IT',
  'Latvia': 'LV',
  'Lithuania': 'LT',
  'Luxembourg': 'LU',
  'Malta': 'MT',
  'Netherlands': 'NL',
  'Poland': 'PL',
  'Portugal': 'PT',
  'Romania': 'RO',
  'Slovakia': 'SK',
  'Slovenia': 'SI',
  'Spain': 'ES',
  'Sweden': 'SE',
  
  // Visa on arrival
  'Thailand': 'TH',
  'Indonesia': 'ID',
  
  // Special durations
  'Tunisia': 'TN',
}

// Get country code from name
export function getCountryCode(countryName: string): string | null {
  // Handle special cases
  if (countryName.includes('European Union')) {
    return 'EU'
  }
  
  // Direct match
  if (countryNameToCode[countryName]) {
    return countryNameToCode[countryName]
  }
  
  // Try to find partial match
  const normalizedName = countryName.toLowerCase()
  for (const [name, code] of Object.entries(countryNameToCode)) {
    if (name.toLowerCase().includes(normalizedName) || normalizedName.includes(name.toLowerCase())) {
      return code
    }
  }
  
  return null
}

// Get flag emoji from country code
export function getFlagEmoji(countryCode: string): string {
  if (countryCode === 'EU') return '🇪🇺'
  
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  
  return String.fromCodePoint(...codePoints)
}

// Get flag URL from country code (for img src)
export function getFlagUrl(countryCode: string): string {
  return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`
}

// Get high-res flag URL
export function getFlagUrlHD(countryCode: string): string {
  return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`
}
