import pandas
import json
import requests
from skimage import io, transform

def handle_url(url, title, img_folder):
    r = requests.get(url, stream=True)
    if r.status_code == 200:
        ext = ".{}".format(url.split('.')[-1])
        img_filepath = img_folder + title + ext
        with open(img_filepath, 'wb') as f:
            for chunk in r.iter_content(1024):
                f.write(chunk)
        img = io.imread(img_filepath)
        if "certifications" in img_folder:
            img_resized = transform.resize(img, (470, 800))        
        else:
            height = round(225 * img.shape[1] / img.shape[0])
            img_resized = transform.resize(img, (225, height))
        io.imsave(img_filepath, img_resized)
        return img_filepath


def handle_tasks(values):
    return list(filter(None, values.split('\n')))


def export_xls_as_list(img_folder: str, filename: str, filename_output: str):
    df = pandas.read_excel(filename)
    results = []
    for index, row in df.iloc[::-1].iterrows():
        obj = {}
        for key in list(df.columns):
            if key == 'url':
                handle_url(url=row[key], title=row['title'],
                           img_folder=img_folder)
            if key == "tasks":
                obj[key] = handle_tasks(values=row[key])
            else:
                data = row[key]
                obj[key] = row[key]
        results.append(obj)

    with open(filename_output, "w+", encoding='utf-8') as f:
        json.dump(results, f, indent=4, sort_keys=True)
