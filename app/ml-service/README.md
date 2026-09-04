# ML risk service

Small FastAPI service that predicts maternal risk from vital signs. The Express
API uses it when available and falls back to its built-in rule engine if it is
offline.

## Run from the repository root

```bash
python -m venv ml-service/.venv
node ml-service/run.js -m pip install -r requirements.txt
npm run ml:train       # only needed to retrain the model
npm run ml:serve       # starts on http://localhost:8000
npm run ml:test
```

Endpoints: `GET /health`, `GET /model`, `POST /predict`, and `GET /docs`.

## File guide

| File/folder | Needed for | Purpose |
|---|---|---|
| `app.py` | Serving | FastAPI application and input validation |
| `model.joblib` | Serving | Trained model loaded by `app.py` |
| `metrics.json` | Serving | Model information shown by `/model` |
| `requirements.txt` | Setup | Python dependencies |
| `run.js` | npm commands | Runs Python from `.venv` on Windows/Linux |
| `train/train.py` | Retraining | Trains and rewrites the model and metrics |
| `data/maternal-health-risk.csv` | Retraining | Training dataset |
| `train/test_service.py` | Testing only | API and conversion tests |
| `.gitignore` | Git only | Keeps virtualenv/cache files untracked |
| `.venv/` | Local setup | Generated Python environment; safe to recreate |

Not every file is needed at runtime. For normal serving, keep `app.py`,
`model.joblib`, `metrics.json`, and the installed dependencies. Keep the
training and test files if you want to reproduce or verify the model.
