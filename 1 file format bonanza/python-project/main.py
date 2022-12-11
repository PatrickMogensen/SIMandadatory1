import yaml
import io
import xml.etree.ElementTree as ET

#txt
with open('file.txt') as f:
    lines = f.readlines()
    print("txt")
    print(lines)

#Yaml
with open("file.yaml", "r") as stream:
    try:
        print("yaml")
        print(yaml.safe_load(stream))
    except yaml.YAMLError as exc:
        print(exc)

#xml
tree = ET.parse('file.xml')
root = tree.getroot()
print("xml")
for child in root:
    print(child.tag, child.text)