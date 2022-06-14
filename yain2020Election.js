// 중구의 인구는 을지로동을 제외했음
// 동대문구의 인구는 청량리동을 제외했음
// umigwan = 우미관패,backHospital = 백병원패,unified = 통합패
let electionData = [
    { district:'종로',population:149549,umigwan:72,backHospital:9,unified:19 },
    { district:'중구',population:123671,umigwan:19,backHospital:72,unified:9 },
    { district:'동대문',population:323196,umigwan:19,backHospital:9,unified:72 },
    { district:'서대문',population:312325,umigwan:72,backHospital:19,unified:9 },
    { district:'을지로',population:1834,umigwan:9,backHospital:72,unified:19 },
    { district:'성북',population:438051,umigwan:19,backHospital:9,unified:72 },
    { district:'부산',population:3395514,umigwan:72,backHospital:9,unified:19 },
    { district:'동작',population:391896,umigwan:19,backHospital:72,unified:9 },
    { district:'청량리',population:20181,umigwan:9,backHospital:19,unified:72 },
    { district:'용산',population:230151,umigwan:72,backHospital:9,unified:19 }
];

let sum = {
    umigwan:0,
    backHospital:0,
    unified:0
};

electionData.forEach(a => {
    sum.umigwan += a.population*(a.umigwan/100);
    sum.backHospital += a.population*(a.backHospital/100);
    sum.unified += a.population*(a.unified/100);
});

let populationSum = electionData
.map(a => a.population)
.reduce((a,b) => a+b,0);
console.log('득표율:');
console.log('우미관패',sum.umigwan/populationSum*100,'%');
console.log('백병원패',sum.backHospital/populationSum*100,'%');
console.log('통합패',sum.unified/populationSum*100,'%');

console.log(({
    umigwan:'우미관패',
    backHospital:'백병원패',
    unified:'통합패'
})[Object.entries(sum).sort((a,b) => b[1] - a[1])[0][0]],'승');
