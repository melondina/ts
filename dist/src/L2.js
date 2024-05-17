"use strict";
{ //union
    let count; //union
    count = 1;
    let obj = null;
    obj = {
        name: 'Dina',
        age: 35,
    };
    const logger = (id) => {
        if (typeof id === 'string') {
            console.log(id.toUpperCase()); // methods for string
        }
        else {
            console.log(id); //methods for number
        }
    };
    const loggerObj = (obj) => {
        if ('a' in obj) {
            console.log(obj.a);
        }
        else
            obj.b;
    }; //сужение типов
    const loggerError = (error) => {
        if (Array.isArray(error)) {
            for (const str of error) {
                str;
            }
        }
        if (error instanceof Error) {
            console.log(error);
        }
    };
    const loggerError1 = (error) => {
        throw new Error(error);
    };
    const hole = null;
    const vacuum = undefined;
    const vacuum1 = undefined;
    const html = [1, 'html', 10];
    const css = [2, 'css', 20];
    const js = [3, 'js', 30];
    const allSkills = [
        [1, 'html', 10],
        [2, 'css', 20],
        [3, 'js', 30],
    ];
    const m1 = {
        index: 1,
        title: 'html',
        hours: 5,
    };
    const m2 = {
        index: 2,
        title: 'css',
        hours: 15,
        descriptionFinalProject: 'A',
        hoursFinalProject: 10,
    };
    const course = [
        {
            index: 1,
            title: 'html',
            hours: 5,
        },
        {
            index: 2,
            title: 'css',
            hours: 15,
        },
    ];
    // type ModuleWithFinalProject = module | FinalProject; //union
    //literal
    const a = 2; // присваиваем дитеральный тип сразу;
    let b = 2;
    b = 3; //можем присвоить только 2 или 3
    const apiService = (url, method) => {
        fetch(url, {
            method,
        });
    };
    const method = 'POST';
    const objO = {
        method: 'POST'
    };
    apiService('http://site.com', objO.method);
    //ENUM
    let LOCALE;
    (function (LOCALE) {
        LOCALE["RU"] = "ru-RU";
        LOCALE["EN"] = "en-US";
    })(LOCALE || (LOCALE = {}));
    const translate = (lang, text) => {
        //translation
        return text;
    };
    translate(LOCALE.EN, 'text');
    let TypeUser;
    (function (TypeUser) {
        TypeUser["admin"] = "admin";
        TypeUser["moderator"] = "moderator";
        TypeUser["user"] = "user";
    })(TypeUser || (TypeUser = {}));
    console.log(TypeUser['moderator']);
    let statusCode;
    (function (statusCode) {
        statusCode["SUCCESS"] = "success";
        statusCode["PROCESS"] = "process";
        statusCode["FAILED"] = "failed";
    })(statusCode || (statusCode = {}));
    const res = {
        message: 'Success',
        statusCode: statusCode.SUCCESS,
    };
    if (res.statusCode === statusCode.PROCESS) {
        //preloader
    }
    const div = (a, b, round) => {
        const res = a / b;
        if (round) {
            return Math.round(res);
        }
        return res;
    };
    div(15, 4, true);
    const fetchData = (res) => {
        if (res.status === 'pending') {
        }
        if (res.status === 'success') {
        }
        if (res.status === 'failed') {
        }
    };
}
