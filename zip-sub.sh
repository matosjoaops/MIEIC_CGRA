# zip-sub
# usage: ./zip-sub.sh dir num
# Zips content of folder to submit.
# dir   directory to zip
# num   number of submission
cd $1
rm -f ../subs/zip/$1-t6g06-$2.zip
zip -r ../subs/zip/$1-t6g06-$2.zip . -x '*.pdf'
