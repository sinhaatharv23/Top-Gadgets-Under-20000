from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

# Load gadgets from the JSON file
with open("gadgets.json", encoding="utf-8") as f:
    all_gadgets = json.load(f)

@app.route("/")
def index():
    return render_template("index.html", gadgets=all_gadgets)

@app.route("/gadgets")
def get_gadgets():
    keyword = request.args.get("keyword", "").lower()
    if keyword:
        filtered = [
            g for g in all_gadgets
            if keyword in g["title"].lower() or keyword in g["description"].lower()
        ]
    else:
        filtered = all_gadgets
    return jsonify(filtered)

if __name__ == "__main__":
    app.run(debug=True)
