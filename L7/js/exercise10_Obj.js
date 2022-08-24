const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan){
        const leng = [...plan.skills.languages].join(' ').toLocaleUpperCase();
        return `Мне ${plan.age} и я владею языками: ${leng}`
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    const programmingLangs = {...plan.skills.programmingLangs};
    let result = '';

    for (let key in programmingLangs) {
        result = result + `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return result;
}
//console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));