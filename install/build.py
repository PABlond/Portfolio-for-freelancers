import pathlib
import shutil
import config
import subprocess
import install

install.run()
subprocess.call('npm run build', shell=True)

vars = config.Variable()
my_file = pathlib.Path("{}/install/cv.pdf".format(vars.pwd))
to_file = pathlib.Path("{}/resume_{}.pdf".format(
    vars.build_folder, "Pierre-Alexis_Blond"))
shutil.copy(str(my_file), str(to_file))