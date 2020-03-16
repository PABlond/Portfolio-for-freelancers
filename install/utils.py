import pandas
import json
import requests
import scipy
from skimage import io, transform


def export_xls_as_list(img_folder: str, filename: str, filename_output: str):
    df = pandas.read_excel(filename)
    results = []
    for index, row in df.iloc[::-1].iterrows():
        obj = {}
        for key in list(df.columns):
            if key == 'url':
                r = requests.get(row[key], stream=True)
                if r.status_code == 200:
                    ext = ".{}".format(row[key].split('.')[-1])
                    img_filepath = img_folder + row["title"] + ext
                    with open(img_filepath, 'wb') as f:
                        for chunk in r.iter_content(1024):
                            f.write(chunk)
                    img = io.imread(img_filepath)
                    height = round(225 * img.shape[1] / img.shape[0])
                    img_resized = transform.resize(img, (225, height))
                    io.imsave(img_filepath, img_resized)
                    obj[key] = img_filepath
            
            if key == "tasks":
                tasks = list(filter(None, row[key].split('\n')))
                obj[key] = tasks
            else:
                data = row[key]
                obj[key] = row[key]
        results.append(obj)

    with open(filename_output, "w+", encoding='utf-8') as f:
        json.dump(results, f, indent=4, sort_keys=True)
    print(results)