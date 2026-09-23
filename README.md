# Cache3D project page

Static GitHub Pages site containing selected Cache3D image-to-3D results.

## Local preview

```bash
python build_case_assets.py
python -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages

Push this directory to the root of a GitHub repository, then enable
**Settings -> Pages -> Deploy from a branch -> `main` / `(root)`**.

Before publication, replace the disabled Paper and Code links in `index.html`.
