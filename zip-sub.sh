cd $1
rm -f ../subs/zip/$1-t6g06-$2.zip
zip -r ../subs/zip/$1-t6g06-$2.zip . -x '*.pdf'
