# Country Flags

This directory contains country flag images used in the visa requirements page.

## Source

Flags are loaded from [flagcdn.com](https://flagcdn.com/) CDN service, which provides:
- High-quality flag images
- Multiple resolutions (w20, w40, w80, w160, etc.)
- Always up-to-date
- Free to use

## Usage

The application uses the CDN directly via the `getFlagUrl()` function in `lib/country-codes.ts`:

```typescript
import { getFlagUrl, getCountryCode } from '@/lib/country-codes'

const countryCode = getCountryCode('United States') // Returns 'US'
const flagUrl = getFlagUrl(countryCode) // Returns 'https://flagcdn.com/w40/us.png'
```

## Local Backup (Optional)

If you want to download flags locally as a backup:

```bash
node scripts/download-flags.js
```

This will download all country flags to this directory.

## Flag Sizes Available

- `w20` - 20px width
- `w40` - 40px width (default)
- `w80` - 80px width (HD)
- `w160` - 160px width
- `w320` - 320px width

## License

Flags are provided by flagcdn.com and are free to use.
