import pandas
import utils
import pathlib
import config

var = config.Variable()


df = pandas.read_excel(var.config)
pwd = pathlib.Path(__file__).resolve().parents[1]

# Get data for gatsby-config.js
with open(var.gatsby_config_template, "r") as f:
    gatsby_config = f.read()


# Get data for src/data/content.js
with open(var.content_template, "r") as f:
    content = f.read()


# Apply changes to files
for index, row in df.iterrows():
    value = row['Value']
    gatsby_config = gatsby_config.replace(row['Key'], value)

    if row['Key'] == '<BIOGRAPHY>':
        value = list(filter(None, row['Value'].split('\n')))
    content = content.replace(row['Key'], str(value))


# Write gatsby-config.js file
with open(var.gatsby_config, "w+") as f:
    f.write(gatsby_config)

# Write content.ts file
with open(var.content, "w+") as f:
    f.write(content)


# Geneate Open Source data
utils.export_xls_as_list(img_folder="{}/images/open_source/".format(pwd),
                         filename=var.open_source_xls,
                         filename_output="{}/src/data/{}.json".format(
                             pwd, var.open_source_xls.split('.xls')[0].split('/')[-1]))

# Geneate Experience data
utils.export_xls_as_list(img_folder="{}/images/experiences/".format(pwd),
                         filename=var.experiences_xls,
                         filename_output="{}/src/data/{}.json".format(
                             pwd, var.experiences_xls.split('.xls')[0].split('/')[-1]))
