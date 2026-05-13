# Asset Migration Checklist

The React site expects legacy visual assets under `frontend/public/assets`.

## Expected folders

- `frontend/public/assets/images/slider`
- `frontend/public/assets/images/logo`
- `frontend/public/assets/images/partners`

## Suggested files to copy

- Slider: `e1.jpg`, `e5.jpg`, `e7.jpg`, `e8.jpg`, `e10.jpg`, `e11.jpg`
- Logo/map: `logo1.png`, `map.jpg`
- Partners: `tanesco.png`, `tma.png`, `tba.png`, `ppra.png`, `nmb.jpg`, `tra.jpg`

If any file is missing, the app automatically falls back to:

- `frontend/public/assets/placeholders/image-placeholder.svg`
