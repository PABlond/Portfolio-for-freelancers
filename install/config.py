import pathlib

class Variable:
    config = 'install/config.xls'
    content_template = 'install/content.template'
    gatsby_config_template = 'install/gatsby-config.template'
    gatsby_config = 'gatsby-config.js'
    content = 'src/data/content.ts'
    pwd = pathlib.Path(__file__).resolve().parents[1]
    build_folder = "{}/public".format(pwd)

    open_source_xls = 'install/open-source.xls'
    experiences_xls = 'install/experiences.xls'