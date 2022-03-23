"use strict";
let modelKinderWoman;

fetch('current.json')
.then(response => response.json())
.then(json => modelKinderWoman = json)
.catch(() => alert('что-то пошло не так'));

let modelKinderMan; 

fetch('current1.json')
.then(response => response.json())
.then(json => modelKinderMan = json)
.catch(() => alert('что-то пошло не так'));



let modelTeenegerWoman ={
    
                'VitaSur':{
                                    'age': 14,
                                    'photo':['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',],
                                },
                'LenaPozna':{
                                    'age': 11,
                                    'photo':['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',],
                                },
                'LizaMaza':{
                                    'age': 16,
                                    'photo':['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',],
                                },   
                            };
                
let modelTeenegerMan={
                'OlegTixoy':{
                                'age': 18,
                                'photo':['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',],
                            },
                'NazarTgfj':{
                                'age': 13,
                                'photo':['1.jpg','2.jpg','3.jpg','4.jpg',],
                            },
                        };
let classBtnMenu,
    classBtnMenu1,                    
    imgPhotoPrevModel,
    indexRusName,
    indexRusN,
    rusName,
    classPhotoModel,
    classNameModel,
    classImg,
    classDivClick,
    classDivClick1,
    classBack,
    classContestPageBtn,
    divNamePrevPhoto,
    divPrevPhotoEach,
    divBack,
    classCloz,
    divImg,
    divPhotoModel,
    divBlack,
    divBlack1,
    divClick,
    divClick1,
    clickNextFotoF,
    clikNext,
    clikNextHeight,
    clickNextFotoF1,
    clikNext1,
    clikNextHeight1,
    clozePhoto,
    countPhotoPrev,
    countFirstMenu = 0,
    counCreatePhotoModel = 0,
    countBtnModelClick = 0,
    countPhotoModeDel = 0,
    countPhoto = 0,
    countNextP = 0,
    countNextPR = 0,
    countNextDelL = 0,
    countNextDelR =0,
    leftPhotoPrev = 30,
    topPhotoPrev = 90, 
    arrNameModel = [],
    arrPhotoPrevModel = [],
    arrPhotoPrevModelEach = [],
    arrRusNameModel = [],
    arrAgeModel = [],
    funPhotoPrevEachModel = () => {},
    funDelPhotoPrevModel = () =>{},
    funDelPhotoEachM = () => {},
    indentPhotoPrev = () => {},
    funShowPhoto =() => {},
    funClickPhotoPrevEachModel = () =>{},
    funDelPhoto = () => {},
    funCreateClikNextL = () => {},
    funCreateClikNextR= () => {},
    funClickCreateFirstMenu = () => {},
    funCreateFirstMenu = () => {},
    contentt = document.querySelector('.content');
    contentt.style.height = `${document.documentElement.clientHeight}px`;




class AddPhoto {
    constructor(obj, gender2, age ){
        this.obj = obj;
        this.gender2 = gender2;
        this.age = age;
    }
    
    createPhotoPrev(){
        arrNameModel.splice(0);  // обнуление массива
        arrPhotoPrevModel.splice(0);
        arrPhotoPrevModelEach.splice(0);
        arrRusNameModel.splice(0);
        arrAgeModel.splice(0);
        for(let namem in this.obj) {  // создаются массивы
            arrNameModel.push(namem);//массив имен моделей
            arrPhotoPrevModel.push(this.obj[namem].photo[0]);//массив фото превью
            arrPhotoPrevModelEach.push(this.obj[namem].photo);// массив фото превью каждого
            arrRusNameModel.push(this.obj[namem].name);// массив русских имен
            arrAgeModel.push(this.obj[namem].age);// массив лет
        };
        funCreateFirstMenu = () => {
            funDelPhotoPrevModel(); // удаление инфы каждой страници
            funDelPhotoEachM();
            funDelPhoto();
            if(countBtnModelClick == 0){
                 
                for( let countPrevModel = 0; countPrevModel < arrNameModel.length; countPrevModel++ ){
                    if(counCreatePhotoModel > 4){ // создаю фото превью, если больше 5 перенос
                        topPhotoPrev = topPhotoPrev + 280;
                        leftPhotoPrev = 30;
                        counCreatePhotoModel = 0;
                    }
                    if(counCreatePhotoModel <5 ){
                        divPhotoModel = document.createElement('div');
                        divPhotoModel.classList.add('prevPhotoModel');
                        divPhotoModel.style.backgroundImage = `url(jpg/${this.age}/${this.gender2}/${arrNameModel[countPrevModel]}/prev/${arrPhotoPrevModel[countPrevModel]}) `;
                        divPhotoModel.innerHTML =`<p class ="pPrevPhoto">${arrRusNameModel[countPrevModel]}. ${arrAgeModel[countPrevModel]} Лет</p>`;
                        contentt.append(divPhotoModel);
                        divPhotoModel.style.marginLeft = `${leftPhotoPrev}px`;
                        divPhotoModel.style.marginTop = `${topPhotoPrev}px`;
                        leftPhotoPrev = leftPhotoPrev + 268;
                    }
                    countBtnModelClick = 1;
                    countFirstMenu = 1;
                }
            }
            
        };
        funCreateFirstMenu();
        funClickPhotoPrevEachModel = () =>{  //======================================== НАЖАТА ПРЕВЬЮ МОДЕЛИ ==============================
            imgPhotoPrevModel = document.querySelectorAll('.prevPhotoModel');
            imgPhotoPrevModel.forEach(countpreveach => {
                countpreveach.addEventListener('click', (e) => {
                    countPhotoPrev = e.target;
                    funPhotoPrevEachModel(countPhotoPrev);
                });
            });
        };
        funClickPhotoPrevEachModel();
        funPhotoPrevEachModel = (countTarg) =>{
            funDelPhotoPrevModel();
            counCreatePhotoModel = 0;
            indexRusName =countTarg.innerText.indexOf('.'); // с подписи под превью нахожу и вырезаю имч
            rusName = countTarg.innerText.substring(0, indexRusName);
            indexRusN = arrRusNameModel.indexOf(rusName);
            divNamePrevPhoto = document.createElement('div');
            divNamePrevPhoto.classList.add('nameModel');
            divNamePrevPhoto.innerHTML =`<p class ="nameModelP">${rusName}</p>`;// записываем имя в хедер
            contentt.append(divNamePrevPhoto);
            divBack = document.createElement('img');
            divBack.classList.add('backModell');
            divBack.src = `jpg/back.png`;
            contentt.append(divBack);
            for(let countEach = 0; countEach < arrPhotoPrevModelEach[indexRusN].length; countEach++){    
                if(counCreatePhotoModel > 4){  // создаю фото превью, если больше 5 перенос
                    topPhotoPrev = topPhotoPrev + 280;
                    leftPhotoPrev = 30;
                    counCreatePhotoModel = 0;
                }
                if(counCreatePhotoModel <5 ){
                    divPrevPhotoEach =document.createElement('div');
                    divPrevPhotoEach.classList.add('photoModel');
                    divPrevPhotoEach.style.backgroundImage = `url(jpg/${this.age}/${this.gender2}/${arrNameModel[indexRusN]}/prev/${arrPhotoPrevModelEach[indexRusN][countEach]}) `;
                    divPrevPhotoEach.innerHTML =`<p class ="numberPhoto">${countEach}</p>`;
                    contentt.append(divPrevPhotoEach);
                    divPrevPhotoEach.style.marginLeft = `${leftPhotoPrev}px`;
                    divPrevPhotoEach.style.marginTop = `${topPhotoPrev}px`;
                    divPrevPhotoEach.style.marginBottom = `20px`;
                    leftPhotoPrev = leftPhotoPrev + 268;
                    counCreatePhotoModel++;
                }
            }    
            countPhotoModeDel = 1;
            classBack = document.querySelector('.backModell');
            classBack.addEventListener('click',() => {
                funDelPhotoEachM();
                funCreateFirstMenu();
                funClickPhotoPrevEachModel();
            });
            funShowPhoto();        
        };
        funShowPhoto =() => { // ===============================================================НАЖАЛ НА ФОТО КАЖДОЙ МОДЕЛИ===================
            classPhotoModel = document.querySelectorAll('.photoModel');
            classPhotoModel.forEach(showphoto => {
                showphoto.addEventListener('click', (e) => { // создаю фото  и кнопки
                    let countNextPhoto =  +e.target.innerText;
                    divBlack = document.createElement('div'); //  фон 
                    divBlack.classList.add('photoModelShov1');
                    contentt.append(divBlack);
                    divBlack1 = document.querySelector('.photoModelShov1');
                    divBlack1.style.height = `${document.documentElement.clientHeight}px`;
                    divClick = document.createElement('div'); // подложка под кнопки перемота
                    divClick.classList.add('divClick');
                    contentt.append(divClick);  
                    divClick1 = document.createElement('div');
                    divClick1.classList.add('divClick1');
                    contentt.append(divClick1); 
                    funCreateClikNextL = () => {      // кнопки перемота
                        clickNextFotoF = document.createElement('img');
                        clickNextFotoF.classList.add('clik');
                        clickNextFotoF.src =`jpg/clik.png`;
                        contentt.append(clickNextFotoF);
                        countNextP = 1;
                        countNextDelL = 0;
                        clikNext =document.querySelector('.clik');
                        if(countNextPhoto == 0){
                            clikNext.remove();
                            countNextP = 0;
                            countNextDelL = 1;
                        }
                        clikNext.addEventListener('click', (e) =>{
                            if (countNextPhoto != 0){
                                countNextPhoto = countNextPhoto -1;
                                divImg.src = `jpg/${this.age}/${this.gender2}/${arrNameModel[indexRusN]}/${arrPhotoPrevModelEach[indexRusN][countNextPhoto]}`;
                                if(countNextPhoto ==0){
                                    clikNext.remove();
                                    countNextP = 0;
                                    countNextDelL = 1; 
                                }
                            }
                            if (countNextPhoto < arrPhotoPrevModelEach[indexRusN].length - 1){
                                if(countNextDelR == 1){
                                        funCreateClikNextR();
                                        countNextDelR = 0;
                                        
                                 }
                                    
                            }
                        });
                    }
                    funCreateClikNextL();    
                    funCreateClikNextR = () => {   
                        clickNextFotoF1 = document.createElement('img');
                        clickNextFotoF1.src =`jpg/clik1.png`;
                        clickNextFotoF1.classList.add('clik1');
                        contentt.append(clickNextFotoF1);
                        countNextPR = 1;
                        countNextDelR = 0;
                        clikNext1= document.querySelector('.clik1');
                       
                        if (countNextPhoto == arrPhotoPrevModelEach[indexRusN].length - 1){
                            clikNext1.remove();
                               countNextPR = 0;
                            countNextDelR = 1;
                        }  
                        clikNext1.addEventListener('click', () =>{
                            if (countNextPhoto < arrPhotoPrevModelEach[indexRusN].length - 1){
                                countNextPhoto = countNextPhoto +1;
                                divImg.src = `jpg/${this.age}/${this.gender2}/${arrNameModel[indexRusN]}/${arrPhotoPrevModelEach[indexRusN][countNextPhoto]}`;
                                if (countNextPhoto == arrPhotoPrevModelEach[indexRusN].length - 1){
                                    clikNext1.remove();
                                    countNextPR = 0;
                                    countNextDelR = 1;
                                }
                            }
                            if (countNextPhoto > 0){
                                if(countNextDelL == 1){
                                        funCreateClikNextL();
                                        countNextDelL = 0;
                                }
                                    
                            }
                        });
                    }    
                    funCreateClikNextR();
                    divImg = document.createElement('img'); // фото
                    divImg.classList.add('imgw1');
                    divImg.src = `jpg/${this.age}/${this.gender2}/${arrNameModel[indexRusN]}/${arrPhotoPrevModelEach[indexRusN][e.target.innerText]} `;
                    contentt.append(divImg);
                    divImg.onload = () =>{
                        countPhoto = 1;
                    }
                    clozePhoto = document.createElement('img');// кнопка закрытия
                    clozePhoto.src = `jpg/close.png`;
                    clozePhoto.classList.add('clozPhoto');
                    contentt.append(clozePhoto);
                    classCloz = document.querySelector('.clozPhoto');
                    classCloz.addEventListener('click', () =>{
                        funDelPhoto();
                    });
                    divBlack1.addEventListener('click', ()=> {
                        funDelPhoto();
                    });
                });
            });
        };





        //=========================================ФУНКЦИИ===================================================================

        funDelPhotoPrevModel = () =>{ // удаление превью моделей
            if(countFirstMenu == 1){
                imgPhotoPrevModel.forEach(delphotoprev => {
                    delphotoprev.remove();
                    countBtnModelClick = 0;
                    indentPhotoPrev();
                });
                countFirstMenu = 0;   
            }
        };

        funDelPhotoEachM = () => { // удаление превью каждой модели
            if(countPhotoModeDel == 1){
                classBack = document.querySelector('.backModell');
                classPhotoModel = document.querySelectorAll('.photoModel');
                classNameModel = document.querySelector('.nameModel');
                classNameModel.remove();
                classBack.remove();
                classPhotoModel.forEach(delpheach => {
                    delpheach.remove();
                });
                countPhotoModeDel = 0;
                indentPhotoPrev();
            } 
        };

        funDelPhoto = () => { // удаление контента фото и кнопок
            if(countPhoto == 1){
                classCloz = document.querySelector('.clozPhoto');
                divBlack1 = document.querySelector('.photoModelShov1');
                classImg = document.querySelector('.imgw1');
                if(countNextP == 1){
                    clikNext= document.querySelector('.clik');
                    clikNext.remove();
                    countNextP = 0;
                }
                if(countNextPR == 1){
                    clikNext1= document.querySelector('.clik1');
                    clikNext1.remove();
                    countNextPR = 0;
                }
                classDivClick =document.querySelector('.divClick');
                classDivClick1 =document.querySelector('.divClick1');
                classDivClick.remove();
                classDivClick1.remove();
                divBlack1.remove();
                classImg.remove();
                classCloz.remove();
                countPhoto = 0;
            }
        };

        indentPhotoPrev = () => {// отступы первого превью фото
            counCreatePhotoModel = 0;
            leftPhotoPrev = 30;
            topPhotoPrev = 90;
        };
        
    }   
}

classBtnMenu = document.querySelector('.menuPhotoKinderManBtn');
classBtnMenu.addEventListener('click', () =>{           //=====================================НАЖАТО МЕНЮ 1========================
    let a = new AddPhoto(modelKinderMan, 'man', 'kinder').createPhotoPrev();
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
    if(countDelContentContest == 1){
        classShowPrevFotoContest.remove();
        countDelContentContest = 0;
        photoLeft = 0;
        photoTop = 90;
        countRound = 0;
    }
});

classBtnMenu1 = document.querySelector('.menuPhotoKinderWBtn');
classBtnMenu1.addEventListener('click', () =>{           //=====================================НАЖАТО МЕНЮ 2========================
    let b = new AddPhoto(modelKinderWoman, 'woman', 'kinder').createPhotoPrev();
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
    if(countDelContentContest == 1){
        classShowPrevFotoContest.remove();
        countDelContentContest = 0;
        photoLeft = 0;
        photoTop = 90;
        countRound = 0;
    }
});

classContestPageBtn = document.querySelector('.contestPage');
classContestPageBtn.addEventListener('click', () => {
    funDelPhotoPrevModel = () =>{ // удаление превью моделей
        if(countFirstMenu == 1){
            imgPhotoPrevModel.forEach(delphotoprev => {
                delphotoprev.remove();
                countBtnModelClick = 0;
                indentPhotoPrev();
            });
            countFirstMenu = 0;   
        }
    };
    funDelPhotoPrevModel();
    funDelPhotoEachM = () => { // удаление превью каждой модели
        if(countPhotoModeDel == 1){
            classBack = document.querySelector('.backModell');
            classPhotoModel = document.querySelectorAll('.photoModel');
            classNameModel = document.querySelector('.nameModel');
            classNameModel.remove();
            classBack.remove();
            classPhotoModel.forEach(delpheach => {
                delpheach.remove();
            });
            countPhotoModeDel = 0;
            indentPhotoPrev();
        } 
    };
    funDelPhotoEachM();
    funDelPhoto = () => { // удаление контента фото и кнопок
        if(countPhoto == 1){
            classCloz = document.querySelector('.clozPhoto');
            divBlack1 = document.querySelector('.photoModelShov1');
            classImg = document.querySelector('.imgw1');
            if(countNextP == 1){
                clikNext= document.querySelector('.clik');
                clikNext.remove();
                countNextP = 0;
            }
            if(countNextPR == 1){
                clikNext1= document.querySelector('.clik1');
                clikNext1.remove();
                countNextPR = 0;
            }
            classDivClick =document.querySelector('.divClick');
            classDivClick1 =document.querySelector('.divClick1');
            classDivClick.remove();
            classDivClick1.remove();
            divBlack1.remove();
            classImg.remove();
            classCloz.remove();
            countPhoto = 0;
        }
    };
    funDelPhoto();
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
    if(countDelContentContest == 1){
        classShowPrevFotoContest.remove();
        countDelContentContest = 0;
        photoLeft = 0;
        photoTop = 90;
        countRound = 0;
    }
    new Contest(objContestFirst, 'contest').createPhotoContest();
    
});




