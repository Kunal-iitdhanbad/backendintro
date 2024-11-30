# backendintro

#adding file in github
1.git init
2.git add .
3.git commit -m "messsage"
4.git branch -M main
5.git remote add origin https://github.com/Kunal-iitdhanbad/backendintro.git
6.git push -u origin main

#if there is issue of rejected because of previous main file
1.git fetch origin main:tmp
2.git rebase tmp
3.git push origin HEAD:main
4.git branch -D tmp


