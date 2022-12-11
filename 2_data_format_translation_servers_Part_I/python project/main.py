from fastapi import FastAPI
import yaml
import io
import json
import xmltodict
import xml.etree.ElementTree as ET

app = FastAPI()


@app.get("/xml")
def parse_xml():
 with open("file.xml") as xml_file:
    data_dict = xmltodict.parse(xml_file.read())
    return data_dict

@app.get("/yaml")
def parse_xml():
    with open("file.yaml", "r") as stream:
        try:
            print("yaml")
            return yaml.safe_load(stream)
        except yaml.YAMLError as exc:
            print(exc)

@app.get("/txt")
def parse_txt():
    with open('file.txt') as f:
        lines = f.read().splitlines()
        print(lines)
        jsonStr = json.dumps(lines)
        dict_data = json.loads(jsonStr)
        print(jsonStr)
        return dict_data
