"use strict";

let objContestFirst;
const funContest = async (url) => {
    const rez = await fetch(url);
    return await rez.json();
};    


let divPhotoPrev,
    divDivPhotoPrev,
    divShovPhotoContest,
    divBackPhoto,
    divNextPhoto,
    divWidth,
    widthNoMargin,
    leftAdaption,
    numberPhotoShow, 
    countCreatePhoto,
    countPhotoNext,
    countBackPhoto = 0,
    countNextPhoto = 0,
    countRound = 0,
    countDelBackPhoto = 0,
    countDelNextPhoto = 0,
    countDelContest = 0,
    countDelContentContest = 0,
    backNextPhoto,
    nextNextPhoto,
    blackPhon1,
    photoLeft = 0,
    photoTop = 90,
    classBackNextPhoto,
    classNextNextPhoto,
    classNextPhoto,
    classBackPhoto,
    classShowPrevFotoContest,
    funNextPhoto = () => {},
    funBackPhoto = () => {},
    contentContest = document.querySelector('.content');
    



class Contest{
    constructor(objj, way, urll){
        this.objj = objj;
        this.way = way;
        this.urll = urll;
    }

    createPhotoContest(){
        funContest(this.urll)
        .then(data =>{
             this.objj = data;
            contentContest.style.height = `${document.documentElement.clientHeight}px`;
            divDivPhotoPrev = document.createElement('div'); 
            contentContest.append(divDivPhotoPrev);
            divDivPhotoPrev.classList.add('contentCPP');
            countCreatePhoto = Math.floor(document.documentElement.clientWidth / 260);
            leftAdaption = (document.documentElement.clientWidth -60)/ countCreatePhoto;
            widthNoMargin = leftAdaption - 250;
            divWidth = (countCreatePhoto * leftAdaption) - widthNoMargin;
            divDivPhotoPrev.style.width = `${divWidth}px`;
            for(let countContest = 0; countContest < this.objj.length; countContest++){
                if(countRound < countCreatePhoto){
                    divPhotoPrev = document.createElement('div');
                    divPhotoPrev.classList.add('contestPhotoPrev');
                    divPhotoPrev.style.backgroundImage = `url(jpg/${this.way}/prev/${this.objj[countContest]})`;
                    divPhotoPrev.innerHTML = `<p class="numberPhotoContest"> ${countContest} </p>`;
                    divDivPhotoPrev.append(divPhotoPrev);
                    divPhotoPrev.style.left = `${photoLeft}px`;
                    divPhotoPrev.style.top = `${photoTop}px`;
                    photoLeft = photoLeft + leftAdaption;
                    countRound++;
                }  
                if(countRound >= countCreatePhoto){
                    photoLeft = 0;
                    photoTop = photoTop + 200;
                    countRound = 0;
                }
                countDelContentContest = 1;
            }
                
            classShowPrevFotoContest = document.querySelector('.contentCPP');
            classShowPrevFotoContest.addEventListener('click', (e)=> {
                if(e.target.className == 'contestPhotoPrev'){
                    countPhotoNext = +e.target.innerText;
                    divNextPhoto = document.createElement('div');
                    divNextPhoto.classList.add('divNextPhoto1');
                    contentContest.append(divNextPhoto);
                    divBackPhoto =document.createElement('div');
                    divBackPhoto.classList.add('divNextPhoto');
                    contentContest.append(divBackPhoto);
                    classBackPhoto = document.querySelector('.divNextPhoto');
                    classNextPhoto = document.querySelector('.divNextPhoto1');
                    blackPhon1 =document.createElement('div');
                    blackPhon1.classList.add('blackPhone');
                    contentContest.append(blackPhon1);
                    blackPhon1.style.height = `${document.documentElement.clientHeight}px`;
                    funBackPhoto = () =>{   
                        backNextPhoto = document.createElement('img');
                        backNextPhoto.classList.add('nextPhoto');
                        backNextPhoto.src = `jpg/clik.png`;
                        contentContest.append(backNextPhoto);
                        countBackPhoto  = 1;
                        countDelBackPhoto = 0;
                        classBackNextPhoto = document.querySelector('.nextPhoto');
                        if(countPhotoNext == 0){
                            classBackNextPhoto.remove();
                            countBackPhoto = 0;
                            countDelBackPhoto = 1;
                        }
                        classBackNextPhoto.addEventListener('click', () => {
                            if(countPhotoNext != 0) {
                                countPhotoNext -- ;
                                divShovPhotoContest.src = `jpg/${this.way}/${this.objj[countPhotoNext]}`; 
                            }
                            if(countPhotoNext == 0){
                                classBackNextPhoto.remove();
                                countBackPhoto = 0;
                                countDelBackPhoto = 1;
                            }
                            if(countDelNextPhoto < this.objj.length - 1){
                                if(countDelNextPhoto == 1){
                                    countDelNextPhoto = 0;
                                    funNextPhoto();
                                    
                                }
                            }
                        });
                    }; 
                    funBackPhoto();     
                    
                    funNextPhoto = () => {
                        nextNextPhoto = document.createElement('img');
                        nextNextPhoto.classList.add('nextPhoto1');
                        nextNextPhoto.src = `jpg/clik1.png`;
                        contentContest.append(nextNextPhoto);
                        countNextPhoto = 1;
                        countDelNextPhoto = 0;
                        classNextNextPhoto = document.querySelector('.nextPhoto1'); 
                        if(countPhotoNext == this.objj.length - 1){
                            classNextNextPhoto.remove();
                            countNextPhoto = 0;
                            countDelNextPhoto =1;
                        }
                        classNextNextPhoto.addEventListener('click', () => {
                            if(countPhotoNext == this.objj.length - 1){
                                classNextNextPhoto.remove();
                                countNextPhoto = 0;
                                countDelNextPhoto = 1;
                            }
                            if(countPhotoNext < this.objj.length - 1){
                                countPhotoNext ++;
                                divShovPhotoContest.src = `jpg/${this.way}/${this.objj[countPhotoNext]}`;
                            }
                            if(countPhotoNext > 0){
                                if(countDelBackPhoto == 1){ 
                                    countDelBackPhoto = 0;
                                    funBackPhoto();
                                }    
                            }
                            
                        });
                    };
                    funNextPhoto();
                    divShovPhotoContest = document.createElement('img'); 
                    divShovPhotoContest.classList.add('photoShov');
                    divShovPhotoContest.src = `jpg/${this.way}/${this.objj[e.target.innerText]}`;
                    contentContest.append(divShovPhotoContest);
                    countDelContest = 1;
                    blackPhon1.addEventListener('click', () => {
                        if(countDelContest == 1){
                            blackPhon1.remove();
                            divShovPhotoContest.remove();
                            classBackPhoto.remove();
                            classNextPhoto.remove();
                            if(countNextPhoto == 1){
                                classNextNextPhoto.remove();
                                countNextPhoto = 0;
                            }
                            if(countBackPhoto == 1){
                                classBackNextPhoto.remove();
                                countBackPhoto = 0;
                            }
                            countDelContest = 0;
                        }    
                    });
                }    
            });       

        });
  
    }

}

