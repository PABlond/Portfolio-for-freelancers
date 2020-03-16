import pandas
import utils
import pathlib

filename_config = "install/config.xls"
df = pandas.read_excel(filename_config)
pwd = pathlib.Path(__file__).resolve().parents[1]

# Get data for gatsby-config.js
with open('install/gatsby-config.template', "r") as f:
    gatsby_config = f.read()


# Get data for src/data/content.js
with open('install/content.template', "r") as f:
    content = f.read()


# Apply changes to files
for index, row in df.iterrows():
    value = row['Value']
    gatsby_config = gatsby_config.replace(row['Key'], value)

    if row['Key'] == '<BIOGRAPHY>':
        value = list(filter(None, row['Value'].split('\n')))
    content = content.replace(row['Key'], str(value))


# Write gatsby-config.js file
with open("gatsby-config.s.js", "w+") as f:
    f.write(gatsby_config)

# Write content.ts file
with open("src/data/content.ts", "w+") as f:
    f.write(content)


# Geneate Open Source data
filename = "install/open-source.xls"
utils.export_xls_as_list(img_folder="{}/images/open_source/".format(pwd),
                         filename=filename,
                         filename_output="{}/src/data/{}.json".format(
                             pwd, filename.split('.xls')[0].split('/')[-1]))

# Geneate Experience data
filename = "install/experiences.xls"
utils.export_xls_as_list(img_folder="{}/images/experiences/".format(pwd),
                         filename=filename,
                         filename_output="{}/src/data/{}.json".format(
                             pwd, filename.split('.xls')[0].split('/')[-1]))
